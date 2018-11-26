import APIManager from "./APIManager"

class AnimalManager extends APIManager {
  getAnimal(id) {
    return this.get(id)
  }

  getAll() {
    return this.all()
  }

  removeAndList(id) {
    return this.delete(id).then(() => this.all())
  }

  post(newAnimal) {
    return this.postNew(newAnimal)
  }
}

export default new AnimalManager("animals")

