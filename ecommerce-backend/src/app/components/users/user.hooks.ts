import { HooksObject, Service } from "@feathersjs/feathers";
import * as authLocal from "@feathersjs/authentication-local";
import * as auth from "@feathersjs/authentication";
import authmanagement from "feathers-authentication-management-ts";
import commonHooks from "feathers-hooks-common";

import verifyExistenceUserByEmailHook from "./hooks/verifyExistenceUserByEmail.hook";
import { Mailer } from "../mailer/mailer.controller";
import { VerifySignUp } from "../mailer/strategies/VerifySingUp.strategy";
import { SendMailNodemailer } from "../mailer/strategies/SendMailNodemailer";

const { authenticate } = auth.hooks;
const { protect, hashPassword } = authLocal.hooks;

export const userHooks: HooksObject = {
    before: {
        create: [
            hashPassword("password"),
            authmanagement.hooks.addVerification(),
            verifyExistenceUserByEmailHook,
        ],
        patch: [
            commonHooks.iff(
                commonHooks.isProvider('external'),
                commonHooks.preventChanges(true,
                    'email',    
                    'isVerified',
                    'verifyToken',
                    'verifyShortToken',
                    'verifyExpires',
                    'verifyChanges',
                    'resetToken',
                    'resetShortToken',
                    'resetExpires')
                )
        ]
    },
    after: {
        all: [ protect("password") ],
        create: [
            async (context) => {
                // const service: Service<Mailer> = context.app.service("/api/mailer");
                await new SendMailNodemailer(context.app).send({
                    from: "ivanzaldivar16@gmail.com",
                    to: "thebug401@gmail.com",
                    subject: "Verificar email.",
                    text: `http://localhost:8080/verify/?token=${ context.result.verifyToken }`
                });
            },
            authmanagement.hooks.removeVerification()
        ]
    },
    error: {}
}
