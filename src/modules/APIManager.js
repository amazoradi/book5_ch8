const remoteURL = "http://localhost:5002"

export default class APIManager {
  constructor(props) {
    this.name = props
  }
  get(id) {
    return fetch(`${remoteURL}/${this.name}/${id}`).then(data => data.json())
  }

  all() {
    return fetch(`${remoteURL}/${this.name}`).then(data => data.json())
  }

  delete(id) {
    return fetch(`${remoteURL}/${this.name}/${id}`, {
      method: "DELETE"
    })
      .then(response => response.json())
  } 
  postNew(newThing) {
    return fetch(`${remoteURL}/${this.name}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newThing)
    }).then(data => data.json())
  }
}

