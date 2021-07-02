import { Service, ServiceMethods } from "@feathersjs/feathers";
import app from "../config/feathers";

export interface Product {
  _id: string;
  title: string;
  image: string;
  description: string;
  categoriesIds: string[];
  categories: string[];
  price: number;
  rating: number;
  createdAt: Date;
  updateAt: Date;
}

export class ProductService implements Partial<ServiceMethods<Product>> {
  readonly service: Service<Product>;

  constructor() {
    this.service = app.service("/api/products");
  }
}
