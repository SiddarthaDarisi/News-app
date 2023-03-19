//write a landing page
//navbar with login on right side and "news-app" text on left side
import React from 'react';
import { Link } from "react-router-dom";
import News from './news.js';
function Landing() {
    return (
        <div className="Landing">
            <nav>
                <ul>
                    <li>
                        <Link to="/">News-App</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
            <News />
        </div>


    );
}
export default Landing;
