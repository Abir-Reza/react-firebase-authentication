import React from 'react';

const Register = () => {
    return (
        <div>
            <h1>Register here </h1>
            <form>
                <input type="email" />
                <br></br>

                <input type="password" />
                <br></br>

                <input type="submit" value='Submit'/>
                <br></br>
            </form>
        </div>
    );
};

export default Register;