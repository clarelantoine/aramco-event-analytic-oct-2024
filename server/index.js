import express from "express";
import fetch from "node-fetch";
import { dbConnect } from "./config/dbConnect.js";

import {
  router1 as surveyRouter,
  router2 as surveyRouter2,
} from "./services/survey/surveys.routes.js"; // Create an instance of model SurveyModel

dbConnect();

const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/survey1", surveyRouter);
app.use("/api/survey2", surveyRouter2);

app.get("/api/v1", async (req, res) => {
  const url =
    "https://hovercode.com/api/v1/hovercode/dcf62ac0-ab0a-4665-b280-6f309f236fd3/";
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: "Token 65ec2fc5a4270eb990ae9e71352a93eafe0bed0b",
    },
  };

  try {
    const response = await fetch(url, requestOptions);
    const result = await response.json();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
