import React from 'react'
import {BsLinkedin,BsInstagram} from 'react-icons/bs';

import {SiLeetcode} from 'react-icons/si';

import {AiFillGithub} from 'react-icons/ai';


const SocialMedia = () => {
  return (
    <div className="app__social">
        <div title='Linkedin Profile'>
            <a href='https://www.linkedin.com/in/utsav-mandhani-0a9356222/' target="_blank" rel='noreferrer'><BsLinkedin/></a>
            
        </div>
        <div title='Github Profile'>
           <a href='https://github.com/Utsav2929' target="_blank" rel='noreferrer'> <AiFillGithub/></a>
            
        </div>
      

        <div title='Instagram Profile'>
          <a href='https://www.instagram.com/utsav_m_29/' >  <BsInstagram/></a>
          

        </div>
        <div title='Leetcode Profile'>
        <a href='https://leetcode.com/utsav2929/' target="_blank" rel='noreferrer'> <SiLeetcode/></a>

        </div>
    </div>
  )
}

export default SocialMedia