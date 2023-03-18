import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from "./js/fetchCountries"
// import countryCard from "./js/country-card.js";

const DEBOUNCE_DELAY = 300;
const ulList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');
const input = document.querySelector('#search-box');
const elem = [];

input.addEventListener('input', debounce(() => {
    ulList.innerHTML = ""; 
    countryInfo.innerHTML = "";
    const name = input.value.trim();
    fetchCountries(name);
}, DEBOUNCE_DELAY)
);

