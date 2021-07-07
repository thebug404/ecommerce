import { SendMailOptions, Transporter } from "nodemailer";
import { ServiceMethods } from "@feathersjs/feathers";
import { Application } from "@feathersjs/express";
import nodemailer from "nodemailer";

export class MailerClass implements Partial<
    ServiceMethods<SendMailOptions>
> {
    private mailer: Transporter;

    constructor(app: Application) {
        this.mailer = nodemailer.createTransport(app.get("mailer"));
    }

    async create(data: SendMailOptions): Promise<any> {
        return await this.mailer.sendMail(data);
    }
}
