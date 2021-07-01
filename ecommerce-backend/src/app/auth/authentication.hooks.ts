import { HooksObject } from "@feathersjs/feathers";
import { isVerified } from "./hooks/isVerified.hook";

export const authHooks: HooksObject = {
    before: {
        create: [isVerified]
    },
    after: {},
    error: {}
};
