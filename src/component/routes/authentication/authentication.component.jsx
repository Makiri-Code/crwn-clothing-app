import SignUpForm from "../../signup-form/signup-form.component";
import SignInForm from "../../sign-in-form/signin-form.component";
import { AuthenticationContainer } from "./authentication.styles";

const SignIn = () => {
    

    return(
        <AuthenticationContainer>
            <SignInForm/>
            <SignUpForm/>
        </AuthenticationContainer>
    )
};

export default SignIn;