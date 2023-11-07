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
const bahrainImage = require("../../assets/bahrain.png");
const belgiumImage = require("../../assets/belgium.png");
const belizeImage = require("../../assets/belize.png");
const boliviaImage = require("../../assets/bolivia.png");
const botswanaImage = require("../../assets/botswana.png");
const bulgariaImage = require("../../assets/bulgaria.png");
const canadaImage = require("../../assets/canada.png");
const colombiaImage = require("../../assets/colombia.png");
const costaRicaImage = require("../../assets/costa-rica.png");
const croatiaImage = require("../../assets/croatia.png");
const cubaImage = require("../../assets/cuba.png");
const cyprusImage = require("../../assets/cyprus.png");
const denmarkImage = require("../../assets/denmark.png");
const ecuadorImage = require("../../assets/ecuador.png");
const egyptImage = require("../../assets/egypt.png");
const elSalvadorImage = require("../../assets/el-salvador.png");
const fijiImage = require("../../assets/fiji.png");
const greeceImage = require("../../assets/greece.png");
const greenlandImage = require("../../assets/greenland.png");
const guatemalaImage = require("../../assets/guatemala.png");
const guyanaImage = require("../../assets/guyana.png");
const haitiImage = require("../../assets/haiti.png");
const hondurasImage = require("../../assets/honduras.png");
const hungaryImage = require("../../assets/hungary.png");
const indonesiaImage = require("../../assets/indonesia.png");
const iranImage = require("../../assets/iran.png");
const iraqImage = require("../../assets/iraq.png");
const irelandImage = require("../../assets/ireland.png");
const israelImage = require("../../assets/israel.png");
const italyImage = require("../../assets/italy.png");
const jamaicaImage = require("../../assets/jamaica.png");
const jordanImage = require("../../assets/jordan.png");
const kenyaImage = require("../../assets/kenya.png");
const kosovoImage = require("../../assets/kosovo.png");
const kuwaitImage = require("../../assets/kuwait.png");
const laosImage = require("../../assets/laos.png");
const libyaImage = require("../../assets/libya.png");
const luxembourgImage = require("../../assets/luxembourg.png");
const macedoniaImage = require("../../assets/macedonia.png");
const malaysiaImage = require("../../assets/malaysia.png");
const maliImage = require("../../assets/mali.png");
const mauritiusImage = require("../../assets/mauritius.png");
const mexicoImage = require("../../assets/mexico.png");
const mongoliaImage = require("../../assets/mongolia.png");
const mozambiqueImage = require("../../assets/mozambique.png");
const myanmarImage = require("../../assets/myanmar.png");
const nepalImage = require("../../assets/nepal.png");
const netherlandsImage = require("../../assets/netherlands.png");
const newZealandImage = require("../../assets/new-zealand.png");
const nicaraguaImage = require("../../assets/nicaragua.png");
const northKoreaImage = require("../../assets/north-korea.png");
const omanImage = require("../../assets/oman.png");
const pakistanImage = require("../../assets/pakistan.png");
const panamaImage = require("../../assets/panama.png");
const paraguayImage = require("../../assets/paraguay.png");
const peruImage = require("../../assets/peru.png");
const philippinesImage = require("../../assets/philippines.png");
const portugalImage = require("../../assets/portugal.png");
const qatarImage = require("../../assets/qatar.png");
const romaniaImage = require("../../assets/romania.png");
const rwandaImage = require("../../assets/rwanda.png");
const saudiArabiaImage = require("../../assets/saudi-arabia.png");
const sierraLeoneImage = require("../../assets/sierra-leone.png");
const singaporeImage = require("../../assets/singapore.png");
const sloveniaImage = require("../../assets/slovenia.png");
const somaliaImage = require("../../assets/somalia.png");
const southAfricaImage = require("../../assets/south-africa.png");
const southKoreaImage = require("../../assets/south-korea.png");
const spainImage = require("../../assets/spain.png");
const sriLankaImage = require("../../assets/sri-lanka.png");
const sudanImage = require("../../assets/sudan.png");
const switzerlandImage = require("../../assets/switzerland.png");
const taiwanImage = require("../../assets/taiwan.png");
const tasmaniaImage = require("../../assets/tasmania.png");
const thailandImage = require("../../assets/thailand.png");
const ugandaImage = require("../../assets/uganda.png");
const venezuelaImage = require("../../assets/venezuela.png");
const zambiaImage = require("../../assets/zambia.png");
const zimbabweImage = require("../../assets/zimbabwe.png");

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
    { name: "Bahrain", image: bahrainImage },
    { name: "Belgium", image: belgiumImage },
    { name: "Belize", image: belizeImage },
    { name: "Bolivia", image: boliviaImage },
    { name: "Botswana", image: botswanaImage },
    { name: "Bulgaria", image: bulgariaImage },
    { name: "Canada", image: canadaImage },
    { name: "Colombia", image: colombiaImage },
    { name: "Costa Rica", image: costaRicaImage },
    { name: "Croatia", image: croatiaImage },
    { name: "Cuba", image: cubaImage },
    { name: "Cyprus", image: cyprusImage },
    { name: "Denmark", image: denmarkImage },
    { name: "Ecuador", image: ecuadorImage },
    { name: "Egypt", image: egyptImage },
    { name: "El Salvador", image: elSalvadorImage },
    { name: "Fiji", image: fijiImage },
    { name: "Greece", image: greeceImage },
    { name: "Greenland", image: greenlandImage },
    { name: "Guatemala", image: guatemalaImage },
    { name: "Guyana", image: guyanaImage },
    { name: "Haiti", image: haitiImage },
    { name: "Honduras", image: hondurasImage },
    { name: "Hungary", image: hungaryImage },
    { name: "Indonesia", image: indonesiaImage },
    { name: "Iran", image: iranImage },
    { name: "Iraq", image: iraqImage },
    { name: "Ireland", image: irelandImage },
    { name: "Israel", image: israelImage },
    { name: "Italy", image: italyImage },
    { name: "Jamaica", image: jamaicaImage },
    { name: "Jordan", image: jordanImage },
    { name: "Kenya", image: kenyaImage },
    { name: "Kosovo", image: kosovoImage },
    { name: "Kuwait", image: kuwaitImage },
    { name: "Laos", image: laosImage },
    { name: "Libya", image: libyaImage },
    { name: "Luxembourg", image: luxembourgImage },
    { name: "Macedonia", image: macedoniaImage },
    { name: "Malaysia", image: malaysiaImage },
    { name: "Mali", image: maliImage },
    { name: "Mauritius", image: mauritiusImage },
    { name: "Mexico", image: mexicoImage },
    { name: "Mongolia", image: mongoliaImage },
    { name: "Mozambique", image: mozambiqueImage },
    { name: "Myanmar", image: myanmarImage },
    { name: "Nepal", image: nepalImage },
    { name: "Netherlands", image: netherlandsImage },
    { name: "New Zealand", image: newZealandImage },
    { name: "Nicaragua", image: nicaraguaImage },
    { name: "North Korea", image: northKoreaImage },
    { name: "Oman", image: omanImage },
    { name: "Pakistan", image: pakistanImage },
    { name: "Panama", image: panamaImage },
    { name: "Paraguay", image: paraguayImage },
    { name: "Peru", image: peruImage },
    { name: "Philippines", image: philippinesImage },
    { name: "Portugal", image: portugalImage },
    { name: "Qatar", image: qatarImage },
    { name: "Romania", image: romaniaImage },
    { name: "Rwanda", image: rwandaImage },
    { name: "Saudi Arabia", image: saudiArabiaImage },
    { name: "Sierra Leone", image: sierraLeoneImage },
    { name: "Singapore", image: singaporeImage },
    { name: "Slovenia", image: sloveniaImage },
    { name: "Somalia", image: somaliaImage },
    { name: "South Africa", image: southAfricaImage },
    { name: "South Korea", image: southKoreaImage },
    { name: "Spain", image: spainImage },
    { name: "Sri Lanka", image: sriLankaImage },
    { name: "Sudan", image: sudanImage },
    { name: "Switzerland", image: switzerlandImage },
    { name: "Taiwan", image: taiwanImage },
    { name: "Tasmania", image: tasmaniaImage },
    { name: "Thailand", image: thailandImage },
    { name: "Uganda", image: ugandaImage },
    { name: "Venezuela", image: venezuelaImage },
    { name: "Zambia", image: zambiaImage },
    { name: "Zimbabwe", image: zimbabweImage },
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