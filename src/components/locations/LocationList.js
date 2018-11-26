import React, { Component } from "react"
import { Link } from "react-router-dom";

class LocationList extends Component {
  render() {
    return (
      <section className="locations list">
        <h2>Our Locations</h2>
        {
          this.props.locations.map(location =>
            <div key={location.id}>
              {location.name}, {location.address}
              <Link className="nav-link" to={`/locations/${location.id}`}>Details</Link>
            </div>

          )
        }
      </section>
    )
  }
}

export default LocationList