import React from 'react'

// mixins (depr) -> hvor kommer state fra?
// HoC -> hvor kommer props fra? (Delvis hjulpet av recompose)
// render props ^ utgår.

class GeoPosition extends React.Component {
  state = {
    lat: null,
    lng: null,
  }

  componentDidMount() {
    navigator.geolocation.watchPosition(position => {
      this.setState({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      })
    })
  }

  render() {
    return this.props.render(this.state)
  }
}

export default GeoPosition
