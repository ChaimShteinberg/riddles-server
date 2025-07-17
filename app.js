import express from "express";
import riddlesRouter from "./routers/riddles.router.js";
import playersRouter from "./routers/players.router.js";
import { connecToMongo } from "./DB/riddlesDB.js";

await connecToMongo()

const PORT = process.env.PORT;

const app = express();

app.use(express.json())

app.use((req, res, next) => {
    console.log(`method: ${req.method}, url: ${req.url}`);
    next();
})

app.use('/riddles', riddlesRouter)
app.use('/players', playersRouter)

app.listen(PORT, () => {
    console.log(`port: ${PORT}`)
})
