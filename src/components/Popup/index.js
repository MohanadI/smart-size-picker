import React from 'react';

import './Popup.css';

import SubPopup from './SubPopup';
import Accordion from '../Accordion';

function Popup(props) {
  const { activeFilter, hidePopup, showExtraFilter } = props;

  const popup =
    !showExtraFilter && activeFilter.data ?
      <SubPopup
        data={activeFilter.data}
        filterKey={activeFilter.key}
        hidePopup={() => hidePopup()} /> : <div></div>;

  const data = showExtraFilter ? <Accordion data={activeFilter} /> : popup;

  return (
    <div>
      { data}
    </div >
  );
}

export default Popup;