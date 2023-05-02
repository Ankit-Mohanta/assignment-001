import React, { useState } from 'react'
import './Card.scss'
import Budget from '../Budget/Budget'
import Size from '../Property/Size/Size'
import Status from '../Furnished/Status'
import Type from '../Property/Type/Type'

const Card = () => {

    const [budget,setBudget] = useState(true)
    const [size,setSize] = useState(false)
    const [status,setStatus] = useState(false)
    const [type,setType] = useState(false)

    const budgetHandle = (e)=>{
        e.preventDefault();
        setBudget(true)
        setSize(false)
        setStatus(false)
        setType(false)
    }

    const sizeHandle = (e)=>{
        e.preventDefault();
        setBudget(false)
        setSize(true)
        setStatus(false)
        setType(false)
    }

    const statusHandle = (e)=>{
        e.preventDefault();
        setBudget(false)
        setSize(false)
        setStatus(true)
        setType(false)
    }

    const typeHandle = (e)=>{
        e.preventDefault();
        setBudget(false)
        setSize(false)
        setStatus(false)
        setType(true)
    }

  return (
    <div className='Card'>
        <div className="top">
            <div 
            className={budget ? 'budget button':'button'}
            onClick={budgetHandle}>BUDGET</div>
            <div 
            className={size ? 'size button':'button'}
            onClick={sizeHandle}>PROPERTY SIZE</div>
            <div 
            className={status ? 'size button':'button'}
            onClick={statusHandle}>FURNISHING STATUS</div>
            <div 
            className={type ? 'type button' :'button'}
            onClick={typeHandle}>PROPERTY TYPE</div>
        </div>
        <div className="buttom">
            {budget && <Budget/>}
            {size && <Size/>}
            {status && <Status/>}
            {type && <Type/>}
        </div>
    </div>
  )
}

export default Card