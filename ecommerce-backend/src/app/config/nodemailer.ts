import { Application } from "@feathersjs/feathers";
import nodemailer from "nodemailer";

export default function (app: Application) {
    return nodemailer.createTransport(app.get("mailer"));
}
