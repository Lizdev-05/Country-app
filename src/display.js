const API_URL = 'https://restcountries.com/v2/all';
const cards = document.querySelector('.cards');
const dropBtn = document.querySelector('.dropbtn');
const dropDownContent = document.querySelector('.dropdown-content');
const search = document.querySelector('#search-box');
const region = document.querySelectorAll('.region');

const showCountry = (data) => {
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('card');
  cardContainer.innerHTML = `
  <div class="card-image">
  <img src="${data.flag}" />
  </div>
  <div class="card-text">
  <h3 class="countryName">${data.name}</h3>
  <p><span>Population</span> ${data.population / 1000000}</p>
  <p class="regionName"><span>Region:</span> ${data.region}</p>
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

dropBtn.addEventListener('click', () => {
  dropDownContent.classList.toggle('showdropdown');
});

const regionName = document.getElementsByClassName('regionName');

region.forEach((element) => {
  element.addEventListener('click', () => {
    Array.from(regionName).forEach((elem) => {
      if (
        elem.innerText.includes(element.innerText) ||
        element.innerText === 'All'
      ) {
        elem.closest('.card').style.display = 'grid';
      } else {
        elem.closest('.card').style.display = 'none';
      }
    });
  });
});

const countryName = document.getElementsByClassName('countryName');

search.addEventListener('keyup', () => {
  Array.from(countryName).forEach((elem) => {
    if (elem.innerText.toLowerCase().includes(search.value)) {
      elem.closest('.card').style.display = 'grid';
    } else {
      elem.closest('.card').style.display = 'none';
    }
  });
});
