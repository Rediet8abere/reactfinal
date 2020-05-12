import React from 'react';
import BandName from './BandName';
import Like from './Like';
import data from './metal.json'
import './BandList.css';



function BandList() {
  var count = data.length;


  const bands = data.map(({ style, band_name, fans, origin, split }, i) => {
    if (split === '-') {
      return (
        <div className="BandList">
            <BandName
              id={i}
              style={style}
              band_name={band_name}
              fans={fans}
              origin={origin}
              split={split}
            />
            <Like />
        </div>

      )
    } else {
      return (
        <div className="BandList">
            <BandName
              id={i}
              style={style}
              band_name={band_name}
              fans={fans}
              origin={origin}
              split={split}
            />
        </div>

      )
    }

})

return (
  <div className="BandList">
    <h1 className="band-count">Bands count: {count}</h1>
    { bands }
  </div>

)
}

export default BandList;
