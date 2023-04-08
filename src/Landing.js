//write a landing page
//navbar with login on right side and "news-app" text on left side
import React from 'react';
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box, IconButton } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { Refresh } from '@mui/icons-material';
import News from './news.js';

function Landing() {
    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/login`;
        navigate(path);
        console.log("hello")
    }
    const handleRefresh = () => {
        window.location.reload();
    };

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
                <Toolbar >
                    <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
                        News-App
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <IconButton color="inherit" onClick={handleRefresh}>
                        <Refresh />
                    </IconButton>
                    <Button sx={{ flexGrow: 0 }} color="inherit" onClick={routeChange} >login</Button>
                </Toolbar>
            </AppBar>
            <Box sx={{ paddingTop: "1px" }}>
                <News categories={["general"]} />
            </Box>
        </div>


    );
}
export default Landing;
