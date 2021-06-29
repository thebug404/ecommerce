import express, { Application } from "@feathersjs/express";
import configuration from "@feathersjs/configuration";
import feathers from "@feathersjs/feathers";
import http, { Server } from "http";
import morgan from "morgan";

import database from "./config/database";

export class EcommerceServer {
    readonly app: Application;
    readonly server: Server;

    constructor() {
        this.app = express(feathers());
        this.server = http.createServer(this.app);

        this.config();
        this.middlewares();
        this.errors();
    }

    private config(): void {
        this.app.configure(configuration());
    }

    private middlewares(): void {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.configure(express.rest());
        this.app.use(morgan("dev"));
    }

    private errors(): void {
        this.app.use(express.notFound());
        this.app.use(express.errorHandler({ html: false }));
    }

    database(): void {
        this.app.configure(database);
    }

    run(): void {
        this.server.listen(3030).on("listening", () => {
            console.log("App execute http://localhost:3030");
        });
    }
}
