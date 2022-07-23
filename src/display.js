const API_URL = 'https://restcountries.com/v2/all';
const cards = document.querySelector('.cards');
const dropBtn = document.querySelector('.dropbtn');
const dropDownContent = document.querySelector('.dropdown-content');

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

const region = document.querySelectorAll('.region');
const regionName = document.getElementsByClassName('regionName');

region.forEach((element) => {
  element.addEventListener('click', () => {
    console.log(element);
    Array.from(regionName).forEach((elem) => {
      console.log(elem);
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
