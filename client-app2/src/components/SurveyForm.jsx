import { forwardRef, useEffect, useState } from "react";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SurveyQuestion from "./SurveyQuestion";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

// default form fields
const defaultFormFiedls = {
  questionOne: "",
  questionTwo: "",
  questionThree: "",
  feedback: "",
};

export default function SurveyForm() {
  // create form fields state based on the the default value
  const [formFields, setFormFields] = useState(defaultFormFiedls);

  // deconstruct formFields state object
  const { questionOne, questionTwo, questionThree, feedback } = formFields;

  // create state for the snackbar popup with the default value
  const [successMsg, setSuccessMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  // reset form fields and states
  const handleResetFormFields = () => {
    [...document.querySelectorAll("input[type=radio]:checked")].forEach(
      (input) => (input.checked = false)
    );
    document.getElementsByName("feedback")[0].value = "";
    setFormFields(defaultFormFiedls);
  };

  // handle closing of snackbar popup
  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setErrorMsg(false);
    setSuccessMsg(false);
  };

  // for debuging purposes
  // useEffect(() => {
  //     console.log(formFields);
  // }, [formFields])

  // handle fields onChange event
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  // handle form onSubmit event
  const handleSubmit = async (event) => {
    // prevent onSubmit default event behaviour
    event.preventDefault();

    // create api endpoint
    const urlWithProxy = "/api/survey2/create";

    // fetch data from api
    const response = await fetch(urlWithProxy, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question_1: questionOne,
        question_2: questionTwo,
        question_3: questionThree,
        feedback: feedback,
      }),
    });

    // get response data from api
    const result = await response.json();

    // handle error message
    if (result.err) {
      setErrorMsg(true);
      console.log(result.err);
    } else {
      setSuccessMsg(true);
      handleResetFormFields();
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} id="surveyForm">
        <div className="questions__wrapper">
          <SurveyQuestion
            name="questionOne"
            handleChange={handleChange}
            question="Content and Presentations presented at Aramco Exhibit *"
          />
          <SurveyQuestion
            name="questionTwo"
            handleChange={handleChange}
            question="Representatives’ Hospitality and Interaction *"
          />
          <SurveyQuestion
            name="questionThree"
            handleChange={handleChange}
            question="Overall Aramco Exhibit Impressions *"
          />
        </div>

        <h2 className="card__header">
          Thank you for your time. Any additional feedback would be appreciated.
        </h2>

        <textarea
          rows="20"
          name="feedback"
          cols="40"
          aria-haspopup="true"
          onChange={handleChange}
          placeholder="Leave your feedback here..."
        ></textarea>

        <input className="submit__btn" type="submit" value="Submit" />
      </form>

      <Snackbar // error snackbar
        open={errorMsg}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Please answer all questions.
        </Alert>
      </Snackbar>

      <Snackbar // success snackbar
        open={successMsg}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Submitted successfully. Thank you!
        </Alert>
      </Snackbar>
    </>
  );
}
