import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Introduce.scss';

const Introduce = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedWork, setSelectedWork] = useState(null);

  useEffect(() => {
    const query = '*[_type=="works"]';
    client.fetch(query)
      .then((data) => {
        setWorks(data);
        setFilterWork(data);
      });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);
    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  const handleCardClick = (work) => {
    setSelectedWork(work);
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
  };

  return (
    <div className='work__container'>
  <h2 className="head-text"> Let Me   <span style={{ color: '#6c757d' }}>Introduce</span> My Self<br /> </h2>
<p className='p_textIntroduce'>Hey there! I'm <span className='colorA'>Utsav Mandhani</span>, a passionate <span  className='colorA'>tech enthusiast</span> and <span  className='colorA'>innovator</span>. With a knack for crafting <span className='colorA'>intuitive web experiences</span>, designing sleek <span className='colorA'>Android apps</span>, and exploring cutting-edge technologies, I thrive on <span className='colorA'>challenges</span>. My journey is fueled by curiosity and a relentless pursuit of excellence in all <span className='colorA'>endeavors</span>. Let's connect, collaborate, and create something truly <span className='colorA'>extraordinary</span> together!!</p>

    </div>
  );
};



export default Introduce;
