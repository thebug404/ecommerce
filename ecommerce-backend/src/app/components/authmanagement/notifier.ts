import * as authmanagement from "feathers-authentication-management-ts";
import { Application } from "@feathersjs/express";

import { Mailer } from "../mailer/strategies/VerificationEmail";
import { User } from "../users/user.controller";

import { strategies } from "../mailer/strategies/index.strategies";

export function notifier(
    app: Application
): Partial<authmanagement.Options> {
    return {
        service: "/api/users",
        notifier: function(
            type: authmanagement.Types,
            user: authmanagement.User
        ) {
            const strategy = strategies(app)[type] as Mailer | undefined;
            strategy?.send(user as User)
              .then(() => console.log("Email sent successfully"))
              .catch(error => console.error(error));
        }
    };
}
