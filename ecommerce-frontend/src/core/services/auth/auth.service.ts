import app from "@/core/config/feathers";

export class AuthService {
    async login(email: string, password: string) {
        return await app.authenticate({ strategy: "local", email, password });
    }
}
