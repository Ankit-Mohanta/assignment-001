import React from 'react'
import './TypeCard.scss'

const TypeCard = ({type}) => {
  return (
    <div className='TypeCard'>
        <span>{type}</span>
    </div>
  )
}

export default TypeCard