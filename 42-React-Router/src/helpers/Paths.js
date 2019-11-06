class Paths {

  static root = "/"

  static paintings = "/paintings"

  static showPainting = (id=":id") => `/paintings/${id}`

  static editPainting = (id=":id") => `/paintings/${id}/edit`

}

export default Paths