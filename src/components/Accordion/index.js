import React, { useState } from 'react';
import Button from '../Button';
import Header from '../Popup/Header';
import SubPopup from '../Popup/SubPopup';

import './Accordion.css';

function Accordion(props) {
  const { data } = props;
  const [current, setCurrent] = useState('');

  const dataToShow = Object.keys(data).map(function (key) {
    return <div key={key} className="Accordion-item">
      <h3>
        {key}
        {current === key ?
          <Button text="-" onClick={() => setCurrent('')} /> :
          <Button text="+" onClick={() => setCurrent(key)} />}
      </h3>
      {current === key && <SubPopup key={key}
        data={data[key]}
        filterKey={key}
        className='Accordion-popup'
        hidePopup={() => setCurrent('')}
      />}
    </div>
  });
  return (
    <div className="Filter-Popup">
      <Header />
      {dataToShow}
    </div>
  );
}

export default Accordion;