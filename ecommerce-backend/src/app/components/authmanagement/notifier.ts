import * as authmanagement from "feathers-authentication-management-ts";
import { Application } from "@feathersjs/express";
import { Service } from "@feathersjs/feathers";
import { SendMailOptions } from "nodemailer";

import { strategies } from "./strategies/index.strategies";

export function notifier(
    app: Application
): Partial<authmanagement.Options> {
    return {
        service: "/api/users",
        notifier: function(
            type: authmanagement.Types,
            user: authmanagement.User
        ): void {
            const senderEmail: string = app.get("sender_email");
            const host: string = app.get("frontend_uri");

            const mailer: Service<SendMailOptions> = app.service("/api/mailer");

            const strategy = strategies[type];
            if (!strategy) return console.error("Strategy not found.");

            mailer.create(strategy({ user, host, senderEmail }))
                .then(() => console.log("Email sent successfully."))
                .catch(console.error);
        }
    };
}
