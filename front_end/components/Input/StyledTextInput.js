import React from "react";
import { View } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import styled from 'styled-components/native';
import { colors } from '../colors';
const { primary, secondary, tertiary,accent, lightGray } = colors;

import SmallText from "../Texts/SmallText";

console.log(MaterialCommunityIcons);

const InputField = styled.TextInput`
    padding: 15px;
    background-color: ${primary};
    padding-left: 65px;
    padding-right: 55px;
    border-radius: 10px;
    font-size: 16px;
    height: 60px;
    margin-top: 3px;
    margin-bottom: 10px;
    color: ${tertiary};
    border-color: ${secondary};
    border-width: 2px;
`

const LeftIcon = styled.View`
    position: absolute;
    top: 35px;
    left: 15px;
    z-index: 1;
    border-right-width: 2px;
    border-color: ${secondary};
    padding-right: 10px;
`

const StyledTextInput = ({icon, label, ...props}) => {

    return (<View>
            <LeftIcon>
            <MaterialCommunityIcons name={icon} size={30} color={accent} />
            </LeftIcon>
            <SmallText> {label} </SmallText>
        <InputField
            {...props}
            placeholderTextColor = {lightGray}
        />
    </View>);
};

export default StyledTextInput;