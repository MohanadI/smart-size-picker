import React from 'react';
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/actions";

import Button from '../Button';

function Footer(props) {
  const { selectedFilters, changeSelectedFilters, activeFilter, hidePopup } = props;
  const dispatch = useDispatch();

  return (
    <div className="Popup-Footer">
      {selectedFilters.length > 0 &&
        <Button className="Cancel-Btn"
          text="Cancel"
          onClick={e => changeSelectedFilters([])} />
      }
      <Button className="Apply-Btn" text="Apply" onClick={() => {
        let payload = {
          name: activeFilter,
          items: selectedFilters
        };
        dispatch(setFilter(payload));
        hidePopup();
      }} />
    </div>
  );
}

export default Footer;