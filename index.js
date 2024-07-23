import express from "express"
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

let bowl = ["Apple", "Orange", "Pears"];

app.get("/", (req, res) => {
  res.render("index.ejs", { fruits: bowl })
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});