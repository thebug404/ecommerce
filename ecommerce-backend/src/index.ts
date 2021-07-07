import app from "./app/main";

const port: string | undefined = app.get("port");

app.listen(port).on("listening", () => {
    console.log(`App execute in port:${ port }`);
});
