import { MongooseServiceOptions } from "feathers-mongoose";
import { Application } from "@feathersjs/express";
import { Service } from "@feathersjs/feathers";

import { User as UserModel } from "../../models/user.model";

import { userHooks } from "./user.hooks";

import { User, UserController } from "./user.controller";

export function userService(app: Application): void {
    const options: Partial<MongooseServiceOptions> = {
        paginate: app.get("paginate"),
        Model: UserModel
    }

    app.use("/api/users", new UserController(options, app));

    const service: Service<User> = app.service("/api/users");

    service.hooks(userHooks);
}
