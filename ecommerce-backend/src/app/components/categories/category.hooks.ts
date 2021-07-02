import { HooksObject } from "@feathersjs/feathers";
import * as auth from "@feathersjs/authentication";

import { Roles } from "../../interfaces/general.interfaces";

import { verifyRoles } from "../../auth/utils/verifyRoles.hook";

const { authenticate } = auth.hooks;

export const categoryHooks: HooksObject = {
    before: {
        all: [authenticate("jwt")],
        create: [verifyRoles([Roles.Admin])],
        update: [verifyRoles([Roles.Admin])],
        patch: [verifyRoles([Roles.Admin])],
        remove: [verifyRoles([Roles.Admin])]
    },
    after: {},
    error: {}
}
