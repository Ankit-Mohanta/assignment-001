import React from 'react'
import './Status.scss'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

const Status = () => {
  return (
    <div className='Status'>
        <div className="Arrows">
            <div className='upArrow'><MdKeyboardArrowUp className='arrow'/></div>
            <div className='downArrow'><MdKeyboardArrowDown className='arrow'/></div>
        </div>
        <div className="Words">
            <span>SEMI</span>
            <span>FURNISHED</span>
        </div>
    </div>
  )
}

export default Status