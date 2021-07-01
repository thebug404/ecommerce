import { Application } from "@feathersjs/express";
import nodemailer from "nodemailer";

export default function (app: Application) {
    return nodemailer.createTransport(app.get("mailer"));
}
