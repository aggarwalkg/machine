import express from "express";
import {_login} from "./validate";
import Controller from "./controllers";

const app = express();

app.post("/login", _login,Controller.login);
app.post("/studentList", Controller.studentList);


export default app;
