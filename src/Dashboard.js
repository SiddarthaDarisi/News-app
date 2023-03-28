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
import { Authenticator } from '@aws-amplify/ui-react';
import { Refresh } from '@mui/icons-material';
//sjd
function Dashboard() {
    const [user, setUser] = useState(null);
    const [categories, setCategories] = useState(['general']);
    const [showSettings, setShowSettings] = useState(false);

    useEffect(() => {
        async function userDetails() {
            try {
                const user = await Auth.currentAuthenticatedUser();
                setUser(user);
                const username = user.username;
                const categoryData = await API.graphql({
                    query: /GraphQL/ `
            query GetCreateCategoryInput($username: String!) {
              getCreateCategoryInput(username: $username) {
                category
              }
            }
          `,
                    variables: { username },
                });
                const category =
                    categoryData.data.getCreateCategoryInput?.category || ['general'];
                setCategories(category);
            } catch (err) {
                console.log('Error retrieving user category:', err);
                setCategories(['general']);
            }
        }
        userDetails();
    }, []);

    async function signOut() {
        try {
            console.log('signing out');
            await Auth.signOut({ global: true });
        } catch (error) {
            console.log('error signing out:', error);
        }
    }

    if (user) {
        console.log(user.attributes.name);
    } else {
        console.log('No user found');
    }

    if (!user) {
        return <Navigate to="/login" />;
    }

    const handleSaveSettings = async (newCategories) => {
        setCategories(newCategories);
        setShowSettings(false);
        const username = user.username;
        try {
            await API.graphql({
                query: /GraphQL/ `
          mutation UpdateCreateCategoryInput($input: CreateCategoryInput!) {
            updateCreateCategoryInput(input: $input) {
              category
            }
          }
        `,
                variables: {
                    input: {
                        username,
                        category: newCategories,
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
            <Authenticator>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
                            News-App
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
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
                    <Box id="news">
                        {categories.map((category) => (
                            <News key={category} category={category} />
                        ))}
                    </Box>
                )}
            </Authenticator>
        </div>
    );
}

export default Dashboard;