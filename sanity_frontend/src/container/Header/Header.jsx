import React from 'react'
import './Header.scss';
import {motion} from 'framer-motion';
import{images} from '../../constants';
import {AppWrap} from '../../wrapper';
const scaleVariants={
  whileInView:{
    scale:[0,1],
    opacity:[0,1] ,
    transition:{
      duration:1,
      ease:'easeInOut'
    }

  }
}
const Header = () => {
  return (
    <div  className="app__header app__flex">
      <motion.div whileInView = {{x:[-100,0],opacity:[0,1]}}
      transition={{duration:0.5}}
      className="app__header-info">
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span className='wave'>👋🏻</span>
            <div style={{marginLeft:5}}>
              <p className="p-text">Hello I am</p>
              <h1 className="head-text">Utsav Mandhani </h1>
            </div>
          </div>

 
        </div>
      </motion.div>

      <motion.div whileInView = {{opacity:[0,1]}}
      transition={{duration:0.5,delayChildren:0.5}}
      className="app__header-img">
        <img src={images.profile} alt="profile_bg"></img>
   

      </motion.div>


  



       
    </div>
  )
}

export default AppWrap(Header,  'home');