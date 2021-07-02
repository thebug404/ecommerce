import { Service } from "feathers-mongoose/types";

export interface Product {
    _id: string;
}

export class ProductController extends Service {}
