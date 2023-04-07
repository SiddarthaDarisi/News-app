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


import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import Dashboard from './Dashboard';

import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import awsExports from './aws-exports';

function Login() {
    //get user state from aws cognito
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    //check if user is signed in
    async function checkUser() {
        try {
            const user = await Auth.currentAuthenticatedUser();
            setUser(user);
        } catch (err) {
            setUser(null);
        }
    }

    //check if user is signed in
    checkUser();

    return (
        <div>
            <Dashboard />
        </div>
    );
}

export default withAuthenticator(Login);