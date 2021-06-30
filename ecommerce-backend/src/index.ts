import app from "./app/main";

app.listen(3030).on("listening", () => {
    console.log("App execute in http://localhost:3030");
});
