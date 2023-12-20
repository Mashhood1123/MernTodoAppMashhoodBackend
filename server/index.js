import express from "express";
import db from "./db/index.js";
import cors from "cors";
import routes from "./routes/index.js";


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
 
const PORT = 4000;

app.use(cors());
// TODO: Mama ay sikhna ee

app.use("/todo", routes);

app.listen(PORT, () => {
  console.log("Tu mera putr chuti kr");
});
