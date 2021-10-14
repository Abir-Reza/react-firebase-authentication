import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../Hook/UseFirebase';

const Login = () => {
    const {signInUsingGoogle} = useFirebase();
    return (
        <div>
            <h1>Please Login</h1>
            <button onClick={signInUsingGoogle}>Google sign in</button>
            <br></br>

            <Link to='/register'>New User ?</Link>
        </div>
    );
};

export default Login;