import React, { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../context/firebase"
import { Form } from "../components";

export default function SignupForm() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);
    const [firstName, setFirstName ] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const isInvalid = firstName === "" || emailAddress === "" || password === "";

    const handleSignUp = (event) => {
        event.preventDefault();

        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then((result) => 
                result.user
                    .updateProfile({
                        displayName: firstName,
                        // photoURL: Math.floor(Math.random() *5) + 1,
                    })
                    .then(() => {
                        history.push("/page");
                    })
            )
            .catch((error) => {
                setFirstName("");
                setEmailAddress("");
                setPassword("");
                setError(error.message); 

            })
    }


    return (
        <>
            <Form>
                <Form.Wrapper onSubmit={handleSignUp} method="POST">
                    <Form.Title>Sign Up</Form.Title>

                    {error && <Form.ErrorMessage>{error}</Form.ErrorMessage>}

                    <Form.Input
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={({ target }) => setFirstName(target.value)}
                    />

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
                            Sign Up
                    </Form.SubmitButton>

                    <Form.Text>
                        Already have an account? <Form.Link to="/signin">Sign in here.</Form.Link> 
                    </Form.Text>

                    <Form.TextSmall>Your data will not be shared with anyone. Your full privacy is guaranteed.</Form.TextSmall>

                </Form.Wrapper>

                
            
            </Form>
            
        </>
    )
}
