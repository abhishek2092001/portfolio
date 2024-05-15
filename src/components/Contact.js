import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
const Contact = () => {
 
  const[formdata, setform]=useState({
    name:"",
    email:"",
    textarea:""
  })

    const handleinput=(e)=>{
     var nam=e.target.name;
     var value=e.target.value;
     setform({...formdata,[nam]:value});
    }
    
  
    const getdata=(e)=>{
        e.preventDefault();
    axios.post('https://project-ec10e-default-rtdb.firebaseio.com/userdata.json',{formdata}).then((response)=>{console.log(response);
    toast("Details sent");}).catch(err=>console.log("error occured",err));
    }

  return (
      <>
    <div className='Contact'>
        <h1>
            CONTACT ME
        </h1>
        <form className="contact-box">
            <input className='area' type="text" name="name" value={formdata.name} onChange={handleinput} placeholder='Enter your name' />
            <input className='area' type="email" name="email" value={formdata.email} onChange={handleinput} id="" placeholder='Enter your Email' />
            <textarea className='area text-area' name="textarea" value={formdata.textarea} onChange={handleinput} id="" cols="30" rows="10" placeholder='Enter your message'></textarea>
            <button className='submit-but' onClick={getdata}>submit</button>
        </form>
    </div>
        <ToastContainer />
      </>
  )
}

export default Contact
