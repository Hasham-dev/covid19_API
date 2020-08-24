import React from 'react';
import GLobalStats from './GLobalStats'
import AllCountries1 from './AllCountries1'

export default function InfoPanel({currentScreen}) {
  if(currentScreen === 0)
    return <GLobalStats />
  else if(currentScreen === 1)
    return <AllCountries1 />
    else return <GLobalStats />
}
