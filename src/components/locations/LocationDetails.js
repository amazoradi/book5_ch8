import React, { Component } from "react"



export default class LocationDetail extends Component {
  render() {

    const location = this.props.locations.find(loc => loc.id === parseInt(this.props.match.params.locationId)) || {}

    return (
      <section className="location">
        <div key={location.id} className="card">
          <div className="card-body">
            <h4 className="card-title">

              {location.name}

            </h4>

            <h6 className="card-title">Feature: {location.feature}</h6>

          </div>
        </div>
      </section>
    )
  }
}