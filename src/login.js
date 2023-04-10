// import React, { useState, useEffect } from 'react';
// import { Auth, Hub } from "aws-amplify"
// import { Navigate } from 'react-router';
// import { Authenticator } from '@aws-amplify/ui-react';
// function Login() {
//     const [signedUser, setSignedUser] = useState(false);
//     useEffect(() => {
//         async function authListener() {
//             Hub.listen("auth", (data) => {
//                 if (data.payload.event === 'signIn')
//                     setSignedUser(true);
//                 else if (data.payload.event === 'signOut')
//                     setSignedUser(false);
//             });
//             try {
//                 const user = await Auth.currentAuthenticatedUser();
//                 setSignedUser(true);
//             } catch (err) { }
//             return () => {
//                 Hub.remove("auth");
//             };
//         }
//         authListener();
//     }, [signedUser]);

//     return (
//         <div style={{ padding: 100 }}>
//             <Authenticator>
//                 <Navigate to="/dashboard" />
//             </Authenticator>
//         </div>
//     );

// }
// export default (Login);


// import { withAuthenticator } from '@aws-amplify/ui-react';
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