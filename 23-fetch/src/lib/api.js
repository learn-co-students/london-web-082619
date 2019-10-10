const CONFIG = {
  BASE_URL: "http://localhost:3000",
  POSTS_URL: "/posts"
};

const createFetchConfig = (bodyData, httpMethod) => {
  return {
    method: httpMethod,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(bodyData)
  };
};

function getPosts() {
  return fetch(`${CONFIG.BASE_URL}/posts`).then(response => response.json());
}

function createPost() {
  const titleInput = document.querySelector("input#title");
  const authorInput = document.querySelector("input#author");

  const title = titleInput.value;
  const author = authorInput.value;

  const configObject = createFetchConfig({ title, author }, "POST");
  return fetch(`${CONFIG.BASE_URL}/posts`, configObject).then(response =>
    response.json()
  );
}

function deletePost(id) {
  return fetch(`${CONFIG.BASE_URL}/posts/${id}`, { method: "DELETE" }).then(
    response => response.json()
  );
}

const api = { getPosts, createPost, deletePost };
