import React from 'react'
import './Size.scss'
import Bhk from '../BHK/Bhk'

const Size = () => {
  return (
    <div className='Size'>
        <div className="left">
            <div>SELECT YOUR</div>
            <div>BEDROOM SIZE</div>
        </div>
        <div className="right">
            <div className="firstLine">
                <Bhk num='01'/>
                <Bhk num='02'/>
            </div>
            <div className="secondLine">
                <Bhk num='03'/>
                <Bhk num='04'/>
            </div>
            <div className="thirdLine">
                <Bhk num='05'/>
                <Bhk num='06'/>
            </div>
        </div>
    </div>
  )
}

export default Size