import "dotenv/config.js"
import "../../config/database.js"
import Country from "../Country.js"

const countries = [
  {
    name: "Argentina",
    population: 45195777,
    flag: "https://example.com/flags/argentina.png"
  },
  {
    name: "Brazil",
    population: 212559417,
    flag: "https://example.com/flags/brazil.png"
  },
  {
    name: "Canada",
    population: 37742154,
    flag: "https://example.com/flags/canada.png"
  },
  {
    name: "China",
    population: 1439323776,
    flag: "https://example.com/flags/china.png"
  },
  {
    name: "France",
    population: 65273511,
    flag: "https://example.com/flags/france.png"
  },
  {
    name: "Germany",
    population: 83783942,
    flag: "https://example.com/flags/germany.png"
  },
  {
    name: "India",
    population: 1380004385,
    flag: "https://example.com/flags/india.png"
  },
  {
    name: "Italy",
    population: 60461826,
    flag: "https://example.com/flags/italy.png"
  },
  {
    name: "Japan",
    population: 126476461,
    flag: "https://example.com/flags/japan.png"
  },
  {
    name: "Mexico",
    population: 128932753,
    flag: "https://example.com/flags/mexico.png"
  },
  {
    name: "Russia",
    population: 145934462,
    flag: "https://example.com/flags/russia.png"
  },
  {
    name: "South Africa",
    population: 59308690,
    flag: "https://example.com/flags/south_africa.png"
  },
  {
    name: "Spain",
    population: 46754778,
    flag: "https://example.com/flags/spain.png"
  },
  {
    name: "United Kingdom",
    population: 67886011,
    flag: "https://example.com/flags/uk.png"
  },
  {
    name: "United States",
    population: 331002651,
    flag: "https://example.com/flags/us.png"
  }
];

Country.insertMany(countries)