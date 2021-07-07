import { SendMailOptions } from "nodemailer";

import { EmailEntity } from "./index.strategies";

import { confirmationEmailTemplate } from "../../mailer/templates/confirmationEmail.template";

export function confirmationEmail(
    payload: EmailEntity
): Partial<SendMailOptions> {
    const { user, host, senderEmail } = payload;

    return {
        from: senderEmail,
        to: user.email,
        subject: "Confirmacion de correo electronico.",
        text: "Tu cuenta ha sido verificada con exito, inicia sesion y disfruta de nuestros servicios.",
        html: confirmationEmailTemplate({ host, user })
    };
}
