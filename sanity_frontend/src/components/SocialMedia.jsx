import React from 'react'
import {BsLinkedin,BsInstagram} from 'react-icons/bs';

import {SiLeetcode,SiCodechef} from 'react-icons/si';

import {AiFillGithub} from 'react-icons/ai';

import {FaFacebookF} from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div title='Linkedin Profile'>
            <BsLinkedin/>
            
        </div>
        <div>
            <AiFillGithub/>
            
        </div>
        <div>
            <SiCodechef/>
            
        </div>

        <div title='Instagram Profile'>
          <a href='https://www.instagram.com/utsav_m_29/' >  <BsInstagram/></a>
          

        </div>
        <div>
            <SiLeetcode/>

        </div>
    </div>
  )
}

export default SocialMedia