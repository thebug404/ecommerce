import { Application } from "@feathersjs/express";

// Initializes the `authmanagement` service on path `/authmanagement`
import authManagement from "feathers-authentication-management-ts";
import { notifier } from "./notifier";

export function authManagementService(app: Application) {

  app.configure(authManagement(notifier(app)));

  app.service('authmanagement');
};
