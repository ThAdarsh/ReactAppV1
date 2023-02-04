import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom'
import './HomeComp.css';
import Button from '@mui/material/Button';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
const HomeComp = () => {
  return (
    <div className='container-10'>
        <div className='container-11 d-flex'>
            <div className='container-12'>
            </div>
            <div className='container-13'>
             <div className='container-14'> <p className='e1 lead'>
            <h1 className='e3'>Lorem Ipsum has<br/>been the industry's</h1><br/>
                <h4 className='e4'>been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting,
                 remaining essentially unchanged. It was popularised in the 1960s with the release of
                  Letraset sheets containing Lorem Ipsum passages,
               and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h4>
              </p></div>
             <Button variant="contained">Enter<NavLink to = "/HomeComp2"><TrendingFlatIcon/></NavLink></Button> 
            </div>
        </div>
      
    </div>
  )
}

export default HomeComp
