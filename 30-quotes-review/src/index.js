/////USE ALTERNATIVE.JS FOR CURRENT APPROACH 

const firstData = "http://localhost:3000/quotes?_embed=likes";
const ul = document.querySelector("#quote-list");
const likeUrl = "http://localhost:3000/likes";

//Fetching initial data
let fetchQuotes = () => {
  return fetch(firstData).then(resp => resp.json());
};

// Render one quote to the page

let renderQuote = quote => {
  let li = document.createElement("li");
  li.className = "quote-card";
  // li.id = quote.id;

  let bq = document.createElement("blockquote");
  bq.className = "blockquote";

  li.append(bq);

  let p = document.createElement("p");
  p.className = "mb-0";
  p.innerText = `${quote.quote}`;

  let footer = document.createElement("footer");
  footer.className = "blockquote-footer";
  footer.innerText = `${quote.author}`;

  let br = document.createElement("br");

  likeBtn = document.createElement("button");
  likeBtn.className = "btn-success";
  // likeBtn.innerHTML = `
  //   Likes:<span>${quote.likes.length}</span>
  //   `;

  let span = document.createElement("span");
  span.innerText = quote.likes.length;

  likeBtn.innerText = "Likes:";
  likeBtn.id = `like-${quote.id}`;
  likeBtn.append(span);

  deleteBtn = document.createElement("button");
  deleteBtn.className = "btn-danger";
  deleteBtn.innerText = "Delete";

  bq.append(p, footer, br, likeBtn, deleteBtn);

  ul.append(li);

  //Event listeners LIKE
  likeBtn.addEventListener("click", e => {
    quote;
    console.log(window.li);
    // debugger;
    id = parseInt(e.target.id.split("-")[1]);
    updateLikes(id);
    e.target.firstElementChild.innerText =
      parseInt(e.target.firstElementChild.innerText) + 1;
  });
};

let renderQuotes = quotesArray => {
  quotesArray.forEach(quote => {
    renderQuote(quote);
  });
};

// Adding a new quote

const form = document.querySelector("#new-quote-form");
const newQuote = document.querySelector("#new-quote");
const author = document.querySelector("#author");

const updateUrl = "http://localhost:3000/quotes";

let addQuote = () => {
  fetch(updateUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      quote: newQuote.value,
      author: author.value,
      likes: []
    })
  })
    .then(resp => resp.json())
    .then(resp => renderQuote(resp));
};

let update = (url, method, body) => {
  fetch(url, {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
};
form.addEventListener("submit", e => {
  e.preventDefault();
  addQuote();
});

//Update likes

let updateLikes = qi => {
  fetch(likeUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      quoteId: qi
    })
  });
};

let init = () => {
  fetchQuotes().then(resp => renderQuotes(resp));
};

init();
