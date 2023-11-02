import React, { useState } from "react";
import { Text, View, Image } from "react-native";
import Button from "../../Components/Button";
import { styles } from "./styles";

// Import all the image assets for the listed countries
const afghanistanImage = require("../../assets/afghanistan.png");
const australiaImage = require("../../assets/australia.png");
const brazilImage = require("../../assets/brazil.png");
const chinaImage = require("../../assets/china.png");
const franceImage = require("../../assets/france.png");
const germanyImage = require("../../assets/germany.png");
const maltaImage = require("../../assets/malta.png");
const polandImage = require("../../assets/poland.png");
const swedenImage = require("../../assets/sweden.png");
const ukraineImage = require("../../assets/ukraine.png");

const countries = [
    { name: "Afghanistan", image: afghanistanImage },
    { name: "Australia", image: australiaImage },
    { name: "Brazil", image: brazilImage },
    { name: "China", image: chinaImage },
    { name: "France", image: franceImage },
    { name: "Germany", image: germanyImage },
    { name: "Malta", image: maltaImage },
    { name: "Poland", image: polandImage },
    { name: "Sweden", image: swedenImage },
    { name: "Ukraine", image: ukraineImage },
];


const Home = () => {
    const [currentCountry, setCurrentCountry] = useState(getRandomCountry());
    const [score, setScore] = useState(0);

    function getRandomCountry() {
        const randomIndex = Math.floor(Math.random() * countries.length);
        return countries[randomIndex];
    }

    const handleButtonClick = (countryName) => {
        if (countryName === currentCountry.name) {
            setScore(score + 1);
            console.log("Chosen Country: " + currentCountry.name);
            console.log("Image Source: " + currentCountry.image);
        } else {
            // Incorrect guess, handle the logic for changing button color here.
        }

        // Change to a random country
        setCurrentCountry(getRandomCountry());
    };

    // Create an array of random variant countries (excluding the correct one)
    const variantCountries = countries
        .filter(country => country.name !== currentCountry.name)
        .sort(() => Math.random() - 0.5)
        .slice(0, 2);

    const allOptions = [currentCountry, ...variantCountries].sort(() => Math.random() - 0.5);

    return (
        <View style={styles.container}>
            <Image
                resizeMode="contain"
                style={styles.image}
                source={currentCountry.image}
            />

            <View style={styles.titleContainer}>
                <Text style={styles.title}>Take a guess:</Text>
            </View>

            {allOptions.map((country, index) => (
                <Button
                    key={index}
                    title={country.name}
                    onPress={() => handleButtonClick(country.name)}
                    correct={country.name === currentCountry.name}
                />
            ))}

            <Text style={styles.footer}>{score}</Text>
        </View>
    );
};

export default Home;
