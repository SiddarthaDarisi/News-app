import React, { useState, useEffect } from 'react';
import { Auth, Hub } from "aws-amplify"
import { Navigate } from 'react-router';

import { Link } from "react-router-dom";
import { Authenticator } from '@aws-amplify/ui-react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function Dashboard() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        async function userDetails() {
            try {
                const user = await Auth.currentAuthenticatedUser();
                setUser(user);
            } catch (err) {
                console.log("user not found")
            }
        }
        userDetails();
    }, []);
    async function signOut() {
        try {
            await Auth.signOut({ global: true });
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }
    if (user) {
        console.log(user.attributes.name);
    } else {
        console.log("No user found");
    }
    !user && <Navigate to="/login" />

    return (
        <div>
            <Authenticator>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
                            News-App
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Hi, {user?.attributes?.name}
                        </Typography>
                        <Button color="inherit" onClick={signOut}>Sign Out</Button>
                    </Toolbar>
                </AppBar>

            </Authenticator>
        </div>
    );
}

export default Dashboard;