import './css/styles.css';
// import countryCard from "./templates/country-card.hbs";

const DEBOUNCE_DELAY = 300;

fetch('https://restcountries.com/v3.1/all?fields=name').
then(responce => {return responce.json()}).
then(country => {
    console.log(country);
    console.log(country[0].name.common);

    // const liEl = `<h1 class="country-name">${country[0].name.common}</h1>`;

    // // console.log(liEl);

    // ulList.insertAdjacentHTML('beforeend', liEl);
    // const markup = countryCard(country);
    // console.log(markup);
}).
catch(error => {console.log(error)});


// const ulList = document.querySelector('.country-list');
// ulList.insertAdjacentHTML('beforeend', liEl);

// https://restcountries.com/v3.1/all?fields=name,flags'
// https://restcountries.com/v3.1/name/{name}
// https://restcountries.com/v3.1/name/deutschland
