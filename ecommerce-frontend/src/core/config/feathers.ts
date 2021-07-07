import feathers from "@feathersjs/feathers";
import auth from "@feathersjs/authentication-client";
import socketio from "@feathersjs/socketio-client";
import io from "socket.io-client";

// add the url of the server.
const socket = io("/");

const app = feathers()
  .configure(socketio(socket))
  .configure(
    auth({
      storage: window.localStorage,
      path: "/api/auth",
    })
  );

export default app;
