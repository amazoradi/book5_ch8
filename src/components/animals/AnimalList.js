import React, { Component } from "react"
import dog from "./DogIcon.png"
import "./Animals.css"
import { Link } from "react-router-dom";

class AnimalList extends Component {
  animalOwner(taco) {
    // filter map find
    let animalOwners = this.props.animalOwners
      .filter(join => join.animalId === taco)
      .map(join => this.props.owners.find(owner => owner.id === join.ownerId).name)

    if (animalOwners.length === 0) {
      animalOwners = ["no one. This animal is up for adoption"]
    }

    return animalOwners
  }

  render() {
    return (
      // react.fragment allows us to have two parent items rendered instead of one 
      <React.Fragment>
        <div className="animalButton">
          <button type="button"
            className="btn btn-success"
            onClick={() => {
              this.props.history.push("/animals/new")
            }
            }>
            Admit Animal
         </button>
        </div>
        <section className=" list">
          <h2 className="card-title"> Our Animals</h2>
          <div className="animals">

            {
              this.props.animals.map(animal =>

                <div key={animal.id} className="card">
                  <div className="card-body">
                    <h5 className="card-title">
                      <img src={dog} className="icon--dog" />
                      <p>
                        <strong>{animal.name}</strong>.
                 </p>
                      <p>
                        Owner: {this.animalOwner(animal.id).join(" and ")}.
                 </p>
                      <Link className="nav-link" to={`/animals/${animal.id}`}>Details</Link>
                      <a
                        href="#" onClick={() => this.props.deleteAnimal(animal.id)}
                        className="card-link">Delete</a>
                    </h5>
                  </div>
                </div>

              )
            }
          </div>
        </section>
      </React.Fragment>
    )
  }
}


export default AnimalList