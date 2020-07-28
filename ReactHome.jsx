import React from 'react';
import home from "../img/home.jpg"
import ReactComp from './ReactComp'
import ReactFooter from './ReactFooter';


function ReactHome(){

    return(
        <>
       <ReactComp 
       name="Grow Your Buisness With"
       detail=""
       visit="/about"
       btnname="Get Started"
       imgsrc={home}
       alt="home image"
       />
       <ReactFooter/>
        </>
    );

}

export default ReactHome;