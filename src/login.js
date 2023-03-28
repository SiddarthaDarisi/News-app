import React, { useState, useEffect } from 'react';
import { Auth, Hub } from "aws-amplify"
import { Navigate } from 'react-router';
// import { Authenticator } from '@aws-amplify/ui-react';
import { Authenticator } from '@aws-amplify/ui-react';

function Login() {



    return (
        <div style={{ padding: 100 }}>
            <Authenticator>

            <Navigate to="/Dashboard" />
            {/* </div> */}
            </Authenticator>
        </div>// your login form code here
    );

}
export default (Login);
// import React, { useState } from 'react';
// import { Auth } from 'aws-amplify';
// import {
//     Button,
//     TextField,
//     Grid,
//     Paper,
//     Typography,
// } from '@mui/material';
// import { useState } from 'react';

// function Login() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [name, setName] = useState('');

//     async function signIn(event) {
//         event.preventDefault();
//         try {
//             const user = await Auth.signIn(email, password);
//             console.log(user);
//         } catch (error) {
//             console.log('error signing in', error);
//         }
//     }

//     async function signUp(event) {
//         event.preventDefault();
//         try {
//             const { user } = await Auth.signUp({
//                 username: email,
//                 password,
//                 attributes: {
//                     email,
//                     name,
//                 },
//             });
//             console.log(user);
//         } catch (error) {
//             console.log('error signing up', error);
//         }
//     }

//     async function forgotPassword(event) {
//         event.preventDefault();
//         try {
//             await Auth.forgotPassword(email);
//             console.log('forgot password request sent');
//         } catch (error) {
//             console.log('error sending forgot password request', error);
//         }
//     }

//     return (
//         <Grid container spacing={3}>
//             <Grid item xs={12}>
//                 <Paper>
//                     <Typography variant="h6">Sign In</Typography>
//                     <form onSubmit={signIn}>
//                         <TextField
//                             label="Email"
//                             type="email"
//                             onChange={(event) => setEmail(event.target.value)}
//                         />
//                         <TextField
//                             label="Password"
//                             type="password"
//                             onChange={(event) => setPassword(event.target.value)}
//                         />
//                         <Button type="submit">Sign In</Button>
//                     </form>
//                 </Paper>
//             </Grid>
//             <Grid item xs={12}>
//                 <Paper>
//                     <Typography variant="h6">Sign Up</Typography>
//                     <form onSubmit={signUp}>
//                         <TextField
//                             label="Name"
//                             onChange={(event) => setName(event.target.value)}
//                         />
//                         <TextField
//                             label="Email"
//                             type="email"
//                             onChange={(event) => setEmail(event.target.value)}
//                         />
//                         <TextField
//                             label="Password"
//                             type="password"
//                             onChange={(event) => setPassword(event.target.value)}
//                         />
//                         <Button type="submit">Sign Up</Button>
//                     </form>
//                 </Paper>
//             </Grid>
//             <Grid item xs={12}>
//                 <Paper>
//                     <Typography variant="h6">Forgot Password</Typography>
//                     <form onSubmit={forgotPassword}>
//                         <TextField
//                             label="Email"
//                             type="email"
//                             onChange={(event) => setEmail(event.target.value)}
//                         />
//                         <Button type="submit">Forgot Password</Button>
//                     </form>
//                 </Paper>
//             </Grid>
//         </Grid>
//     );
// }
// export default Login;