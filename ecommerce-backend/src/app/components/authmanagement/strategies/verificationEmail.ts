import { SendMailOptions } from "nodemailer";

import { EmailEntity } from "./index.strategies";

import { verificationEmailTemplate } from "../../mailer/templates/verificationEmail.template";

export function verificationEmail(
    payload: EmailEntity
): Partial<SendMailOptions> {
    const { host, user, senderEmail } = payload;
    const url: string = `${ payload.host }/verifyEmail/${ payload.user.verifyToken }`;
    const html: string = verificationEmailTemplate({ url, host, user });

    return {
        from: senderEmail,
        to: user.email,
        subject: "Verificacion de email.",
        text: "Verifica tu cuenta de correo electronico para poder acceder a nuestros servicios.",
        html
    };
}
