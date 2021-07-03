import { MongooseServiceOptions } from "feathers-mongoose";
import { Application } from "@feathersjs/express";
import { Service } from "@feathersjs/feathers";

import { productHooks } from "./product.hooks";

import { Product, ProductController } from "./product.controller";
import { ProductModel } from "../../models/product.model";

export function productService(app: Application): void {
    const options: Partial<MongooseServiceOptions> = {
        paginate: app.get("paginate"),
        Model: ProductModel
    };

    app.use("/api/products", new ProductController(options, app));

    const service: Service<Product> = app.service("/api/products");

    service.hooks(productHooks);
}
