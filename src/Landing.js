//write a landing page
//navbar with login on right side and "news-app" text on left side
import React from 'react';
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Container, Button, Box, IconButton } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { Refresh } from '@mui/icons-material';
import News from './news.js';
import Navbar2 from './Navbar2.js';
function Landing(props) {
    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/Dashboard`;
        navigate(path);
        console.log("hello")
    }
    const handleRefresh = () => {
        window.location.reload();
    };

    return (
        <div className="Landing" style={{ background: '#F5F5F7', boxShadow: 'none' }}>
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
            <AppBar position="static" style={{ background: '#F5F5F7', boxShadow: 'none' }}>
                <Toolbar >
                    <Typography variant="h6" component="div" sx={{ flexGrow: 0 }} sx={{ color: "Black" }}>
                        News-App
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <IconButton color="inherit" onClick={handleRefresh}>
                        <Refresh sx={{color:"black"}}/>
                    </IconButton>
                    <Button sx={{ flexGrow: 0 }} sx={{ color: "Black" }} color="inherit" onClick={routeChange} >login</Button>
                </Toolbar>
            </AppBar>
            <Navbar2 />
           
        </div>


    );
}
export default Landing;
