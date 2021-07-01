import { HooksObject } from "@feathersjs/feathers";
import * as authLocal from "@feathersjs/authentication-local";
import authmanagement from "feathers-authentication-management-ts";
import commonHooks from "feathers-hooks-common";

import verifyExistenceUserByEmailHook from "./hooks/verifyExistenceUserByEmail.hook";
import { sendEmailVerification } from "./hooks/sendEmailVerification.hook";

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
            sendEmailVerification,
            authmanagement.hooks.removeVerification()
        ]
    },
    error: {}
}
