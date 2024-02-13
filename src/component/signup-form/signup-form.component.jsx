import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createDocumentFromAuth } from "../utils/firebase";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { SignInContainer, SignInHeading } from "../sign-in-form/sign-in-form.styles";
const SignUpForm = () => {

    const  defaultFormFields = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
    const [formFields, setFormFields] = useState(defaultFormFields);

    const {displayName, email, password, confirmPassword } = formFields;

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
        if(password !== confirmPassword) {
            alert('passwords do not match')
            return;
        } 
        try{
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            await createDocumentFromAuth(user, {displayName});
            resetFormFields();
        } catch (error) {
            if(error.code === 'auth/email-already-in-use') {
                alert('email already in use')
            }
            console.log('user creation encountered an error', error)
        }
    }

    return(
        <SignInContainer>
            <SignInHeading>Don't Have an Account ?</SignInHeading>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    label='Display Name'
                    type="text" 
                    required 
                    onChange={handleChange} 
                    name="displayName" 
                    value={displayName}
                />
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
                <FormInput 
                    label='Confirm Password'
                    type="password" 
                    required 
                    onChange={handleChange} 
                    name="confirmPassword" 
                    value={confirmPassword}
                />
                <Button type="submit">Sign Up</Button>
            </form>
        </SignInContainer>
    )
}; 


export default SignUpForm;