import { Survey1, Survey2 } from "./survey.model.js";

// Display list of all survey
export const survey_list1 = async (req, res) => {
  try {
    const data = await Survey1.find({});
    if (!data) throw new Error("no document found");
    res.status(200).send(data);
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
  }
};

export const survey_create_post1 = async (req, res) => {
  try {
    const survey = new Survey1(req.body);
    const result = await survey.save();
    res.status(200).json({ msg: result });
  } catch (error) {
    res.status(500).json({ err: error });
  }
};

export const survey_list2 = async (req, res) => {
  try {
    const data = await Survey2.find({});
    if (!data) throw new Error("no document found");
    res.status(200).send(data);
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
  }
};

export const survey_create_post2 = async (req, res) => {
  try {
    const survey = new Survey2(req.body);
    const result = await survey.save();
    res.status(200).json({ msg: result });
  } catch (error) {
    res.status(500).json({ err: error });
  }
};
