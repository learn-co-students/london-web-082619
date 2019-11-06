class API {

  static baseURL = "http://localhost:3000/paintings/"

  static paintingURL = id => `http://localhost:3000/paintings/${id}`

  static get = url => fetch(url).then(resp => resp.json())

  static patch = (url, body) => {
    return fetch(url, {
        method: "PATCH",
        headers: { 
          "Content-Type" : "application/json"
         },
        body: JSON.stringify(body)
      }
    ).then(resp => resp.json)
  }

}

export default API