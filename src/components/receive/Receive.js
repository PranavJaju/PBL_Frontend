import React from 'react'
import Cards from '../cards/Cards'
import Data from './Data'
import { useState } from 'react'
import './Receive.css'

export default function Receive() {
  function iterate(store) {
    return <Cards
      img={store.img}
      location={store.location}
      time={store.time}
    />
  }

  const [lat, setlat] = useState();
  const [long, setlong] = useState();

  function getLocation() {
    navigator.geolocation.getCurrentPosition(FetchPosition);
  }

  function FetchPosition(position) {
    setlat(position.coords.latitude);
    setlong(position.coords.longitude);
  }


  return (
    <div className="donation-page">
      <div className='searchbar-fetchloc'>
        <div className="location">
          <button className="btn btn-primary" type="submit" onClick={getLocation}>Fetch Location</button>
        </div>
        <div className='searchbar'>
        </div>
      </div>
      <div className='active-donations'>
        {Data.map(iterate)}
      </div>
    </div>
  )
}
