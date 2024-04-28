import React from 'react';

import { urlFor, client } from '../../client';

const CertificateModal = ({ certificateUrl, onClose }) => {
  return (
    <div className="certificate-modal">
      <div className="certificate-modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <img src={urlFor(certificateUrl)} alt="Certificate" />
      </div>
    </div>
  );
};

export default CertificateModal;
