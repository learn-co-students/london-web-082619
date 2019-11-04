class API {

  static randomDogURL = "https://dog.ceo/api/breeds/image/random"

  static get = url => fetch(url).then(resp => resp.json())
  
}

export default API