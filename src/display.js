import e from "express";

const API_URL = 'https://restcountries.com/v2/all';
const cards = document.querySelector('.cards');
const searchBtn = document.querySelectorAll('#search-box')

const showCountry = (data) => {
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('card');
  cardContainer.innerHTML = `
  <div class="card-image">
  <img src="${data.flag}" />
  </div>
  <div class="card-text">
  <h3>${data.name}</h3>
  <p><span>Population</span> ${data.population / 1000000}</p>
  <p><span>Region:</span> ${data.region}</p>
  <p><span>Capital city:</span> ${data.capital}</p>
  </div>
    `;
  cards.appendChild(cardContainer);
};

const display = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  data.forEach((country) => {
    showCountry(country);
  });
};

display();
export default display;

searchBtn.addEventListener('click', () => {
  fetch(`https://restcountries.com/v2/${searchBtn.input}`);
})