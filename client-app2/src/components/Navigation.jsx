import { AppBar, Button, CssBaseline, GlobalStyles, Toolbar, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Navigation() {
    const { onLogout, token } = useAuth()

    return (
        <>
            <nav>
                <ul>
                    <li><NavLink to="/">Collection</NavLink></li>
                    <li><NavLink to="/survey">Survey</NavLink></li>
                    {token &&
                        <li><NavLink to="/dashboard">Dashboard</NavLink></li>}
                    {token &&
                        <li><NavLink to="/surveydata">Survey Data</NavLink></li>}
                    {token &&
                        <li><NavLink onClick={onLogout}>Logout</NavLink></li>}

                </ul>
            </nav>
        </>
    )
}