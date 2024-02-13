import { useState } from "react";
import {
            signInAuthUserWithEmailAndPassword, 
            createDocumentFromAuth, 
            signInWithGooglePopup 
        } from "../utils/firebase";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { SignInContainer, SignInHeading, ButtonsContainer } from "./sign-in-form.styles";

const SignInForm = () => {

    const  defaultFormFields = {
        email: '',
        password: ''
    }
    const [formFields, setFormFields] = useState(defaultFormFields);

    const { email, password } = formFields;


    const handleChange = (event) => {
        const {name, value} = event.target

        setFormFields({
            ...formFields,
            [name]: value
        });
    }
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        try{
            await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        } catch (error) {
            if(error.code === 'auth/invalid-credential') {
                alert('incorrect password or email')
            }
            console.log(error)
        }
    }

    const googleSigIn = async () => {
        await signInWithGooglePopup();
    }
    return(
        <SignInContainer>
            <SignInHeading>I already have an account ?</SignInHeading>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    label='Email'
                    type="email" 
                    required 
                    onChange={handleChange} 
                    name="email" 
                    value={email}
                />
                <FormInput 
                    label='Password'
                    type="password" 
                    required 
                    onChange={handleChange} 
                    name="password" 
                    value={password}
                />
                <ButtonsContainer>
                    <Button type="submit">Sign In</Button>
                    <Button type='button' buttonType='google' onClick={googleSigIn}>Google sign in</Button>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    )
}; 


export default SignInForm;