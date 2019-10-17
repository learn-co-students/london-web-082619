/////USE ALTERNATIVE.JS FOR CURRENT APPROACH 
const BASE_URL = "http://localhost:3000/quotes?_embed=likes";
const LIKE_URL = "http://localhost:3000/likes";

///////Start!\\\\\\\\\\\\\\\\\\\\\\

////////////////////////Dealing with API calls\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const jsonify = resp => resp.json();

const get = url => {
  return fetch(url).then(jsonify);
};

const change = (url, method, body) => {
  fetch(url, {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
};

let updateLikes = qi => {
  fetch(likeUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      quoteId: qi
    })
  });
};

const API = { get, change };

///////////////////////////////////Rendering\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//HELPER METHODS\\
const grabElement = identifier => document.querySelector(identifier);

const createElement = (element, className = "", innerText = "") => {
  let el = document.createElement(element);
  el.className = className;
  el.innerText = innerText;
  return el;
};

//WHERE ARE WE RENDERING TO?\\\
const quoteList = grabElement("#quote-list");

///RENDER

const renderQuote = quote => {
  let li = createElement("li", "quote-card");
  let bq = createElement("blockquote", "blockquote");
  let p = createElement("p", "mb-0", quote.quote);
  let footer = createElement("footer", "blockquote-footer", quote.author);
  let br = createElement("br");
  let likeButton = createElement(
    "button",
    "btn-success",
    `Likes: ${quote.likes}`
  );
  let deleteButton = createElement("button", "btn-danger", "Delete");

  bq.append(p, footer, br, likeButton, deleteButton);
  li.append(bq);

  quoteList.append(li);

  likeButton.addEventListener("click", e => {
    let body = { quoteId: quote.id };
    console.log(body);
    API.change(LIKE_URL, "POST", body);
    debugger;
    newLikes = parseInt(e.target.innerText.split(":")[1]);
    newLikes += 1;
    e.target.innerText = `Likes: ${newLikes}`;
  });
};

const renderQuotes = quotes => {
  quotes.forEach(renderQuote);
};

///PUTTING IT ALL TOGETHER\\\
fetchAndRenderQuotes = () => {
  API.get(BASE_URL).then(renderQuotes);
};

document.addEventListener("DOMContentLoaded", fetchAndRenderQuotes);
