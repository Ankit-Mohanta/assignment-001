import React from 'react'
import './Search.scss'
import { AiOutlineDown } from 'react-icons/ai'
import { BiCurrentLocation } from 'react-icons/bi'
import { FcEmptyFilter } from 'react-icons/fc'

const Search = () => {
  return (
    <div className="search">
          <div className="residential">
            <span>Residental</span>
            <AiOutlineDown/>
          </div>
          <input type="text" className='LocationSearch' placeholder='Search your rental location'/>
          <div className="location">
            <BiCurrentLocation/>
          </div>
          <div className="filter">
            <FcEmptyFilter/>
          </div>
          <button>SEARCH</button>
        </div>
  )
}

export default Search