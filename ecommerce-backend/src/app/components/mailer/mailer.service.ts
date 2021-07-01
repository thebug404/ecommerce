import { Application } from "@feathersjs/express";
import { Service } from "@feathersjs/feathers";

import { mailerHooks } from "./mailer.hooks";
import { Mailer, MailerController } from "./mailer.controller";

export function mailerService(app: Application) {
    app.use("/api/mailer", new MailerController);

    const service: Service<Mailer> = app.service("/api/mailer");

    service.hooks(mailerHooks);
}
