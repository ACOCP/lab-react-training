import React, { useState } from 'react';

const ClickablePicture = ({ img, imgClicked }) => {
  const [currentImg, setCurrentImg] = useState(img);
  const toggleImage = () => {
    setCurrentImg((prevImg) => (prevImg === img ? imgClicked : img));
  };

  return (
    <div style={{ textAlign: 'center' }}> {}
      <h1>Clickable Picture</h1>
      <img
        src={currentImg}
        alt="Toggleable"
        onClick={toggleImage}
        style={{ cursor: 'pointer', width: '100%', maxWidth: '300px' }}
      />
    </div>
  );
};

const ClickablePicturePage = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <ClickablePicture 
        img="maxence.png"
        imgClicked="maxence-glasses.png"
      />
    </div>
  );
};

export default ClickablePicturePage;
