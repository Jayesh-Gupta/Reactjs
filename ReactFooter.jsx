import React from 'react'

function ReactFooter(){
    const year=new Date().getFullYear();
    return(
        <>
        <footer className="bg-light">
            <p> copyright © {year} </p>

        </footer>
        </>
    )


}

export default ReactFooter;