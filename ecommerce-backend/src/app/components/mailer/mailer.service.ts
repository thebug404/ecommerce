import { Application } from "@feathersjs/express";
import { Service } from "@feathersjs/feathers";
import { SendMailOptions } from "nodemailer";

import { hooks as MailerHooks } from "./mailer.hooks";

import { MailerClass } from "./mailer.class";

export function service(app: Application): void {
    app.use("/api/mailer", new MailerClass(app));

    const service: Service<SendMailOptions> = app.service("/api/mailer");

    service.hooks(MailerHooks);
}
