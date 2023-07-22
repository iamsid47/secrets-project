import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";
const __dirname = dirname(fileURLToPath(import.meta.url));

const port = 3000;
const app = express();

app.use(morgan("combined"), bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  var pass = "ILoveProgramming";
  if (req.body.password === pass) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.redirect("/");
  }
});

app.listen(port, (req, res) => {
  console.log(`Listening to port:${port}`);
});
