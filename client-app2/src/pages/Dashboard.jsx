import { useState } from "react";
import SurveyList from "../components/SurveyList";
import QRCounter from "../components/QRCounter";
import { useAuth } from "../hooks/useAuth";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Header from "../components/Header";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pt: 3 }}>
          <Typography component={"div"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Dashboard() {
  const { token, onLogout } = useAuth();

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="dashboard">
      <Header text="Dashboard" theme="dark" />
      <Box sx={{ width: "100%", position: "relative" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange}>
            {/* <Tab
              sx={{
                fontFamily: "manifa-semi-bold",
                textTransform: "uppercase",
                fontSize: "17px",
              }}
              label="QR Analytics"
              {...a11yProps(0)}
            /> */}
            <Tab
              sx={{
                fontFamily: "manifa-semi-bold",
                textTransform: "uppercase",
                fontSize: "17px",
              }}
              label="Survey Details"
              {...a11yProps(1)}
            />
          </Tabs>
          <div className="logout__dashboard">
            <p>Logout</p>
            <p>
              <NavLink onClick={onLogout}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-box-arrow-right"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path
                    fillRule="evenodd"
                    d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                  />{" "}
                  <path
                    fillRule="evenodd"
                    d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                  />{" "}
                </svg>
              </NavLink>
            </p>
          </div>
        </Box>
        {/* <TabPanel value={value} index={0} component={'div'}>
                    <QRCounter />
                </TabPanel> */}
        <TabPanel value={value} index={0} component={"div"}>
          <SurveyList />
        </TabPanel>
      </Box>
      <Footer text="Aramco" />
    </div>
  );
}
