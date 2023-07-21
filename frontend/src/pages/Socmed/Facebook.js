import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const Facebook = () => {
  const facebookPageURL = 'https://www.facebook.com/BESTVRTM/';

  return (
    <div className="card">
      <div className="card-header bg-primary text-white">
        <FontAwesomeIcon icon={faFacebook} /> Facebook
      </div>
      <div className="card-body">
        <iframe
          src={`https://www.facebook.com/plugins/page.php?href=${facebookPageURL}&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`}
          width="500"
          height="600"
          style={{ border: 'none', overflow: 'hidden' }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
};

export default Facebook;
