import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeIcon from '@mui/icons-material/Home';
import Img1 from '../images/Img-15.jpg';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';
import { NavLink } from 'react-router-dom';

const SearchComp = () => {
  return (
    <div className='container-3'>
      <div className='container-5'>
      <NavLink to="/HomeComp2"><IconButton aria-label="home">
      <HomeIcon color='primary' fontSize='large'/>
      </IconButton></NavLink>
      <p className='p1' color='white'>Type here to search<br/><br/>
      Ut hendrerit<hr/>showing 5 results...</p>
         <div className='container-4 '>
        <div className='container-6 d-flex'>
        <img  className="C-2 "
               src={Img1} alt=""/>
               <p className=' e lead'><h5 className='text'>Lorem ipsum dolor</h5>
               <hr/>
                sit amet consectetur adipisicing elit.
                    Cupiditate, earum praesentium ab quos sapiente ullam
                    eveniet corporis vero nesciunt, minus iure facere possimus laudantium atque ea!
                     Temporibus doloremque vel facere.
            </p>
            
          </div>
          <div className='container-7 d-flex'>
        <img  className="C-2 "
               src={Img1} alt=""/>
               <p className=' e lead'><h5 className='text'>Lorem ipsum dolor</h5>
               <hr/>
                sit amet consectetur adipisicing elit.
                    Cupiditate, earum praesentium ab quos sapiente ullam
                    eveniet corporis vero nesciunt, minus iure facere possimus laudantium atque ea!
                     Temporibus doloremque vel facere.
            </p>
            
          </div>
          <div className='container-8 d-flex'>
        <img  className="C-2 "
               src={Img1} alt=""/>
               <p className=' e lead'><h5 className='text'>Lorem ipsum dolor</h5>
               <hr/>
                sit amet consectetur adipisicing elit.
                    Cupiditate, earum praesentium ab quos sapiente ullam
                    eveniet corporis vero nesciunt, minus iure facere possimus laudantium atque ea!
                     Temporibus doloremque vel facere.
            </p>
            
          </div> 
          <div className='container-9 d-flex'>
          < ChevronLeftIcon ></ChevronLeftIcon>
          <ChevronRightIcon></ChevronRightIcon>
           </div>
         </div>
      </div>
         

      
    </div>
  )
}

export default SearchComp
