import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Collapse, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontFamily: "manifa-semi-bold",
    textTransform: "uppercase",
    fontSize: "15px",
  },
  [`&.${tableCellClasses.body}`]: {
    // fontSize: 14,
    fontFamily: "manifa-regular",
    textTransform: "sentencecase",
    fontSize: "16px",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function SurveyList() {
  const [surveyList, setSurveyList] = useState([]);

  const [open, setOpen] = useState(false);

  const getSurveyList = async () => {
    const urlWithProxy = "/api/survey2";

    const response = await fetch(urlWithProxy);
    const result = await response.json();
    console.log(result);
    setSurveyList(result);
  };

  useEffect(() => {
    getSurveyList();
  }, []);

  const sum = (value, num) => {
    return surveyList
      .filter((i) => i[value] == num)
      .reduce((accumulator, object) => accumulator + 1, 0);
  };

  const rows = [
    createData(
      "Content and Presentations presented at Aramco Exhibit *",
      sum("question_1", 1),
      sum("question_1", 2),
      sum("question_1", 3),
      sum("question_1", 4),
      sum("question_1", 5)
    ),
    createData(
      "Representatives’ Hospitality and Interaction *",
      sum("question_2", 1),
      sum("question_2", 2),
      sum("question_2", 3),
      sum("question_2", 4),
      sum("question_2", 5)
    ),
    createData(
      "Overall Aramco Exhibit Impressions *",
      sum("question_3", 1),
      sum("question_3", 2),
      sum("question_3", 3),
      sum("question_3", 4),
      sum("question_3", 5)
    ),
    createData(
      "Total",
      sum("question_1", 1) + sum("question_2", 1) + sum("question_3", 1),
      sum("question_1", 2) + sum("question_2", 2) + sum("question_3", 2),
      sum("question_1", 3) + sum("question_2", 3) + sum("question_3", 3),
      sum("question_1", 4) + sum("question_2", 4) + sum("question_3", 4),
      sum("question_1", 5) + sum("question_2", 5) + sum("question_3", 5)
    ),
  ];

  function createData(
    name,
    question_1,
    question_2,
    question_3,
    question_4,
    question_5
  ) {
    return { name, question_1, question_2, question_3, question_4, question_5 };
  }

  return (
    <>
      <button className="dashboard__btn" onClick={getSurveyList}>
        <svg
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          id="IconChangeColor"
          height="200"
          width="200"
        >
          <path
            fill="currentColor"
            d="M289.088 296.704h92.992a32 32 0 0 1 0 64H232.96a32 32 0 0 1-32-32V179.712a32 32 0 0 1 64 0v50.56a384 384 0 0 1 643.84 282.88 384 384 0 0 1-383.936 384 384 384 0 0 1-384-384h64a320 320 0 1 0 640 0 320 320 0 0 0-555.712-216.448z"
            id="mainIconPathAttribute"
          ></path>
        </svg>
        <span>Refresh</span>
      </button>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead
            sx={{
              "& tr": {
                // color: "rgba(96, 96, 96)",
                background: "#3a8e41",
              },
            }}
          >
            <TableRow>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell>Survey</StyledTableCell>
              <StyledTableCell align="center">Question 1</StyledTableCell>
              <StyledTableCell align="center">Question 2</StyledTableCell>
              <StyledTableCell align="center">Question 3</StyledTableCell>
              <StyledTableCell align="center">Date</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {surveyList.map((survey, index) => (
              <>
                <StyledTableRow
                  key={index}
                  sx={{ "& > *": { borderBottom: "unset" } }}
                >
                  <StyledTableCell>
                    <IconButton
                      aria-label="expand row"
                      size="small"
                      onClick={() => setOpen(!open)}
                    >
                      {open ? (
                        <KeyboardArrowUpIcon />
                      ) : (
                        <KeyboardArrowDownIcon />
                      )}
                    </IconButton>
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {`Visitor ${index + 1}`}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {survey.question_1}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {survey.question_2}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {survey.question_3}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {new Date(survey.date).toLocaleString()}
                  </StyledTableCell>
                </StyledTableRow>

                <StyledTableRow>
                  <StyledTableCell
                    colSpan={6}
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                  >
                    <Collapse in={open} timeout="auto" unmountOnExit>
                      <Box sx={{ margin: 1 }}>
                        {/* <Typography variant="h6" gutterBottom component="div">
                                                    feedack
                                                </Typography> */}
                        <p>
                          <b>Feedback: </b> {survey.feedback}
                        </p>
                      </Box>
                    </Collapse>
                  </StyledTableCell>
                </StyledTableRow>
              </>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <br />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead
            sx={{
              "& tr": {
                // color: "rgba(96, 96, 96)",
                background: "#3f70cd",
              },
            }}
          >
            <TableRow>
              <StyledTableCell>
                Kindly rate the following on a scale of 1-5, with 1 being very
                unsatisfied, 3 being neutral, and 5 being very satisfied. Thank
                you.
              </StyledTableCell>
              <StyledTableCell align="center">Rating 1</StyledTableCell>
              <StyledTableCell align="center">Rating 2</StyledTableCell>
              <StyledTableCell align="center">Rating 3</StyledTableCell>
              <StyledTableCell align="center">Rating 4</StyledTableCell>
              <StyledTableCell align="center">Rating 5</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.question_1}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.question_2}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.question_3}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.question_4}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.question_5}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
