import { Application } from "@feathersjs/express";

import { userService } from "./users/user.service";
import { authManagementService } from "./authmanagement/authmanagement.service";
import { categoryService } from "./categories/category.service";
import { productService } from "./products/product.service";
import { service as MailerService } from "./mailer/mailer.service";

export default function (app: Application): void {
    app.configure(userService);
    app.configure(MailerService);
    app.configure(authManagementService);
    app.configure(categoryService);
    app.configure(productService);
}
