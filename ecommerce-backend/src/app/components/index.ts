import { Application } from "@feathersjs/express";

import { userService } from "./users/user.service";
// import { mailerService } from "./mailer/mailer.service";
import { authManagementService } from "./authmanagement/authmanagement.service";

export default function (app: Application): void {
    app.configure(userService);
    // app.configure(mailerService);
    app.configure(authManagementService);
}
