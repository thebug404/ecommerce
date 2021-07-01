import { Application } from "@feathersjs/express";
import { User, Options } from "feathers-authentication-management-ts";

export function notifier(app: Application): Partial<Options> {
    return {
        service: "/api/users",
        notifier: function(type: string, user: User) {
            switch (type) {
                case "verifySignup":
                    console.log(type, user);
                break;
            
                default: break;
            }
        }
    };
}
