import React from 'react'
import { useState } from "react";
import Img1 from '../images/Img-8.jpg';
import Img2 from '../images/Img-9.jpg';
import Img3 from '../images/img-10.jpg';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

const ModTab3 = () => {
    const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className='container'>
    <div className='container-2'>
      <div className='header'>
      <h1>Module Three <NavLink to="/SearchComp">< SearchIcon fontSize='xxl-large'/></NavLink><NavLink to="/HomeComp2"><HomeIcon color='disabled' fontSize='large' /></NavLink></h1>
      
      </div>
      <div className="container-1">
    <div className="bloc-tabs">
      <button
        className={toggleState === 1 ? "tabs active-tabs fs-2 text-primary" : "tabs"}
        onClick={() => toggleTab(1)}
      >
        Tab 1
      </button>
      <button
        className={toggleState === 2 ? "tabs active-tabs fs-2 text-primary" : "tabs"}
        onClick={() => toggleTab(2)}
      >
        Tab 2
      </button>
      <button
        className={toggleState === 3 ? "tabs active-tabs fs-2 text-primary" : "tabs"}
        onClick={() => toggleTab(3)}
      >
        Tab 3
      </button>
    </div>

    <div className="content-tabs">
      <div className= {toggleState === 1 ? "content  active-content d-sm-flex align-items-center justify-content-between p-5" : "content"} >
             <img  className="C-3 img-fluid w-50 d-none d-sm-block"
             src={Img1} alt=""/>
                <div className='C-1'>
                   <h3 className='h3'>Use a native font stack</h3>
                 <p className='lead'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, earum praesentium ab quos sapiente ullam
                  eveniet corporis vero nesciunt, minus iure facere possimus laudantium atque ea! Temporibus doloremque vel facere.</p>
             </div>
            
      </div>

      <div className= {toggleState === 2 ? "content  active-content d-sm-flex align-items-center justify-content-between p-5" : "content"} >
             <img  className="C-3 img-fluid w-50 d-none d-sm-block"
             src={Img2} alt=""/>
                <div className='C-1'>
                   <h3 className='h3'>LAMP</h3>
                 <p className='lead'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, earum praesentium ab quos sapiente ullam
                  eveniet corporis vero nesciunt, minus iure facere possimus laudantium atque ea! Temporibus doloremque vel facere.</p>
             </div>
            
      </div>

      <div className= {toggleState === 3 ? "content  active-content d-sm-flex align-items-center justify-content-between p-5" : "content"} >
             <img  className="C-3 img-fluid w-50 d-none d-sm-block"
             src={Img3} alt=""/>
                <div className='C-1'>
                   <h3 className='h3'>TEACH</h3>
                 <p className='lead'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, earum praesentium ab quos sapiente ullam
                  eveniet corporis vero nesciunt, minus iure facere possimus laudantium atque ea! Temporibus doloremque vel facere.</p>
               </div>
            
      </div>
    </div>
  </div>
    </div>


    
  
  </div>
    
    
    
  )
}

export default ModTab3
