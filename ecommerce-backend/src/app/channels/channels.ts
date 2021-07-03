import { Application } from "@feathersjs/express";
import { Service } from "@feathersjs/feathers";

import { Category } from "../components/categories/category.controller";
import { Product } from "../components/products/product.controller";
import { User } from "../components/users/user.controller";
import { Roles } from "../interfaces/general.interfaces";

export function channels(app: Application): void {
    if (typeof app.channel !== "function") return;

    // Create channels.
    const adminChannel = app.channel("admins");
    const writerChannel = app.channel("writers");
    const authenticatedChannel = app.channel("authenticated");

    app.on("login", (authResult: any, { connection }: any) => {
        if (connection) {
            // Get autenticated user.
            const user = connection.user as User;
            
            // Join only administrators to the channel.
            if (user.role === Roles.Admin) adminChannel.join(connection);

            // Join only writers to the channel.
            if (user.role === Roles.Writer) writerChannel.join(connection);
            
            // Join the channel only authenticated users.
            authenticatedChannel.join(connection);
        }
    });

    // Publish events.
    const userService: Service<User> = app.service("/api/users");
    userService.publish(() => adminChannel);

    const categoryService: Service<Category> = app.service("/api/categories");
    categoryService.publish(() => [adminChannel, writerChannel]);

    const productsService: Service<Product> = app.service("/api/products");
    productsService.publish(() => authenticatedChannel);
}
