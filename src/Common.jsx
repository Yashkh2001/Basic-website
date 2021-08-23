import React from 'react';
import { NavLink } from 'react-router-dom';

const Common=(props)=>{
return(
    
    <section id="header" className="d-flex align-items-center">

        <div className="container-fluid nav-bg ">
        <div className='row'>
        <div className="col-10 mx-auto">
        <div className="row"> 
        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column" >
        
        <h1>{props.name}  <strong className="brand-name"> {props.name2}</strong> </h1>
<<<<<<< HEAD
        <h2 className="my-3">Development is not the future</h2>
=======
        <h2 className="my-3">Development is the future</h2>
>>>>>>> babb29310df1c209398b73812b1ebf06712a9dab
        <div className="mt3">
        <NavLink className="btn btn-primary" to={props.visit}>{props.btnname}</NavLink>
        </div>
        </div>

        <div className="col-lg-6 order-1 order-lg-2 header-img ">
        <img src={props.imgsrc} className="img-fluid animated" alt="" />
        
        </div>
        </div>
        
      
        </div>
        </div>
        </div>
          

    </section>



)
};

export default Common;