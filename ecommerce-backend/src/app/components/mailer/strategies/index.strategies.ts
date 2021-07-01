import { Application } from "@feathersjs/express";
import { Types } from "feathers-authentication-management-ts";

import { Mailer, VerificationEmail } from "./VerificationEmail";

export function strategies(app: Application) {
    return {
        "resendVerifySignup": new VerificationEmail(app)
    } as Partial<Record<Types, Partial<Mailer>>>;
}
