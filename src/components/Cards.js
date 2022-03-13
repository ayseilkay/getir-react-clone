import React, { useEffect, useState } from 'react'
import cardsData from 'api/cards.json'
import Card from './ui/Card'

function Cards() {
 
  const [cards,setCards]= useState([])

  useEffect(()=>{
    setCards(cardsData)
  },[])
  return (

    <div className='container mx-auto grid grid-cols-3 gap-x-4 ' >
        {
          cards.length && cards.map((card,index)=>(
            <Card card={card} key={index}/>
          ))
        }
    </div>
  )
}

export default Cards