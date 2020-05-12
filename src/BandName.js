import React from 'react'

function BandName(props) {
  const { style, band_name, fans, origin, id } = props
  return (
    <div>

      <h1>BandName: {band_name}</h1>
      <h3>{id}</h3>
      <h2>Style: {style}</h2>
      <h2>Fans: {fans}</h2>
      <h2>Origin: {origin}</h2>

    </div>

  )
}

export default BandName
