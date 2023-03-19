//write a landing page
//navbar with login on right side and "news-app" text on left side
import React from 'react';
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate } from "react-router-dom";
import News from './news.js';
function Landing() {
    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/login`;
        navigate(path);
        console.log("hello")
    }

    return (
        <div className="Landing">
            {/* <nav>
                <ul>
                    <li>
                        <Link to="/">News-App</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav> */}
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
                        News-App
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Button sx={{ flexGrow: 0 }} color="inherit" onClick={routeChange} >login</Button>
                </Toolbar>
            </AppBar>
            <News />
        </div>


    );
}
export default Landing;
