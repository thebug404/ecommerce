import { Application } from "@feathersjs/express";
import { Transporter } from "nodemailer";

import nodemailer from "../../../config/nodemailer";

import { User } from "../../users/user.controller";

import { verificationEmailTemplate } from "../templates/verificationEmail.template";

export interface Mailer {
    from: string;
    to?: string;
    subject: string;
    text?: string;
    send(user: User): Promise<any>;
}

export class VerificationEmail implements Partial<Mailer> {
    private mailer: Transporter;
    
    constructor(private app: Application, private data?: Omit<Mailer, "send" | "to">) {
        this.mailer = nodemailer(app);
    }

    async send(user: User) {
        const url: string = `${ this.app.get("frontend_uri") }/verifyEmail/${ user.verifyToken }`;
        const host: string = this.app.get("frontend_uri");
        
        return await this.mailer.sendMail({
            from: this.data?.from || "ivanzaldivar16@gmail.com",
            to: user.email,
            subject: this.data?.subject || "Verificacion de correo electronico.",
            text: this.data?.text || "Verifica tu cuenta para poder acceder a nuestros servicios.",
            html: verificationEmailTemplate({ user, url, host })
        });
    }
}
