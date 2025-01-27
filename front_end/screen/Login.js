import React from "react";


import MainContainer from "../components/containers/MainContainer";
import KeyboardAvoidingContrainer from "../components/containers/KeyboardAvoidingContainer" 
import RegularText from "../components/Texts/RegularText";
import StyledTextInput from "../components/Input/StyledTextInput";

const Login = () => {
    return (
    <MainContainer>
        <KeyboardAvoidingContrainer>
            <RegularText style = {{marginBottom: 25}}> Enter Your Account Credentials</RegularText>
                <StyledTextInput icon= "email" label = "Email Address" placeholder="songjisu2487@gmail.com" keyboardType= "email-address"/>
        </KeyboardAvoidingContrainer>

    </MainContainer>);
}

export default Login;