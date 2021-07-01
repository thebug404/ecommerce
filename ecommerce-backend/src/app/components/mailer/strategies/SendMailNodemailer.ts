import { Application } from "@feathersjs/feathers";
import { SentMessageInfo, Transporter } from "nodemailer";
import nodemailer from "nodemailer";
import { Mailer } from "../mailer.controller";

export interface SendEmail {
    readonly type: string;
    send(data: Mailer): Promise<any>;
}

export class SendMailNodemailer implements SendEmail {
    private mailer: Transporter;
    readonly type = "";

    constructor(private app: Application) {
        this.mailer = nodemailer.createTransport(app.get("mailer"));
    }

    async send(data: Mailer): Promise<[SentMessageInfo | null, Error | null]> {
        try {
            const result = await this.mailer.sendMail(data);
            return [result, null];
        } catch (error) {
            return [null, error];
        }
    }
}
