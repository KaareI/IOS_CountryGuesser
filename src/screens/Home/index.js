import React, { useState, useEffect } from "react";
import { Text, View, Image } from "react-native";
import Button from "../../Components/Button";
import { styles } from "./styles";

// Import all the image assets for the listed countries
const afghanistanImage = require("../../assets/afghanistan.png");
const algeriaImage = require("../../assets/algeria.png");
const andorraImage = require("../../assets/andorra.png");
const argentinaImage = require("../../assets/argentina.png");
const australiaImage = require("../../assets/australia.png");
const austriaImage = require("../../assets/austria.png");
const bangladeshImage = require("../../assets/bangladesh.png");
const brazilImage = require("../../assets/brazil.png");
const cambodiaImage = require("../../assets/cambodia.png");
const chileImage = require("../../assets/chile.png");
const chinaImage = require("../../assets/china.png");
const franceImage = require("../../assets/france.png");
const germanyImage = require("../../assets/germany.png");
const icelandImage = require("../../assets/iceland.png");
const indiaImage = require("../../assets/india.png");
const japanImage = require("../../assets/japan.png");
const madagascarImage = require("../../assets/madagascar.png");
const maltaImage = require("../../assets/malta.png");
const norwayImage = require("../../assets/norway.png");
const polandImage = require("../../assets/poland.png");
const swedenImage = require("../../assets/sweden.png");
const ukraineImage = require("../../assets/ukraine.png");
const vietnamImage = require("../../assets/vietnam.png");

const countries = [
    { name: "Afghanistan", image: afghanistanImage },
    { name: "Algeria", image: algeriaImage },
    { name: "Andorra", image: andorraImage },
    { name: "Argentina", image: argentinaImage },
    { name: "Australia", image: australiaImage },
    { name: "Austria", image: austriaImage },
    { name: "Bangladesh", image: bangladeshImage },
    { name: "Brazil", image: brazilImage },
    { name: "Cambodia", image: cambodiaImage },
    { name: "Chile", image: chileImage },
    { name: "China", image: chinaImage },
    { name: "France", image: franceImage },
    { name: "Germany", image: germanyImage },
    { name: "Iceland", image: icelandImage },
    { name: "India", image: indiaImage },
    { name: "Japan", image: japanImage },
    { name: "Madagascar", image: madagascarImage },
    { name: "Malta", image: maltaImage },
    { name: "Norway", image: norwayImage },
    { name: "Poland", image: polandImage },
    { name: "Sweden", image: swedenImage },
    { name: "Ukraine", image: ukraineImage },
    { name: "Vietnam", image: vietnamImage },
];


const Home = () => {
    const [currentCountry, setCurrentCountry] = useState(getRandomCountry());
    const [score, setScore] = useState(0);
    const [incorrectClick, setIncorrectClick] = useState(false);
    const [options, setOptions] = useState([]);

    // Function to reset the incorrect click state after 1.5 seconds
    useEffect(() => {
        if (incorrectClick) {
            const timeout = setTimeout(() => {
                setIncorrectClick(false);
            }, 1500);

            return () => clearTimeout(timeout);
        }
    }, [incorrectClick]);

    function getRandomCountry() {
        const randomIndex = Math.floor(Math.random() * countries.length);
        return countries[randomIndex];
    }

    function getRandomOptions(correctCountry) {
        const allCountries = [...countries];
        const correctCountryIndex = allCountries.findIndex(country => country.name === correctCountry.name);
        allCountries.splice(correctCountryIndex, 1); // Remove the correct answer temporarily

        // Shuffle the remaining options
        for (let i = allCountries.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [allCountries[i], allCountries[j]] = [allCountries[j], allCountries[i]];
        }

        // Add the correct answer back to the options
        const shuffledOptions = [correctCountry, ...allCountries.slice(0, 2)];

        // Shuffle the options again to randomize their order
        for (let i = shuffledOptions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
        }

        return shuffledOptions;
    }

    const initializeGame = () => {
        const initialOptions = getRandomOptions(currentCountry);
        setOptions(initialOptions);
    };

    useEffect(() => {
        initializeGame();
    }, [currentCountry]);

    const handleButtonClick = (countryName) => {
        if (countryName === currentCountry.name) {
            setScore(score + 1);
            console.log("Chosen Country: " + currentCountry.name);
            console.log("Image Source: " + currentCountry.image);

            // User guessed correctly, continue to the next round
            setCurrentCountry(getRandomCountry());
        } else {
            // Incorrect guess, handle the logic for changing button color here.
            setIncorrectClick(true);
        }
    };

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

            {options.map((country, index) => (
                <Button
                    key={index}
                    title={country.name}
                    onPress={() => handleButtonClick(country.name)}
                    correct={country.name === currentCountry.name}
                    style={{ backgroundColor: incorrectClick && country.name !== currentCountry.name ? "red" : "transparent" }}
                />
            ))}

            <Text style={styles.footer}>{score}</Text>
        </View>
    );
};

export default Home;