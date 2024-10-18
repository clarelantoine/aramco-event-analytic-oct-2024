import { Snackbar } from "@mui/material"
import { forwardRef, useState } from "react"
import { useAuth } from "../hooks/useAuth"
import Footer from "./Footer"
import Header from "./Header"
import MuiAlert from '@mui/material/Alert';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Login() {

    const { onLogin } = useAuth()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [successMsg, setSuccessMsg] = useState(false);
    const [errorMsg, setErrorMsg] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setErrorMsg(false)
        setSuccessMsg(false)
    };

    const handleChange = (event) => {
        if (event.target.name == "username") setUsername(event.target.value)
        if (event.target.name == "password") setPassword(event.target.value);
    }

    const checkLogin = (event) => {
        event.preventDefault()

        if ((username == "admin" || username == "Admin") && password == "123") {
            setSuccessMsg(true)
            onLogin()
        } else {
            setErrorMsg(true)
        }
    }

    return (
        <>
            <div className="dashboard login__page">
                <Header text="Login to dashboard" theme="dark" />

                <p className="login__text">Login using the provided credentials.</p>
                <form onSubmit={checkLogin}>
                    <input type="text" name="username" id="username" placeholder="Username" onChange={handleChange} />
                    <input type="password" name="password" id="password" placeholder="Password" onChange={handleChange} />
                    {/* <button onClick={onLogin}>Login</button> */}
                    <input className="submit__btn" type="submit" value="Submit" />
                </form>



                {/* <Footer text="Aramco" /> */}

            </div>

            <Snackbar open={errorMsg} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ horizontal: "center", vertical: "bottom" }}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    Invalid credentials.
                </Alert>
            </Snackbar>

            <Snackbar open={successMsg} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ horizontal: "center", vertical: "bottom" }}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    You're logged in!
                </Alert>
            </Snackbar>


        </>
    )
}