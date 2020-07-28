import React from 'react'

function ReactCompCard(props) {

    return (
        <>
            
                <div className="col-md-4 col-10 mx-auto">
                    <div className="card" >
                        <img src={props.imgsrc} className="card-img-top img-fluid" alt={props.alt} style={{height:"200px"}}  />
                        <div className="card-body " >
                          <h5 className="card-title">{props.card_title}</h5>
                            <p className="card-text">{props.card_text}.</p>
                               <a href={props.visit} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Start Learning</a>
                        </div>
                    </div>
                </div>


           
        </>
    )

}

export default ReactCompCard;