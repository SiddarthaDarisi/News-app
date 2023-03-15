//navbar news-app on left side and "Hi",username from aws cognito on right side
import React, { useState, useEffect } from 'react';
import { Auth, Hub } from "aws-amplify"
import { Navigate } from 'react-router';
import { Authenticator } from "aws-amplify"
import { Link } from "react-router-dom";
function Dashboard() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        async function userDetails() {
            try {
                const user = await Auth.currentAuthenticatedUser();
                setUser(user);
            } catch (err) { }
        }
        userDetails();
    }, []);

    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/Dashboard">News-App</Link>
                    </li>
                    <li>
                        <p>hi,{user.attributes.name}</p>
                    </li>
                </ul>
            </nav>
        </div >
    );
}
export default (Dashboard);


