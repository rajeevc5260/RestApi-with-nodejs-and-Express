import express from "express";
import routes from "./src/routes/crmRoutes";
import mongoose from "mongoose";
import bodyParser, { urlencoded } from "body-parser";

const app = express();
const PORT = 3000;

//mogoose connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/cmrdb", { useNewUrlParser: true });

// Body-parser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// to serve static files(images, videos, pdf etc)
app.use(express.static("public"));

routes(app);

app.get("/", (req, res) => {
  res.send(`Node & express server is running in port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT}`);
});
