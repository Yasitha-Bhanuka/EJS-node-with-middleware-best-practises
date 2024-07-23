import express from "express"
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

function checkDate(req, res, next) {
  const now = new Date();
  var dateType;
  var quote;
  const day = now.getDay();
  if (day == 0 || day == 6) {
    dateType = "Weekend";
    quote = "have fun!";
  } else {
    dateType = "Weekday";
    quote = "work hard!";
  }
  req.body = { dateType: dateType, quote: quote }
  next()
}

app.use(checkDate);

app.get("/", (req, res) => {
  res.render("index.ejs", { dateType: req.body.dateType, quote: req.body.quote });
});

app.listen(port, () => {
  console.log(`server running on ${port}`);
});