import { HooksObject } from "@feathersjs/feathers";
import * as auth from "@feathersjs/authentication";

import { Roles } from "../../interfaces/general.interfaces";

import { verifyRoles } from "../../auth/utils/verifyRoles.hook";
import { validateData } from "../../hooks/validateData.hook";

const { authenticate } = auth.hooks;

export const categoryHooks: HooksObject = {
    before: {
        all: [authenticate("jwt")],
        create: [
            verifyRoles([Roles.Admin, Roles.Writer]),
            validateData([{ field: "name", rules: [] }])
        ],
        update: [verifyRoles([Roles.Admin, Roles.Writer])],
        patch: [verifyRoles([Roles.Admin, Roles.Writer])],
        remove: [verifyRoles([Roles.Admin, Roles.Writer])]
    },
    after: {},
    error: {}
}
