import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar=()=>{
    return(
        <div className="container-fluid nav-bg">
        <div className='row'>
        <div className="col-10 mx-auto">

        
     
        <nav className="navbar navbar-expand-lg navbar-light bg-primary ">
  <a className="navbar-brand text-white" href="#">JK Services</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink className="nav-link text-white" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>

      <li className="nav-item active">
        <NavLink className="nav-link text-white" to="/about">About </NavLink>
      </li>

      <li className="nav-item active">
        <NavLink className="nav-link text-white" to="/contact">Contact <span className="sr-only">(current)</span></NavLink>
      </li>

      <li className="nav-item active">
        <NavLink className="nav-link text-white" to="/services">Services <span className="sr-only">(current)</span></NavLink>
      </li>
     </ul>
    
  </div>
</nav>

</div>
        </div>
        </div>


    )
}

export default Navbar;