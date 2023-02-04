import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeIcon from '@mui/icons-material/Home';
import './HomeComp2.css';
import Button from '@mui/material/Button';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { NavLink } from 'react-router-dom';
const HomeComp2 = () => {
  return (
    <div className='container-15'>
        <div className='container-16 d-flex'>
            <div className='container-17'>
            </div>
            <div className='container-18'>
           <NavLink to="/"><HomeIcon/></NavLink> 
             <div className='container-19'>
             <Button variant="text"><NavLink to="/ModTab">Module One</NavLink></Button>
             <Button variant="text"><NavLink to="/ModTab2">Module Two</NavLink></Button>
             <Button variant="text"><NavLink to="/ModTab3">Module Three</NavLink></Button>
             <Button variant="text"><NavLink to="ModTab4">Module Four</NavLink></Button>
             <Button variant="text"><NavLink to="/ModTab5">Module Five</NavLink></Button>
               </div>
              <Button variant="contained">Select<TrendingFlatIcon/></Button>
            </div>
        </div>
      
    </div>
  )
}

export default HomeComp2
