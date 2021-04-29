import React from 'react';

import Logo from '../Logo';
import Filters from '../../containers/Filters';

function Header() {
  return (
    <header className="App-Header">
      <Logo />
      <Filters />
    </header>
  )
}

export default Header;