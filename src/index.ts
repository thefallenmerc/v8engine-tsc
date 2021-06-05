import express, { Application, Request, Response, NextFunction } from "express";

const app: Application = express();

const port = 5000;

app.use("/", (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).send({ data: "Hello" });
});

app.listen(port, () => {
    console.log("Server running at " + port);
});
