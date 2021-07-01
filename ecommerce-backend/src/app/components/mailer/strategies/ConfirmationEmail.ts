import { Application } from "@feathersjs/express";
import { Transporter } from "nodemailer";

import { User } from "../../users/user.controller";
import { Mailer } from "./VerificationEmail";

import nodemailer from "../../../config/nodemailer";

import { confirmationEmailTemplate } from "../templates/confirmationEmail.template";

export class ConfirmationEmail implements Partial<Mailer> {
    private mailer: Transporter;
    
    constructor(private app: Application, private data?: Omit<Mailer, "send" | "to">) {
        this.mailer = nodemailer(app);
    }

    async send(user: User) {
        const host: string = this.app.get("frontend_uri");
        
        return await this.mailer.sendMail({
            from: this.data?.from || "ivanzaldivar16@gmail.com",
            to: user.email,
            subject: this.data?.subject || "Confirmacion de correo electronico.",
            text: this.data?.text || "Tu cuenta ha sido verificada con exito, inicia sesion y disfruta de nuestros servicios.",
            html: confirmationEmailTemplate({ user, host })
        });
    }
}
