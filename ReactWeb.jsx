import React from 'react';
import Home from './ReactHome'
import About from './ReactAbout'
import Services from './ReactServices'
import Contact from './ReactContact'
import Navbar from './ReactNavbar'
import {Switch,Route,Redirect } from 'react-router-dom'

function ReactWeb(){

    return(
        <>
        <Navbar />
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact  path="/about" component={About}></Route>
            <Route exact  path="/services" component={Services}></Route>
            <Route exact  path="/contact" component={Contact}></Route>
            <Redirect to="/"/>
        </Switch>
        
        </>
    );

}

export default ReactWeb;