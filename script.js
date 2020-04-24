const memeUrl =  "https://api.imgflip.com/get_memes"
const kanyeQuoteUrl = "https://api.kanye.rest/"
const ronQuoteUrl = "https://ron-swanson-quotes.herokuapp.com/v2/quotes/1"

getMeme();

let kanye = document.getElementById("kanye-button");
kanye.addEventListener("click", () => getKanyeQuote(kanyeQuoteUrl));

let ron = document.getElementById("ron-button");
ron.addEventListener("click", () => getRonQuote(ronQuoteUrl));

function getRonQuote(link) {
  fetch(link).then((response) => response.json())
  .then((data) => showRonQuote(data));
}

function getKanyeQuote(link) {
  fetch(link).then((response) => response.json())
  .then((data) => showKanyeQuote(data));
}

function getMeme() {
  fetch(memeUrl).then((response) => response.json())
  .then((memedata) => showMeme(memedata));
}


function showKanyeQuote(data) {
  let response = document.getElementById("response");
  response.innerHTML = null;
  let quote = document.createElement("p");
  quote.textContent = data.quote;
  response.appendChild(quote);
}

function showRonQuote(data) {
  let response = document.getElementById("response");
  response.innerHTML = null;
  let quote = document.createElement("p");
  quote.textContent = data[0];
  response.appendChild(quote);
}

function showMeme(data) {
  let array = data.data.memes;
  let random = Math.floor(Math.random() * array.length)
  let meme = array[random].url;
  let choice = document.getElementById("choice");
  let memePic = document.createElement("img");
  memePic.setAttribute("src", meme);
  memePic.setAttribute("height", 300);
  choice.appendChild(memePic); 
}

