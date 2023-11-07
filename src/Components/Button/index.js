import React from "react";
import { Text,  TouchableOpacity } from "react-native";
import {styles} from "./styles";

const Button = ({ title, onPress, incorrect }) => {
    const buttonStyle = [styles.container];

    if (incorrect) {
        buttonStyle.push(styles.incorrectButton);
    }

    return (
        <TouchableOpacity activeOpacity={0.6} onPress={onPress} style={buttonStyle}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
};


export default Button;