import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { Navigate } from 'react-router';
import { API } from 'aws-amplify';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    Select,
    MenuItem,
    IconButton,
} from '@mui/material';
import News from './news.js';
import './Dashboard.css';
import SettingsIcon from '@mui/icons-material/Settings';
import Settings from './Setting.js';
// import { Authenticator } from '@aws-amplify/ui-react';
import { Refresh } from '@mui/icons-material';
import { getCreateCategoryInput } from './graphql/queries';
import { updateCreateCategoryInput } from './graphql/mutations';

//sjd
function Dashboard() {
    const [user, setUser] = useState(null);
    const [categories, setCategories] = useState([]);
    const [showSettings, setShowSettings] = useState(false);

    useEffect(() => {
        async function userDetails() {
            try {


                const user = await Auth.currentAuthenticatedUser();
                console.log(`User: ${JSON.stringify(user)}`);
                setUser(user);
                const username = user.username;
                const categoryData = await API.graphql({
                    query: getCreateCategoryInput,
                    variables: { id: username },
                });
                let category = ['general'];
                if (categoryData.data.getCreateCategoryInput?.category) {
                    category = JSON.parse(categoryData.data.getCreateCategoryInput?.category);
                }
                console.log('User category:', category);
                setCategories(category);
                // window?.localStorage?.setItem('categories', JSON.stringify(category));
            } catch (err) {
                console.log('Error retrieving user category:', err);
                // setCategories(['general']);
                // window?.localStorage?.setItem('categories', JSON.stringify(['general']));
            }
        }
        userDetails();
        return () => {
            setUser(null);
        };
    }, []);

    async function signOut() {
        try {
            console.log('signing out');
            // window?.localStorage?.removeItem('categories');
            await Auth.signOut({ global: true });
        } catch (error) {
            console.log('error signing out:', error);
        }
    }




    const handleSaveSettings = async (newCategories) => {
        setCategories(newCategories);
        // window?.localStorage?.setItem('categories', JSON.stringify(newCategories));
        setShowSettings(false);
        const username = user.username;
        try {
            await API.graphql({
                query: updateCreateCategoryInput,
                variables: {
                    input: {
                        id: username,
                        category: JSON.stringify(newCategories),
                    },
                },
            });
        } catch (err) {
            console.log('Error updating user category:', err);
        }
    };

    const handleSettingsClose = () => {
        setShowSettings(false);
    };

    const handleSettingsOpen = () => {
        setShowSettings(true);
    };

    const handleChange = (event) => {
        setCategories(event.target.value);
    };
    const handleRefresh = () => {
        window.location.reload();
    };
    //jijij
    return (
        <div>
            {/* <Authenticator> */}
            <AppBar position="static" key={"app-bar"}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
                        News-App
                    </Typography>
                    <Typography variant="h6" key={"username"} component="div" sx={{ flexGrow: 1 }}>
                        Hi, {user?.attributes?.name}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton
                            color="inherit"
                            aria-label="settings"
                            onClick={handleSettingsOpen}
                        >
                            <SettingsIcon />
                        </IconButton>
                    </Box>
                    <IconButton color="inherit" onClick={handleRefresh}>
                        <Refresh />
                    </IconButton>
                    <Button color="inherit" onClick={signOut}>
                        Sign Out
                    </Button>
                </Toolbar>
            </AppBar>
            {showSettings ? (
                <Settings
                    categories={categories}
                    handleClose={handleSettingsClose}
                    handleSave={handleSaveSettings}
                />
            ) : (
                <Box id="news" sx={{ paddingTop: "1px" }}>
                    {categories.map((category) => (
                        <News key={category} category={category} />
                    ))}
                </Box>
            )}
            {/* </Authenticator> */}
        </div>
    );
}

export default (Dashboard);