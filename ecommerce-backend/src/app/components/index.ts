import { Application } from "@feathersjs/express";

import { userService } from "./users/user.service";
import { authManagementService } from "./authmanagement/authmanagement.service";
import { categoryService } from "./categories/category.service";

export default function (app: Application): void {
    app.configure(userService);
    app.configure(authManagementService);
    app.configure(categoryService);
}
