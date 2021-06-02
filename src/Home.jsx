import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../src/images/technical.jpg'
import Common from './Common'
const Home=()=>{
return(
    
   <Common name="Grow your business with" name2="Team Coders" visit="/Services" btnname="Get Started" imgsrc={web}/>


)
};

export default Home;