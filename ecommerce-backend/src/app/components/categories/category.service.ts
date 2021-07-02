import { MongooseServiceOptions } from "feathers-mongoose";
import { Application } from "@feathersjs/express";
import { Service } from "@feathersjs/feathers";

import { categoryHooks } from "./category.hooks";

import { CategoryModel } from "../../models/category.model";

import { Category, CategoryController } from "./category.controller";

export function categoryService(app: Application): void {
    const options: Partial<MongooseServiceOptions> = {
        paginate: app.get("paginate"),
        Model: CategoryModel
    }

    app.use("/api/categories", new CategoryController(options, app));

    const service: Service<Category> = app.service("/api/categories");

    service.hooks(categoryHooks);
}
