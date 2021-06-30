import feathers from "@feathersjs/feathers";
import auth from "@feathersjs/authentication-client";
import socketio from "@feathersjs/socketio-client";
import io from "socket.io-client";

const socket = io("http://localhost:3030");

const app = feathers()
  .configure(socketio(socket))
  .configure(
    auth({
      storage: window.localStorage,
      path: "/api/auth",
    })
  );

export default app;
