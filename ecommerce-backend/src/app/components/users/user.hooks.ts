import authmanagement from "feathers-authentication-management-ts";
import * as authLocal from "@feathersjs/authentication-local";
import { HooksObject } from "@feathersjs/feathers";
import commonHooks from "feathers-hooks-common";

import { Roles } from "../../interfaces/general.interfaces";

import verifyExistenceUserByEmailHook from "./hooks/verifyExistenceUserByEmail.hook";
import { sendEmailVerification } from "./hooks/sendEmailVerification.hook";
import { verifyRoles } from "../../auth/utils/verifyRoles.hook";

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
                    'resetExpires'
                )
            ),
        ],
        update: [verifyRoles([Roles.Admin])],
        remove: [verifyRoles([Roles.Admin])]
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
