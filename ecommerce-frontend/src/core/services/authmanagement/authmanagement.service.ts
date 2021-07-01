import app from "@/core/config/feathers";
import { Service } from "@feathersjs/feathers";

export class AuthManagement {
    private service: Service<any>;

    constructor() {
        this.service = app.service("authManagement");
    }
}
