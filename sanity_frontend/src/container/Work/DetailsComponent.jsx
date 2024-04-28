import React from 'react'
import { urlFor } from '../../client';

const DetailsComponent = ({ work, onClose }) => {
    console.log(work)
    return (
      <div className="details-modal">
        <span onClick={onClose} className='detailsClose'>&times;</span>
      
      
      <div className='workDetailsContainer'>
        <div className='workrowflex'>
            <div>
        <h2>{work.title}</h2>
        
       
        </div>
        <div className='workImageContainer'>
              <img src={urlFor(work.imgUrl)} alt={work.name} /></div>
        </div>
        <div className='detailscontainerdetail'>
            <div>       <span>    <a href={work.projectLink} target="_blank" rel='noreferrer'>
                Live Link
                </a></span>
                <span>

                <a href={work.codeLink} target="_blank" rel='noreferrer'>
              Github Link
                </a></span></div>
         <div className='projectdet'>
            <div>
            <h4>TechStack :</h4>
            <p>{work?.techstack}</p>
            </div>
            <div>
            <h4>Project Description:</h4>
            <p>{work.description}</p>
            </div>
         </div>
        </div>
      </div>

      </div>
    );
  };
  
export default DetailsComponent