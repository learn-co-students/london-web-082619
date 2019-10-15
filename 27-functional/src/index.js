const createDiv = options => Sam.createElement("div", options);
const createH2 = options => Sam.createElement("h2", options);
const createP = options => Sam.createElement("p", options);
const createImg = options => Sam.createElement("img", options);
const createButton = options => Sam.createElement("button", options);

window.addEventListener("DOMContentLoaded", function() {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyForm = document.querySelector(".container");
  const toyContainer = document.querySelector("#toy-collection");
  let addToy = false;

  // YOUR CODE HERE

  const renderToys = function(toys) {
    toys.forEach(renderToy);
  };
  API.getToys().then(renderToys);

  // const renderToys = toys => toys.forEach(renderToy);

  const likeToy = function(toy, p) {
    toy.likes++;
    p.innerText = `${toy.likes} likes`;
    API.patchToy(toy);
  };

  const likeButtonListener = function(toy, p) {
    return function(event) {
      likeToy(toy, p);
    };
  };

  const renderToy = function(toy) {
    const div = createDiv({
      className: "card",
      children: [
        createH2({
          innerText: toy.name
        }),
        createImg({
          src: toy.image,
          className: "toy-avatar"
        }),
        createP({
          innerText: `${toy.likes} likes`
        }),
        createButton({
          className: "like-btn",
          innerText: "Like"
        })
      ]
    });

    // const div = document.createElement("div");
    // div.className = "card";
    toyContainer.append(div);

    // const h = document.createElement("h2");
    // h.innerText = toy.name;
    // const img = document.createElement("img");
    // img.className = "toy-avatar";
    // img.src = toy.image;
    // const p = document.createElement("p");
    // p.innerText = `${toy.likes} likes`;
    // const button = document.createElement("button");
    // button.className = "like-btn";
    // button.innerText = "like";

    // button.addEventListener("click", likeButtonListener(toy, p));

    // div.append(h, img, p, button);
  };

  const addNewToy = newToy => API.postToy(newToy).then(renderToy);

  const toyFormSubmitHandler = function(event) {
    console.log("form submitted");
    event.preventDefault();
    addNewToy({
      name: event.target.elements.name.value,
      image: event.target.elements.image.value
    });
    event.target.reset();
  };

  const toggleToyForm = () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyForm.style.display = "block";
    } else {
      toyForm.style.display = "none";
    }
  };

  toyForm.addEventListener("submit", toyFormSubmitHandler);

  addBtn.addEventListener("click", toggleToyForm);

  // setInterval(toggleToyForm, 2000);

  // OR HERE!
});
