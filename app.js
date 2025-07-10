import express from "express";
import router from "./routers/riddles.router.js";

const PORT = 1456;

const app = express();

app.use('/riddles', )

app.listen(PORT, () => {
    console.log(`port: ${PORT}`)
})
