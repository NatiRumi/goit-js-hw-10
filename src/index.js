import './css/styles.css';
import Notiflix from "notiflix";
// import countryCard from "./templates/country-card.js";

const DEBOUNCE_DELAY = 300;

// function fetchCountries(name) {
    
// }

fetch('https://restcountries.com/v3.1/all?fields=name,capital,population,flags,languages').
    then(responce => {return responce.json()}).
    then(countries => {
        console.log(countries);

        const needCountry = countries.filter(country => country.name.official.toLowerCase().includes('qua'));
        console.log(needCountry);
        const elem = [];

        if (needCountry.length > 10) {
            Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
            return;
        }
        if (needCountry.length > 1) {

            const markup = needCountry.map(country =>{
                return `<div class="country-card">
                <div class="country-flag">
                <img src="${country.flags.svg}" alt="" width = 30 height = 30>
                </div>
                <p class="country-name">${country.name.official}</p>
                </div>`
            }).join("");
            ulList.insertAdjacentHTML('beforeend', markup);
        } else {
            const markup = needCountry.map(country => {
                return `<div class="country-card">
            <div class="country-flag">
            <img src="${country.flags.svg}" alt="" width = 30 height = 30>
            </div>
            <h1 class="country-name">${country.name.official}</h1>
            <p>Capital ${country.capital}</p>
            <p>Population ${country.population}</p>
            <p>Languages ${country.languages}</p>
            </div>`})
            ulList.insertAdjacentHTML('beforeend', markup);
        }

        // console.log(countries[0].name.common);
        
        // const liEl = `<h1 class="country-name">${country[0].name.common}</h1>`;
    
        // // console.log(liEl);
    
        // ulList.insertAdjacentHTML('beforeend', liEl);
        // const markup = countryCard(country);
        // console.log(markup);
    }).
    catch(error => {console.log(error)})


const ulList = document.querySelector('.country-list');
// ulList.insertAdjacentHTML('beforeend', liEl);

// https://restcountries.com/v3.1/all?fields=name,flags'
// https://restcountries.com/v3.1/name/{name}
// https://restcountries.com/v3.1/name/deutschland
