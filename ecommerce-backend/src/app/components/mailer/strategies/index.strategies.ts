import { Application } from "@feathersjs/express";
import { Types } from "feathers-authentication-management-ts";

import { Mailer, VerificationEmail } from "./VerificationEmail";
import { ConfirmationEmail } from "./ConfirmationEmail";

export function strategies(app: Application) {
    return {
        "resendVerifySignup": new VerificationEmail(app),
        "verifySignup": new ConfirmationEmail(app),
        "verifySignupLong": new ConfirmationEmail(app)
    } as Partial<Record<Types, Partial<Mailer>>>;
}
