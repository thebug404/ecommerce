import { HookContext, Paginated, Service } from "@feathersjs/feathers";
import { Conflict } from "@feathersjs/errors";

import { User } from "../user.controller";

export default async function ({ app, data }: HookContext): Promise<void> {
    const service: Service<User> = app.service("/api/users");
    const result = await service.find({ email: data.email }) as Paginated<User>;

    if (result.data.length) throw new Conflict({
        name: "EmailAlreadyUse",
        message: "El email ya se encuentra en uso."
    });
}
