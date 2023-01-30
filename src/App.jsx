import React from 'react'
import  Header  from "./Components/Header/Header";
import Launch from './Components/Launch/Launch';

function App() {
  return (
    <div>
      <Header />
      <Launch title='FalconSat' 
      date='2006-03-25T10:30:00+12:00' 
      content='Successful first stage burn and transition to second stage, maximum altitude 289 km, Premature engine shutdown at T+7 min 30 s, Failed to reach orbit, Failed to recover first stage' 
      image='https://farm5.staticflickr.com/4256/35618496935_5049a27240_o.jpg'
      />

      <Launch title='AsiaSat 8' 
      date='2014-08-05T04:00:00-04:00' 
      content='Following second stage separation, SpaceX performed a test flight which attempted to return the first stage of the Falcon 9 through the atmosphere and land it on an approximately 90-by-50-meter (300 ft x 160 ft) floating platform-called the autonomous spaceport' 
      image='https://farm9.staticflickr.com/8742/16233828644_96738200b2_o.jpg'
      />
    </div>
  )
}

export default App
