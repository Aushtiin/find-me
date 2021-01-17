import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { signInService } from '../services/Auth';
import { message } from 'antd';

const SignIn = ({history, updateGlobalAuth}) => {
    const [state, setState] = useState({
        email: "",
        password: "",
        rememberMe: false
    });

    const submit = (event) => {
        event.preventDefault()
        signInService(state);
        message.success('Log In Successful', [1])
        updateGlobalAuth(true)
        return history.push('/')
    }

    const handleChange = (event) => {
        const { name, value, checked, type } = event.target;

        const setValue = type === 'checked' ? checked : value;

        setState({
            ...state,
            [name]: setValue
        });
    }
    return (
        <>
            <div>
                <h3 className="text-center my-3">Have an account? Sign In</h3>
            </div>
            <Form method="POST" onSubmit={submit}>
                <Container>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Email" onChange={handleChange} name="email" value={state.email} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                    </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={handleChange} name="password" value={state.password} />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" name="rememberMe" onChange={handleChange} value={state.rememberMe} label="Remember Me" />
                    </Form.Group>
                    <Button variant="success" type="submit">
                        Sign In
                    </Button>
                </Container>
            </Form>
        </>
    )
}

export default SignIn
