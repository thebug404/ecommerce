import app from "@/core/config/feathers";
import { Id, Paginated, Service } from "@feathersjs/feathers";

export interface Category {
    _id: string;
    name: string;
    color: string;
}

export class CategoryService {
    private service: Service<Category>;

    constructor() {
        this.service = app.service("/api/categories");
    }

    async create(data: Omit<Category, "_id">): Promise<Category> {
        return await this.service.create(data);
    }

    async list(): Promise<Paginated<Category>> {
        return await this.service.find() as Paginated<Category>;
    }

    async remove(categoryId: Id): Promise<Category> {
        return await this.service.remove(categoryId)
    }

    async update(categoryId: Id, data: Category): Promise<Category> {
        return await this.service.update(categoryId, data);
    }
}
