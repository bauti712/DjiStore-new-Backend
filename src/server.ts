import router from "./router/routes";
import express from "express";
const port = 8080
const app = express();
app.use (express.json());
app.use("/", router)

app.listen(port,() => {
    console.log (`server is running at http://localhost:${port}`)
});


