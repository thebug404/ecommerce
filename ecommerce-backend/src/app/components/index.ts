import { Application } from "@feathersjs/express";

import { userService } from "./users/user.service";

export default function (app: Application): void {
    app.configure(userService);
}
