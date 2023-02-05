import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeIcon from '@mui/icons-material/Home';
import './HomeComp2.css';
import homepage from '../images/homepage.png';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { NavLink } from 'react-router-dom';
const HomeComp2 = () => {
  return (
    <div className='container-fluid py-5'>
    <div className='row py-5'>
    <div className='col-md-8'>
      <img src = {homepage} className='main-logo'/>
    </div>
    <div className=' col-md-4 mt-5'>
            <NavLink className='homeIcon' to="/"><HomeIcon/></NavLink> 
    <div className='container-13 mt-5'>
       <div className='mt-5 modules-buttons'>
       <div className='mt-5'></div>
             <button ><NavLink className='module-btn' to="/ModTab">Module One</NavLink></button>
             <hr/>
             <button ><NavLink className='module-btn' to="/ModTab2">Module Two</NavLink></button>
             <hr/>
             <button ><NavLink className='module-btn' to="/ModTab3">Module Three</NavLink></button>
             <hr/>
             <button ><NavLink className='module-btn' to="ModTab4">Module Four</NavLink></button>
             <hr/>
             <button ><NavLink className='module-btn' to="/ModTab5">Module Five</NavLink></button>
             <div className='mt-5'></div>
             <button className='fs-4 loadModulesButton text-light mt-5' >Select Module<NavLink to = "/HomeComp2"><TrendingFlatIcon/></NavLink></button>
          </div>
        </div>
    </div>
    </div>
 </div>
    // <div className='container-15'>
    //     <div className='container-16 d-flex'>
    //         <div className='container-17'>
    //         </div>
    //         <div className='container-18'>
    //        <NavLink to="/"><HomeIcon/></NavLink> 
    //          <div className='container-19'>
            
    //            </div>
    //           <button variant="contained">Select<TrendingFlatIcon/></button>
    //         </div>
    //     </div>
      
    // </div>
  )
}

export default HomeComp2
