import { Application } from "@feathersjs/express";
import { AuthenticationService, JWTStrategy } from "@feathersjs/authentication";
import { LocalStrategy } from "@feathersjs/authentication-local";
import { expressOauth } from "@feathersjs/authentication-oauth";

export default function (app: Application): void {
    const auth: AuthenticationService = new AuthenticationService(app);

    auth.register("jwt", new JWTStrategy);
    auth.register("local", new LocalStrategy);

    app.use("/api/auth", auth);

    app.configure(expressOauth());
}
