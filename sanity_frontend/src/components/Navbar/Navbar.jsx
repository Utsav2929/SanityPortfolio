import React, { useEffect, useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import './Navbar.scss';
import { client } from '../../client';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [resumeUrl, setResumeUrl] = useState('');

  useEffect(() => {
    const fetchResumeUrl = async () => {
      try {
        const query = '*[_type=="resume"][0].pdf.asset->url'; // Query to fetch the URL of the resume PDF
        const response = await client.fetch(query);
        setResumeUrl(response);
      } catch (error) {
        console.error('Error fetching resume URL:', error);
      }
    };

    fetchResumeUrl();
  }, []);

  const openPDF = () => {
    if (resumeUrl) {
      window.open(resumeUrl, '_blank'); // Open the resume PDF in a new tab
    } else {
      console.error('Resume URL not found');
    }
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">Utsav Mandhani</div>
      <ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills', 'contact', 'resume'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`} onClick={item === 'resume' ? openPDF : null}>
              {item}
            </a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div whileInView={{ x: [300, 0] }} transition={{ duration: 0.85, ease: 'easeOut' }}>
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'skills', 'contact', 'work', 'resume'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
