import React,{useState,useEffect} from 'react';
import './About.scss';
import {motion} from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { urlFor,client } from '../../client';
// const abouts=[
//   { title:'Webdeveloment',description:'I Am Utsav',imgUrl:images.about01},
  
//   { title:'android developent',description:'I Am Utsav',imgUrl:images.about02},
  
//   { title:'competitive programming',description:'I Am Utsav',imgUrl:images.about03},
  
//   { title:'web animation',description:'I Am Utsav',imgUrl:images.about04}
// ];
const About = () => {
  const [abouts,setAbouts]=useState([]);
  useEffect(()=>{
    const query='*[_type=="abouts"]';
    client.fetch(query)
    .then((data)=>{
      setAbouts(data);
    })



  },[])
  return (

    <>
    <h2 className="head-text"> One <span>Destination</span><br/> to show case <span>All my skills</span>
    
    
    </h2>

    <div className="app__profiles">
    {abouts.map((about,index)=>(
      <motion.div
      whileInView={{opacity:1}}
      whileHover={{scale:1.1}}
      transition={{duration:0.5,type:'tween'}}
      className="app__profiles-item"
      key={about.title + index}>
        <img src={urlFor(about.imgUrl)} alt={about.title}/>
        <h2 className="bold-text" style={{marginTop:20}}>{about.title}</h2>
        
        <p  className="p-text" style={{marginTop:10}}>{about.description}</p>


      </motion.div>
    ))}



    </div>
    
    
    </>
  )
}

export default AppWrap(About,'about');