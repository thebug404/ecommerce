import { MongooseServiceOptions, Service } from "feathers-mongoose";
import { Application } from "@feathersjs/express";
import { User as AuthUser } from "feathers-authentication-management-ts";

export interface User extends AuthUser {
    _id: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    role: string;
    createdAt: Date;
    updateAt: Date;
}

export class UserController extends Service<User> {
    constructor(options: Partial<MongooseServiceOptions>, app: Application) {
        super(options);
    }
}
