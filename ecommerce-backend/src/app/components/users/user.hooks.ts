import { HooksObject } from "@feathersjs/feathers";
import * as authLocal from "@feathersjs/authentication-local";

const { protect, hashPassword } = authLocal.hooks;

export const userHooks: HooksObject = {
    before: {
        create: [ hashPassword("password") ]
    },
    after: {
        all: [ protect("password") ]
    },
    error: {}
}
