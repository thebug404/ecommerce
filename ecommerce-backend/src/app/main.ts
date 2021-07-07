import configuration from "@feathersjs/configuration";
import history from "connect-history-api-fallback";
import feathers from "@feathersjs/feathers";
import socketio from "@feathersjs/socketio";
import express from "@feathersjs/express";
import morgan from "morgan";
import path from "path";

import authentication from "./auth/authentication";
import services from "./components/index";
import database from "./config/database";
import { channels } from "./channels/channels";

const app = express(feathers());

app.configure(configuration());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(history());
app.use(morgan("dev"));
app.configure(express.rest());
app.configure(socketio());

app.configure(authentication);

app.configure(services);

app.configure(channels);

app.use(express.static(path.resolve("public")));

app.use(express.notFound());
app.use(express.errorHandler({ html: false }));

app.configure(database);

export default app;
