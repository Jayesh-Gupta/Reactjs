import React,{useState} from 'react';
import ReactFooter from './ReactFooter';

function ReactContact(){

    const[data,setData]=useState({
        email:"",
        name:"",
        phone:"",
        message:"",

    })
    const  inputEvent=(event)=>{
        const {name,value}=event.target;
        setData((preval)=>{
            return(
                {...preval,
                [name]:value,
                }
            )
        })


    }

    const submitData=(e)=>{
        e.preventDefault();
        alert(`My name is ${data.name} my email is ${data.email} my phone is ${data.phone} my message is ${data.message}`)

    }
    return(
<>
<div className="my-5">
    <h1 className="text-center">Contact Us</h1>
</div>
<div className="container-fluid">
    <div className="row">
        <div className=" col-md-6 col-10 mx-auto">

        <form onSubmit={submitData}>
  <div className="form-group">
    <label htmlFor="exampleFormControlInput1">Email address</label>
    <input
     type="email" 
     className="form-control" 
     id="exampleFormControlInput1" 
     placeholder="name@example.com"
     name="email"
     value={data.email}
     onChange={inputEvent}
     required
     />
  </div>

  <div className="form-group">
    <label htmlFor="exampleFormControlInput1">Full Name</label>
    <input
     type="text" 
     className="form-control" 
     id="exampleFormControlInput1" 
     placeholder="Enter your Name"
     name="name"
     value={data.name}
     onChange={inputEvent}
     required
     />
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlInput1">Phone</label>
    <input
     type="number" 
     className="form-control" 
     id="exampleFormControlInput1" 
     placeholder="mobile number"
     name="phone"
     value={data.phone}
     onChange={inputEvent}   
      required
     />
  </div>
 
  <div className="form-group">
    <label htmlFor="exampleFormControlTextarea1">Message</label>
    <textarea 
    className="form-control" 
    id="exampleFormControlTextarea1" 
    rows="3"
    name="message"
     value={data.message}
     onChange={inputEvent}   
    ></textarea>
  </div>
  <div className="col-12 my-2">
  <button className="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
</form>

        </div>
    </div>
</div>
<ReactFooter/>
</>
    );

}

export default ReactContact;