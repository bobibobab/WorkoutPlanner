import React, {useState}  from "react";
import {Formik} from 'formik';
import { ActivityIndicator, PixelRatio } from "react-native";

import { colors } from "../components/colors";
const { primary, accent } = colors;

import MainContainer from "../components/containers/MainContainer";
import KeyboardAvoidingContrainer from "../components/containers/KeyboardAvoidingContainer" 
import RegularText from "../components/Texts/RegularText";
import StyledTextInput from "../components/Input/StyledTextInput";
import MsgBox from "../components/Texts/MsgBox";
import RegularButton from "../components/Buttons/RegularButton";
import PressableText from "../components/Texts/PressableText";
import RowContainer from "../components/containers/RowContainer";

const Login = () => {
    const [message, setMessage] = useState('');
    const [isSuccessMessage, setIsSuccessMessage] = useState(false);
    
    const handleLogin = async (MongoCredentials, sutsubmitting) => {
        try {

            setMessage(null);

            //call backend

            //move to next page

            setSubmitting(false);
        } catch (error) {
            setMessage('Login failed: ' + error.message);
            setSubmitting(false);
        }
    }

    return (
    <MainContainer>
        <KeyboardAvoidingContrainer>
            <RegularText style = {{marginBottom: 25}}> Enter Your Account Credentials</RegularText>

            <Formik 
                initialValues = {{email: '', password: ''}}
                onSubmit={(values, {setSubmitting})=> {
                    if (values.email == "" || values.password == "" ){
                        setMessage('Please fill in all fields');
                        setSubmitting(false);
                    }else{
                        handleLogin(values, setSubmitting);
                    }
                }}  
            
            >
                {({handleChange, handleBlur, handleSubmit, values, isSubmitting}) => (
                    <>
                            <StyledTextInput 
                                icon="email" 
                                label="Email Address" 
                                placeholder="songjisu2487@gmail.com" 
                                keyboardType="email-address" 
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value = {values.email}
                                style = {{marginBottom: 25}}
                            />

                            <StyledTextInput
                                icon="lock-open"
                                label="Password"
                                placeholder="* * * * * * *"
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                isPassword={ true }
                                style={{ marginBottom: 25 }}
                            />
                                <MsgBox style={{ marginBottom: 25 }} success={isSuccessMessage}>{ message || ' '}</MsgBox>
                                {!isSubmitting && <RegularButton onPress = {handleSubmit}> Login </RegularButton>}
                                {isSubmitting && <RegularButton disabled={true}> <ActivityIndicator size="small" color={primary} /> </RegularButton>}
                                <RowContainer>
                                    <PressableText onPress = {() => {}}>New account sign up</PressableText>
                                    <PressableText onPress={() => { }}>Forgot Password</PressableText>
                                </RowContainer>
                                
                    </>
                )}
            </Formik>
        </KeyboardAvoidingContrainer>

    </MainContainer>);
}

export default Login;