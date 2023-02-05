import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom';
import homepage from '../images/homepage.png';
import './HomeComp.css';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
const HomeComp = () => {
  return (
     <div className='container-fluid py-5'>
        <div className='row py-5'>
        <div className='col-md-8'>
          <img src = {homepage} className='main-logo'/>
        </div>
        <div className=' col-md-4 mt-5'>
        <div className='container-13 mt-5'>
        <div className='mt-5'>
           <p className='e1 lead'>
            <h1 className='e3 main-heading'>Lorem Ipsum has been the industry's</h1>
                <h4 className='e4 mt-5 py-1'>been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting,
                It has survived not only five centuries, but also the leap into electronic typesetting,
                eMaker including versions of Lorem Ipsum.
                </h4>
              </p>
              <button className='fs-4 loadModulesButton text-light' >Enter<NavLink to = "/HomeComp2"><TrendingFlatIcon/></NavLink></button> 
              </div>
            </div>
        </div>
        </div>
     </div>
    // <div className='container-10'>
    //     <div className='container-11 d-flex'>
    //         <div className='container-12'>
    //         </div>
      
    //     </div>
      
    // </div>
  )
}


export default HomeComp
