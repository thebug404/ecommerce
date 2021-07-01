import { Application, HookContext } from "@feathersjs/feathers";
import { SentMessageInfo } from "nodemailer";

import nodemailer from "../../../config/nodemailer";

import { Mailer } from "../mailer.controller";

export interface SenderEmail {
    readonly type: string;
    send(data: Mailer): Promise<[SentMessageInfo | null, Error | null]>;
}

export class VerifySignUp implements SenderEmail {
    readonly type = "verifySignup";

    constructor(private context: Partial<HookContext>) {}

    async send(data: Mailer): Promise<[SentMessageInfo | null, Error | null]> {
        try {
            const result = await nodemailer(this.context.app as Application).sendMail({
                from: data.from || "ivanzaldivar16@gmail.com",
                to: data.to || "thebug401@gmail.com",
                subject: data.subject || "Verificacion de correco electronico",
                text: data.text || "Verifica tu cuenta de correco electronico para disfrutar de nuestros servicios."
            });
            return [result,  null];
        } catch (error) {
            return [null, error];
        }
    }
}
