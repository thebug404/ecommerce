import { User as AuthUser } from "feathers-authentication-management-ts";
import { User } from "../../users/user.controller";

export interface ParamsTemplate {
    user: User | AuthUser;
    url: string;
    host: string;
}
