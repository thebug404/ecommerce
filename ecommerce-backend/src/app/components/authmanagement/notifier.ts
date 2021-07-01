import { Application } from "@feathersjs/express";
import { Options, Types, User as UserManagement } from "feathers-authentication-management-ts";

import { Mailer } from "../mailer/strategies/VerificationEmail";
import { User } from "../users/user.controller";

import { strategies } from "../mailer/strategies/index.strategies";

export function notifier(app: Application): Partial<Options> {
    return {
        service: "/api/users",
        notifier: async function(type: Types, user: UserManagement) {
            const strategy = strategies(app)[type] as Mailer | undefined;
            return await strategy?.send(user as User);
        }
    };
}
