import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import UserAuthRoutes from "./AuthModule/routes";
const app = express();
app.use(bodyParser.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));
app.use(cors());
app.use("/", UserAuthRoutes);
app.listen(5000, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:5000`);
});
