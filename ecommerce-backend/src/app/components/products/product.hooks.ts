import { HooksObject } from "@feathersjs/feathers";
import * as auth from "@feathersjs/authentication";

import { Roles } from "../../interfaces/general.interfaces";
import { rules } from "../../config/rules";

import { verifyRoles } from "../../auth/utils/verifyRoles.hook";
import { populateCategories } from "./hooks/populate-categories.hook";
import { validateData } from "../../hooks/validateData.hook";

const { authenticate } = auth.hooks;

export const productHooks: HooksObject = {
    before: {
        all: [authenticate("jwt")],
        create: [
            verifyRoles([Roles.Admin, Roles.Writer]),
            validateData([
                { field: "title", rules: [rules.required] },
                { field: "image", rules: [rules.required] },
                { field: "description", rules: [rules.required, rules.maxLength(120)] },
                { field: "price", rules: [rules.required] }
            ])
        ],
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
