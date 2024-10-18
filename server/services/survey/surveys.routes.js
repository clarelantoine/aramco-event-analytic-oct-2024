import express from "express";
const router1 = express.Router();
const router2 = express.Router();

import * as survey_controller from "./survey.controller.js";

router1.get("/", survey_controller.survey_list1);
router1.post("/create", survey_controller.survey_create_post1);

router2.get("/", survey_controller.survey_list2);
router2.post("/create", survey_controller.survey_create_post2);

export { router1, router2 };
