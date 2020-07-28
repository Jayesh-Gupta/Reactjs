import React from 'react';
import ReactCompCard from './ReactCompCard';
import Sdata from "./ReactSdata"
import ReactFooter from './ReactFooter';
function ReactServices() {

    return (
        <>
            <div className="my-2">
                <h1 className="text-center">Our Services</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                    <div className='row gy-2'>
                        {
                            Sdata.map((curval,index)=>{
                                return(
                                <ReactCompCard 
                                key={index}
                                imgsrc={curval.imgsrc}
                                alt={curval.alt}
                                card_title={curval.card_title}
                                card_text={curval.card_text}
                                visit={curval.visit}
                                />);
                            })
                      
                       }
                       </div>
                        </div>
                    </div>
                </div>
                <ReactFooter/>
        </>
    );

}

export default ReactServices;