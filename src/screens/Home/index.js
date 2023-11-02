import React from "react";
import {Text, View, Image} from "react-native"
import Button from "../../Components/Button";
import {styles} from "./styles";

const Home = ()  => {
    return (
        <View style={styles.container}>
        <Image resizeMode="contain" style={styles.image} source={require('../../assets/brazil.png')}/>

        <View style={styles.titleContainer}>
        <Text style={styles.title}>Take a guess:</Text>
        </View>

        <Button title="Brazil" />
        <Button title="Russia" />
        <Button title="Australia" />
        <Text style={styles.footer}>0</Text>
        </View>
    )
}
export default Home;