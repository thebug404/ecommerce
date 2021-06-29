import { Application } from "@feathersjs/express";
import mongoose, { Mongoose } from "mongoose";

export default async function (app: Application): Promise<(Mongoose | Error | null)[]> {
    try {
        const connection = await mongoose.connect(app.get("mongodb"), {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });
        console.log("Connect database is successfully");
        return [connection, null];
    } catch (error) {
        return [null, error];
    }
}
