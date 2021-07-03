import { HookContext, Paginated } from "@feathersjs/feathers";
import { User } from "feathers-authentication-management-ts";

import { Roles } from "../../../interfaces/general.interfaces";

export async function setRoleToUser(context: HookContext) {
    const res = await context.service.find() as Paginated<User>;

    if (!res.data.length) {
        context.data.role = Roles.Admin;
        return context;
    }

    context.data.role = Roles.Reader;
}
