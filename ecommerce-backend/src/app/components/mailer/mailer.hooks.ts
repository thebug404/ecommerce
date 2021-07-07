import { HooksObject } from "@feathersjs/feathers";
import { disallow } from "feathers-hooks-common";

export const hooks: HooksObject = {
    before: {
        all: [disallow("external")]
    },
    after: {},
    error: {}
};
