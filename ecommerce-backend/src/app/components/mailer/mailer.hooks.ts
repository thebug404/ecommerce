import { HooksObject } from "@feathersjs/feathers";
import { disallow } from "feathers-hooks-common";

export const mailerHooks: HooksObject = {
    before: {
        all: [disallow("external")]
    },
    after: {},
    error: {}
}
