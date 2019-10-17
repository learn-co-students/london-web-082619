const BASE_URL = "http://localhost:3000/quotes?_embed=likes";
const LIKE_URL = "http://localhost:3000/likes";
const CHANGE_URL = "http://localhost:3000/quotes/";

////////////////////////////API CALLS\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const jsonify = resp => resp.json();

const get = url => {
  return fetch(url).then(jsonify);
};

const change = (url, method, body) => {
  return fetch(url, {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
};

API = { get, change };

///////////////////////////////////Rendering\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//HELPER METHODS\\

const createElement = (element, className = "", innerText = "") => {
  el = document.createElement(element);
  el.className = className;
  el.innerText = innerText;
  return el;
};

const grabElement = element => {
  return document.querySelector(element);
};

const quoteList = grabElement("#quote-list");

const renderQuote = quote => {
  let li = createElement("li", "quote-card");
  let bq = createElement("blockquote", "blockquote");
  let p = createElement("p", "mb-0", quote.quote);
  let footer = createElement("footer", "blockquote-footer", quote.author);
  let br = createElement("br");

  let likeButton = createLikeButton(quote); ////WE NEED THIS TO HANDLE THE INITIAL LIKES AND A NEW QUOTE'S LIKES. SEE COMMENTS BELOW

  let deleteButton = createElement("button", "btn-danger", "Delete");

  bq.append(p, footer, br, likeButton, deleteButton);
  li.append(bq);

  quoteList.append(li);

  likeButton.addEventListener("click", e => {
    let body = { quoteId: quote.id };
    console.log(body);
    API.change(LIKE_URL, "POST", body);

    let likes = parseInt(e.target.innerText.split(" ")[1]);
    e.target.innerText = `Likes: ${(likes += 1)}`;
  });

  deleteButton.addEventListener("click", () => {
    console.log(CHANGE_URL + quote.id);
    fetch(CHANGE_URL + quote.id, {
      method: "DELETE"
    });
    quoteList.removeChild(li);
  });

  ////////////////////////////////EDITING QUOTE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  let editButton = createElement("button", "", "Edit");
  bq.append(editButton);
  let form = createElement("form");
  form.style.display = "none";

  li.append(form);

  ////CREATING FORM INPUTS\\\\\\
  let quoteInput = createElement("input");
  quoteInput.type = "text";
  quoteInput.name = "quote";
  quoteInput.placeholder = "Quote";

  let authorInput = createElement("input");
  authorInput.type = "text";
  authorInput.placeholder = "Author";
  authorInput.name = "author";

  let editSubmit = createElement("button", "", "Update");
  editSubmit.type = "submit";

  form.append(quoteInput, authorInput, editSubmit);

  /////HIDING AND SHOWING THE EDIT FORM\\\\\\\\
  editButton.addEventListener("click", () => {
    ///This is a ternary. If this form's display is "none" (None hides it), then change it to "block", to show it and vice versa
    form.style.display === "none"
      ? (form.style.display = "block")
      : (form.style.display = "none");
    ///////Fill in the form with the existing quote and author
    form.quote.value = quote.quote;
    form.author.value = quote.author;
  });

  form.addEventListener("submit", e => {
    e.preventDefault();
    ///Grab the new quote and author then patch
    let body = {
      quote: form.quote.value,
      author: form.author.value
    };
    // console.log(CHANGE_URL + quote.id); <--- Testing it goes to the right end point
    API.change(CHANGE_URL + quote.id, "PATCH", body);
    ////UPDATE THE FRONTEND
    p.innerText = body.quote;
    footer.innerText = body.author;
    ///COLLAPSE THE FORM
    form.style.display = "none";

    ////TRY ABSTRACTING THE FRONT END UPDATE INTO A FUNCTION
  });
};

const renderQuotes = quotes => {
  quotes.forEach(renderQuote);
};

/////PUTTING IT ALL TOGETHER\\\\\\
const clearList = () => {
  while (quoteList.hasChildNodes()) {
    quoteList.removeChild(quoteList.firstChild);
  }
};

const fetchAndRenderQuotes = () => {
  clearList();
  API.get(BASE_URL).then(renderQuotes);
};

//////////////////////////////////ADDING A QUOTE \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const form = grabElement("#new-quote-form");

form.addEventListener("submit", e => {
  e.preventDefault();
  let newQuote = {
    quote: e.target.quote.value,
    author: e.target.author.value,
    likes: 0
  };

  API.change(CHANGE_URL, "POST", newQuote)
    .then(jsonify)
    .then(renderQuote);
});

//////The likes from the initial fetch return as an array where the number of likes is the length of the array. How I've created a new quote means that the likes are a simple key-value pairing with an integer. We need to account for both cases
const createLikeButton = quote => {
  let likeButton; /// This is the first time I've seen the value of declaring a variable without setting it. Come discuss if you want to know why I've had to do this.
  if (Array.isArray(quote.likes)) {
    likeButton = createElement(
      "button",
      "btn-success",
      `Likes: ${quote.likes.length}`
    );
  } else {
    likeButton = createElement(
      "button",
      "btn-success",
      `Likes: ${quote.likes}`
    );
  }
  return likeButton;
};

/////////////////////////////////////////////////////////////////////////////////

const init = () => {
  fetchAndRenderQuotes();
};

init();
