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

test('renders AppBar component', () => {
    const { getByText } = render(
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
    );

    expect(getByText('News-App')).toBeInTheDocument();
    expect(getByText(`Hi, ${user?.attributes?.name}`)).toBeInTheDocument();
    expect(getByText('Sign Out')).toBeInTheDocument();
});