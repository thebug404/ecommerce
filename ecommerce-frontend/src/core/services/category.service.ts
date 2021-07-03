import { Service } from "@feathersjs/feathers";
import app from "@/core/config/feathers";

export interface Category {
  _id: string;
  name: string;
  color: string;
}

export class CategoryService {
  readonly service: Service<Category>;

  constructor() {
    this.service = app.service("/api/categories");
  }
}
