import './App.scss'
import Navbar from './Components/Navbar/Navbar'
import { ImLocation } from 'react-icons/im'
import { AiOutlineDown } from 'react-icons/ai'
import { BiCurrentLocation } from 'react-icons/bi'
import { FcEmptyFilter } from 'react-icons/fc'
import Search from './Components/Search/Search'
import { useState } from 'react'
import { Backdrop, Paper } from '@mui/material'
import Card from './Components/Card/Card'

function App() {

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='App'>
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="container">
        <div className="intro">
          <div className="firstline">
            <span>YOUR</span>
            <span>DREAM</span>
            <ImLocation/>
          </div>
          <div className="secondline">
          <span>RENTAL</span>
            <span>AWAITS</span>
          </div>
        </div>
        <div className="search">
          <div className="residential">
            <span>Residental</span>
            <AiOutlineDown/>
          </div>
          <input type="text" className='LocationSearch' placeholder='Search your rental location' onClick={handleOpen}/>
          <div className="location">
            <BiCurrentLocation/>
          </div>
          <div className="filter">
            <FcEmptyFilter/>
          </div>
          <button onClick={handleOpen}>SEARCH</button>
        </div>
        <div className="Filter">
          <button onClick={handleOpen}>PROPERTY SIZE</button>
          <button onClick={handleOpen}>BUDGET</button>
          <button onClick={handleOpen}>FURNISHED</button>
          <button onClick={handleOpen}>PROPERTY TYPE</button>
        </div>
      </div>
      <Backdrop
      open={open}
      onClick={handleClose}>
        <Paper
        elevation={3}
        sx={{background:'transparent'}}
        className='paper'
        onClick={(event) => event.stopPropagation()}>
          <Search/>
          <Card/>
        </Paper>
      </Backdrop>
    </div>
  )
}

export default App
