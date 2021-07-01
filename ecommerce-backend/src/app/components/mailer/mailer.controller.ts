import { Params, ServiceMethods } from "@feathersjs/feathers";
import { BadRequest } from "@feathersjs/errors";

import { SenderEmail } from "./strategies/VerifySingUp.strategy";

export interface Mailer {
    from: string;
    to: string;
    subject: string;
    text?: string;
    html?: string;
}

export class MailerController implements Partial<ServiceMethods<Mailer>> {
    async create(data: Mailer, params: Params) {
        const options = params.query as { strategy: SenderEmail };
        const [result, error] = await options.strategy.send(data);
        if (error) throw new BadRequest({
            name: "EmailSendingError",
            message: "El email no fue despachado."
        });

        return result;
    }
}
