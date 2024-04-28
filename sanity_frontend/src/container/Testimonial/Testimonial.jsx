import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion, useAnimation } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Testimonial.scss';
import CertificateModal from './CertificateModal';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [brands, setBrands] = useState([]);
  const [showCertificateModal, setShowCertificateModal] = useState(false);
  const [certificateUrl, setCertificateUrl] = useState('');

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query).then((data) => {
    console.log(data)
      setTestimonials(data);
    });

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);
  const handleViewCertificate = (certificateUrl) => {
    setCertificateUrl(certificateUrl);
    setShowCertificateModal(true);
  };

  return (
    <>
      <h2 className="head-text">
        Testimonials & <span style={{ color: '#6c757d' }}>Certificates</span>
        <br /> <span></span>
      </h2>

      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={urlFor(testimonials[currentIndex].imgurl)} alt={testimonials[currentIndex].name} />
            <div className="app__testimonial-content">
              <div>
                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                <h5 className="bold-text">{testimonials[currentIndex].company}</h5>

                <p className="p-text">{testimonials[currentIndex].feedback}</p>
                {testimonials[currentIndex].certificateurl && (
                  <button onClick={() => handleViewCertificate(testimonials[currentIndex].certificateurl)} className='viewCertificate'>View Certificate</button>
                )}
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>

            <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
            <p className='p-text2'>{brand.name}</p>
          </motion.div>
        ))}
      </div>

      {showCertificateModal && <CertificateModal certificateUrl={certificateUrl} onClose={() => setShowCertificateModal(false)} />}
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  'app__primarybg',
);
