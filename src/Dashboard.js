import React, { useState, useEffect } from 'react';
import { Auth, API } from 'aws-amplify';
import { Navigate } from 'react-router';
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
import { useNavigate } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import Settings from './Setting.js';
// import { Authenticator } from '@aws-amplify/ui-react';
import { Refresh } from '@mui/icons-material';
import { getCreateCategoryInput } from './graphql/queries';
import { createCreateCategoryInput, updateCreateCategoryInput } from './graphql/mutations';
import Navbar2 from './Navbar2.js';

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
                if (categoryData?.data?.getCreateCategoryInput?.category) {
                    category = JSON.parse(categoryData.data.getCreateCategoryInput?.category);
                }
                if (categoryData?.data?.getCreateCategoryInput === null) {
                    const username = user.username;
                    try {
                        await API.graphql({
                            query: createCreateCategoryInput,
                            variables: {
                                input: {
                                    id: username,
                                    username: user?.attributes?.name,
                                    owner: username,
                                    category: JSON.stringify(["general"])
                                },
                            },
                        });
                    } catch (err) {
                        console.log('Error creating user category:', err);
                    }
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
            await Auth.signOut();


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
        <div style={{ background: '#F5F5F7', boxShadow: 'none' , position: 'absolute', top: 0, left: 0, width:"100%"} } >
            {/* <Authenticator> */}
            <AppBar position="static" key={"app-bar"}style={{ background: '#F5F5F7', boxShadow: 'none' }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 0 ,color: "Black" }} >
                        News-App
                    </Typography>
                    <Typography variant="h6" key={"username"} component="div" sx={{ flexGrow: 1 ,color: "Black" }}>
                        Hi, {user?.attributes?.name}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center',color: "Black"  }}>
                        <IconButton
                            color="inherit"
                            aria-label="settings"
                            onClick={handleSettingsOpen}
                        >
                            <SettingsIcon />
                        </IconButton>
                    </Box>
                    <IconButton color="inherit" onClick={handleRefresh} data-testid="refresh-button">
                    <Refresh sx={{color:"black"}}/>
                    </IconButton>
                    <Button sx={{ color: 'black' }} onClick={signOut}> Sign Out </Button>
                </Toolbar>
            </AppBar>
            {showSettings ? (
                <Settings
                    categories={categories}
                    handleClose={handleSettingsClose}
                    handleSave={handleSaveSettings}
                />
            ) : (
                <Box>
                    <Navbar2 categories={categories}/>
                    {/* {categories.map((category) => ( */}
                    {/* <News categories={categories} /> */}
                    {/* ))} */}
                    
                </Box>
            )}
            {/* </Authenticator> */}
        </div>
    );
}

export default (Dashboard);