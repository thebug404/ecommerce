import { ServiceMethods } from "@feathersjs/feathers";
import { User } from "../users/user.controller";

export interface EmailPostman {
    send(): Promise<any>;
}

export class MailerController implements Partial<ServiceMethods<EmailPostman>> {
    async create(data: EmailPostman): Promise<EmailPostman> {
        return await data.send();
    }
}
