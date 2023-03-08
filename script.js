const uri = "https://api.openbrewerydb.org/breweries";
const countriesContainer = document.getElementById("persondetailscontainer");
const searchInput = document.getElementById("search");
let countries = [];

function handleSearch(target) {
  const search = target.value.toLowerCase();
  const searchMatch = countries.filter((element) => {
    const name = element.name.common.toLowerCase();
    return name.includes(search);
  });
  renderCards(searchMatch);
}

async function fetchData() {
  const response = await fetch(uri);
  const data = await response.json();
  if (data.length > 0) {
    countries = [...data];
    renderCards(countries);
  }
}
fetchData();
function renderCards(data = []) {
  
  let cards = [];
  for (let i = 0; i < data.length; i++) {
    cards.push(createCard(data[i]));
  }
  
  countriesContainer.innerHTML = "";
  
  countriesContainer.append(...cards);
}

function createCard(data = {}) {
  let card = document.createElement("div");
  let title = document.createElement("h2");
  let subHeading = document.createElement("p");

  card.setAttribute("class", "card");

 
  const { name = "", latitude = "" } = data;
  title.innerText = name;
  subHeading.innerText = latitude;
 
  card.append(title, subHeading);

  return card;
}
