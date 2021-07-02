import { Application } from "@feathersjs/express";
import { MongooseServiceOptions, Service } from "feathers-mongoose";

export interface Category {
    _id: string;
    name: string;
    color: string;
}

export class CategoryController extends Service<Category> {
    constructor(options: Partial<MongooseServiceOptions>, app: Application) {
        super(options);
    }
}
