const getButton = document.querySelector("#get");
const postList = document.querySelector("#list-of-posts");
const form = document.querySelector("form");

const postThePostData = e => {
  e.preventDefault();
  api.createPost().then(populateThePostList);
};

const populateThePostList = () => {
  api.getPosts().then(createAllPostElements);
};

const createPostElement = postObject => {
  const postLi = document.createElement("li");
  postLi.innerText = `${postObject.author}, ${postObject.title}`;

  postLi.dataset.id = postObject.id;

  postLi.addEventListener("click", () => {
    api.deletePost(postObject.id).then(() => {
      debugger;
      const postThatJustGotDeleted = document.querySelector(
        `li[data-id="${postObject.id}"`
      );
      postThatJustGotDeleted.remove();
    });
  });
  postList.append(postLi);
};

const createAllPostElements = arrayOfPosts => {
  postList.innerHTML = "";
  arrayOfPosts.forEach(post => {
    createPostElement(post);
  });
};

getButton.addEventListener("click", populateThePostList);
form.addEventListener("submit", postThePostData);
