import express from "express";
import { RequestLogger } from "./services";

const app = express();
const port = process.env.PORT || 5000;
const requestLogger = new RequestLogger();

app.use(requestLogger.log);

app.get('/health-check', (req, res) => {
    res.send(`Health OK`);
});


app.listen(port, () => {
    console.log(`Starting server at port ${port}`);
});


