import React from 'react';
import BandName from './BandName';
import Like from './Like';
import data from './metal.json'



function BandList() {
  var count = data.length;
  const bands = data.map(({ style, band_name, fans, origin }, i) => {
  return (
    <div className="BandList">
        <BandName
          id={i}
          style={style}
          band_name={band_name}
          fans={fans}
          origin={origin}
        />
        <Like />
    </div>

  )
})

return (
  <div className="BandList">
    <h1>Bands count: {count}</h1>
    { bands }
  </div>

)
}

export default BandList;
