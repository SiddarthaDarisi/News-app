//navbar news-app on left side and "Hi",username from aws cognito on right side
import React, { useState, useEffect } from 'react';
import { Auth, Hub } from "aws-amplify"
import { Navigate } from 'react-router';

import { Link } from "react-router-dom";
import { Authenticator } from '@aws-amplify/ui-react';
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
                <nav>
                    <ul>
                        <li>
                            <Link to="/Dashboard">News-App</Link>
                        </li>
                        <li>
                            <p>hi,{user.attributes.name}</p>
                        </li>
                        <li>
                            <button onClick={signOut}>Sign Out</button>
                        </li>

                    </ul>
                </nav>
            </Authenticator>
        </div >
    );
}
export default (Dashboard);


