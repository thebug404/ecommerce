import { HookContext, Paginated, Service } from "@feathersjs/feathers";
import { BadRequest } from "@feathersjs/errors";

import { User } from "../../components/users/user.controller";

export async function isVerified({ app, data }: HookContext) {
    const service: Service<User> = app.service("/api/users");

    const result = await service.find({
        query: { email: data.email }
    }) as Paginated<User>;

    const user: User | undefined = result.data[0];

    if (!user) throw new BadRequest({
        name: "InvalidLogin",
        message: "Las credenciales son incorrectas"
    });

    if (!user.isVerified) throw new BadRequest({
        name: "EmailNotVerified",
        message: "El correo electronico no esta verificado."
    });
}
