import React from 'react';

import arrowUp from '../../images/upload.png';

function Header() {
  return (
    <div>
      <img src={arrowUp} className="Arrow-Up" alt="logo" />
    </div>
  );
}

export default Header;