import React from 'react'
import { Carusoel } from '../Components/Carusoel'
import { Card01 } from '../Components/Card01'
import { Card02 } from '../Components/Card02'


const Home = () => {
  return (
    <div>
      <Carusoel />
<div className='flex flex-wrap'>
<Card01/>
      <Card02/>
</div>

    </div>
  )
}

export { Home }