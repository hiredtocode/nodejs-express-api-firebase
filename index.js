"use strict";
import express, { json } from "express";
import cors from "cors";
import { json as _json } from "body-parser";
import { port } from "./config.js";
import { routes } from "./routes/student-routes.js";

const app = express();

app.use(json());
app.use(cors());
app.use(_json());

app.use("/api", routes);

app.listen(port, () =>
	console.log(
		"App is listening on url http://localhost:",
		port
	)
);
