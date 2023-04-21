
import { Authenticator, ThemeProvider,useTheme} from '@aws-amplify/ui-react';
import Dashboard from './Dashboard';
import React, { useState, useEffect } from 'react';
export function Login() {
    const { tokens } = useTheme();
    const theme = {
        name: 'Auth Example Theme',

        tokens: {
            colors: {
                background: {
                    primary: {
                        value: tokens.colors.neutral['10'].value,
                    },
                    secondary: {
                        value: tokens.colors.neutral['20'].value,
                    },
                },
                font: {
                    interactive: {
                        value: tokens.colors.black.value,
                    },
                },

            },
            components: {
                button: {
                    primary: {
                        backgroundColor: {
                            value: tokens.colors.black.value,
                        },
                        _hover: {
                            backgroundColor: {
                                value: tokens.colors.black.value,
                            },
                        },
                        _active: {
                            backgroundColor: {
                                value: tokens.colors.black.value,
                            },
                        },
                    },
                },

                tabs: {
                    item: {
                        _focus: {
                            color: {
                                value: tokens.colors.black.value,
                            },
                        },
                        _hover: {
                            color: {
                                value: tokens.colors.black.value,
                            },
                        },

                        _active: {
                            color: {
                                value: tokens.colors.black.value,
                            },
                        },
                    },
                },
            },
        },
    };

    return (
       
        <ThemeProvider theme={theme}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'center', height:'100vh' }}>
            <Authenticator><Dashboard  /></Authenticator>
        </div>
      </ThemeProvider>
      
        
    );
}
export default Login;