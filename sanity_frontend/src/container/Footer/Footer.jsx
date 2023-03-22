import React,{useState,useEffect} from 'react'

import{images} from '../../constants';
import {motion, useAnimation} from 'framer-motion';
import {AppWrap, MotionWrap} from '../../wrapper';
import {urlFor,client} from '../../client';
import './Footer.scss';

const Footer = () => {

const [formdata, setFormData] = useState({name:'',email:'',message:''});
const [isFormSubmitted, setisFormSubmitted] = useState(false);
const [loading, setLoading] = useState(false);

const {name,email,message}=formdata;
const handleChangeInput=(e)=>{
  const {name,value}=e.target;
  setFormData({...formdata,[name]:value});
}

const handleSubmit=()=>{
  setLoading(true);

  const contact={
    _type:'contact',
    name:name,
    email:email,
    message:message,
  }

  client.create(contact).then(()=>{
    setLoading(false);
    setisFormSubmitted(true);
  })
}



  return (
    <>
    <h2 className='head-text'>Take a coffee & chat with me</h2>
    <div className='app__footer-cards'>
      <div className='app__footer-card'>
        <img src={images.email} alt="email"/>
        <a href="mailto:utsav2929@gmail.com" className='p-text'>utsav2929@gmail.com</a>
      </div>
      <div className='app__footer-card'>
        <img src={images.mobile} alt="mobile"/>
        <a href="tel:+91 6264320685" className='p-text'>+91 626420685</a>
      </div>
    </div>

{!isFormSubmitted?
    <div className='app__footer-form app__flex'>
      <div className='app__flex'>
        <input className='p-text' type="text" placeholder='Your Name' name ="name" value={name} onChange={handleChangeInput}/>
      
      </div>
      <div className='app__flex'>
      <input className='p-text' type="email" placeholder='Your Email' name ="email" value={email} onChange={handleChangeInput}/>

      </div>
      <div>
        <textarea className='p-text' placeholder='Your Message' name='message' value={message} onChange={handleChangeInput}/>
      </div>
    <button type='button' className='p-text' onClick={handleSubmit}>{loading?'Sending':'Send Message'}</button>
    </div>:<div><h3 className='head-text'>thank you for getting in touch </h3></div>}
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer,'app__footer'),'contact','app_whitebg'
)