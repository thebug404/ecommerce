import { Types, User as UserAuth } from "feathers-authentication-management-ts";
import { SendMailOptions } from "nodemailer";

import { User } from "../../users/user.controller";

import { confirmationEmail } from "./confirmationEmail";
import { verificationEmail } from "./verificationEmail";

export interface EmailEntity {
    user: UserAuth | User;
    senderEmail: string;
    host: string;
}

export const strategies: Partial<
    Record<Types, (payload: EmailEntity) => Partial<SendMailOptions>>
> = {
    resendVerifySignup: verificationEmail,
    verifySignup: confirmationEmail
}
