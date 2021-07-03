import { MongooseServiceOptions, Service } from "feathers-mongoose";
import { Application } from "@feathersjs/express";

export interface Product {
    _id: string;
    title: string;
    image: string;
    description: string;
    categoriesIds: string[];
    price: number;
    rating: number;
    createdAt: Date;
    updateAt: Date;
}

export class ProductController extends Service<Product> {
    constructor(options: Partial<MongooseServiceOptions>, app: Application) {
        super(options);
    }
}
