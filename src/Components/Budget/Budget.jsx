import React from 'react'
import './Budget.scss'

const Budget = () => {
  return (
    <div className='Budget'>
        <div className="up">
            <div className="heading">
                <span>MY BUDGET</span>
                <hr />
            </div>
        </div>
        <div className="buttom">
            <div className="left">
                <div>FROM</div>
                <div>1000</div>
            </div>
            <div className="middle">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="right">
                <div>TO</div>
                <div>1,00,000</div>
            </div>
        </div>
    </div>
  )
}

export default Budget