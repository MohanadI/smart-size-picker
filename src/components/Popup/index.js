import React from 'react';

import './Popup.css';

import Mini from './Mini';
import Accordion from '../Accordion';

function Popup(props) {
  const { activeFilter, hidePopup, showExtraFilter } = props;

  const popupTest =
    !showExtraFilter ?
      <Mini
        data={activeFilter.data}
        filterKey={activeFilter.key}
        hidePopup={() => hidePopup()} /> : <div></div>;

  const data = showExtraFilter ? <Accordion data={activeFilter} /> : popupTest;

  return (
    <div>
      { data}
    </div >
  );
}

export default Popup;