import React from 'react';
import ReactComp from './ReactComp'
import about1 from '../img/about2.jpg'
import ReactFooter from './ReactFooter';

function ReactAbout(){

    return(
        <>
          <ReactComp 
       name="Learn More About"
       detail="we deal with the core designing and devlopment of the web page we also deal with backend and many other resources "
       visit="/contact"
       btnname="Contact Us"
       imgsrc={about1}
       alt="about image"
       />
       <ReactFooter/>
        </>
    );

}

export default ReactAbout;