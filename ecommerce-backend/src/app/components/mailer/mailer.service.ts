import { Application } from "@feathersjs/express";
import { Service } from "@feathersjs/feathers";

import { mailerHooks } from "./mailer.hooks";
import { EmailPostman, MailerController } from "./mailer.controller";

export function mailerService(app: Application) {
    app.use("/api/mailer", new MailerController);

    const service: Service<EmailPostman> = app.service("/api/mailer");

    service.hooks(mailerHooks);
}
