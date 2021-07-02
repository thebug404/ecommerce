import { HookContext } from "@feathersjs/feathers";
import { User } from "../../components/users/user.controller";

import { NotAuthenticated } from "@feathersjs/errors";

export function verifyRoles(roles: string[]) {
    return async ({ params }: HookContext) => {
        const role: string | undefined = roles.find(role => 
            role === (params.user as User).role
        );
        
        if (!role) throw new NotAuthenticated({
            name: "InsufficientPermissions",
            message: "No tienes los permisos necesarios para realizar esta accion."
        });
    }
}
