import feathers from '@feathersjs/feathers';
import auth from '@feathersjs/authentication-client';
import io from "socket.io-client";
import socketio from "@feathersjs/socketio-client";

const socket = io("http://localhost:3030");

const app = feathers()
.configure(socketio(socket))
.configure(auth({
  storage: window.localStorage,
  path: "/api/auth"
}));

export default app;
