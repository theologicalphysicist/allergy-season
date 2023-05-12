import express, { Express, Request, Response } from "express";

//_ MIDDLEWARE
import bodyParser from "body-parser";
import cors from "cors";

const app: Express = express();

app.use(bodyParser.json());
app.use(cors());

app.post("/files", (req: Request, res: Response) => {
    console.log(req.query);
    console.log(req.params);
    console.log(req.body);
    res.send({result: "FILES RECEIVED"});
});


app.listen(3000, () => {
    console.log("⚡️[server] App listening on port 3000")
});