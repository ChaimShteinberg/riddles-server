import express from "express";
import riddlesRouter from "./routers/riddles.router.js";

const PORT = 1456;

const app = express();

app.use(express.json())

app.use((req, res, next) => {
    console.log(`method: ${req.method}, url: ${req.url}`);
    next();
})

app.use('/riddles', riddlesRouter)

app.listen(PORT, () => {
    console.log(`port: ${PORT}`)
})
