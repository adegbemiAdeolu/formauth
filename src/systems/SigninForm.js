import React, { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../context/firebase"
import { Form } from "../components";

export default function SigninForm() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const isInvalid = emailAddress === "" || password === "";

    const handleSignIn = (event) => {
        event.preventDefault();

        firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then(() => {
                history.push("/page");
            })
            .catch((error) => {
                setEmailAddress("");
                setPassword("");
                setError(error.message); 

            })
    }


    return (
        <>
            <Form>
                <Form.Wrapper onSubmit={handleSignIn} method="POST">
                    <Form.Title>Sign In</Form.Title>

                    {error && <Form.ErrorMessage>{error}</Form.ErrorMessage>}

                    <Form.Input 
                        type="email"
                        placeholder="Email Address"
                        value={emailAddress}
                        onChange={({ target }) => setEmailAddress(target.value)}
                    />

                    <Form.Input 
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={({ target }) => setPassword(target.value)}
                    />

                    <Form.SubmitButton disabled={isInvalid} type="submit">
                            Sign In
                    </Form.SubmitButton>

                    <Form.Text>
                        Don't have an account? <Form.Link to="/signup">Sign up here.</Form.Link> 
                    </Form.Text>

                    <Form.TextSmall>Your data will not be shared with anyone. Your full privacy is guaranteed.</Form.TextSmall>

                </Form.Wrapper>

                
            
            </Form>
            
        </>
    )
}
