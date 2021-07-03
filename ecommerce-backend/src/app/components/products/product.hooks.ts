import { HooksObject } from "@feathersjs/feathers";
import * as auth from "@feathersjs/authentication";

import { Roles } from "../../interfaces/general.interfaces";

import { verifyRoles } from "../../auth/utils/verifyRoles.hook";
import { populateCategories } from "./hooks/populate-categories.hook";

const { authenticate } = auth.hooks;

export const productHooks: HooksObject = {
    before: {
        all: [authenticate("jwt")],
        create: [verifyRoles([Roles.Admin, Roles.Writer])],
        remove: [verifyRoles([Roles.Admin, Roles.Writer])],
        update: [verifyRoles([Roles.Admin, Roles.Writer])],
        patch: [verifyRoles([Roles.Admin, Roles.Writer])]
    },
    after: {
        create: [populateCategories],
        find: [populateCategories],
        get: [populateCategories],
        update: [populateCategories]
    },
    error: {}
}
