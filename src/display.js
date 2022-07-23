const API_URL = 'https://restcountries.com/v2/all';
const cards = document.querySelector('.cards');

const showCountry = (data) => {
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('card');
  cardContainer.innerHTML = `
  <div class="card-image">
  <img src="${data.flag}" />
  </div>
  <div class="card-text">
  <h3>${data.name}</h3>
  <p>Population: ${data.population / 1000000}</p>
  <p>Region: ${data.region}</p>
  <p>Capital city: ${data.capital}</p>
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