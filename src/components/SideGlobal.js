import React from 'react';
import { useNavigate } from 'react-router-dom';

function SideGlobal() {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/crypto');
  };

  return (
    <div>
      <div className='side-global'>
        Cryptonite
      </div>
      <p className='sidepara'>
        Cryptonite is a secure and user-friendly cryptocurrency wallet and exchange platform.
        It offers robust features for managing digital assets and facilitating seamless transactions.
      </p>
      <button className='get-started-button' onClick={handleGetStartedClick}>
        Get started
      </button>
    </div>
  );
}

export default SideGlobal;
