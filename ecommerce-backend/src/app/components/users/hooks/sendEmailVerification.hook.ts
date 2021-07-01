import { HookContext } from "@feathersjs/feathers";
import { BadRequest } from "@feathersjs/errors";

import { notifier } from "../../authmanagement/notifier";

export async function sendEmailVerification(context: HookContext) {
    const sender = notifier(context.app as any);
    
    if (typeof sender.notifier !== "function") throw new BadRequest({
        name: "EmailNotSupported",
        message: "El email no fue enviado, carece de soporte."
    });

    sender.notifier("resendVerifySignup", context.result);
}
