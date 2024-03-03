import React from 'react';
import ImageDownload from '../ImageDownload';
import '../../../styles/Session.css'; 

function U8sDefendingSession() {
  return (
    <div>
      <header className="u8s-header">Defending</header>
      <ImageDownload
        imageUrl={process.env.PUBLIC_URL + '/images/u8s-u9s/defending/0.png'}
        imageName="u8s-u9s-defending-warm-up.png"
        imageSize="500px"
      />
      <ImageDownload
        imageUrl={process.env.PUBLIC_URL + '/images/u8s-u9s/defending/1.png'}
        imageName="u8s-u9s-defending-drill-1.png"
        imageSize="500px"
      />
      <ImageDownload
        imageUrl={process.env.PUBLIC_URL + '/images/u8s-u9s/defending/2.png'}
        imageName="u8s-u9s-defending-drill-2.png"
        imageSize="500px"
      />
    </div>
  );
}

export default U8sDefendingSession;