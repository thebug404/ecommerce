import { MongooseServiceOptions, Service } from "feathers-mongoose";
import { Application } from "@feathersjs/express";

export interface User {
    _id: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    isVerified: boolean;
    createdAt: Date;
    updateAt: Date;
}

export class UserController extends Service<User> {
    constructor(options: Partial<MongooseServiceOptions>, app: Application) {
        super(options);
    }
}
