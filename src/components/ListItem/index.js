import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Button from '../Button';

import Popup from '../Popup';

import { getAppliedFilterByName } from '../../utils/helpers';

function ListItem(props) {
  const { isActive, activeFilter, name, handleClick } = props;
  const [selected, setSelected] = useState(false);
  const [isApplied, setIsApplied] = useState(false);
  const [appliedItemsCount, setAppliedItemsCount] = useState(0);
  const appliedFilters = useSelector(state => state.filters.appliedFilters);

  const checkIfApplied = (key) => {
    let amIApplied = getAppliedFilterByName(appliedFilters, key);
    setAppliedItemsCount(amIApplied.length);
    return amIApplied.length;
  }

  useEffect(() => {
    setSelected(isActive);
    setIsApplied(checkIfApplied(name));
  }, [isActive, isApplied, name]); // eslint-disable-line react-hooks/exhaustive-deps

  const hidePopup = () => {
    handleClick();
  }

  let className = selected || isApplied ? 'selected' : '';
  let text = isApplied ? name + "(" + appliedItemsCount + ")" : name;

  return (
    <li className={className}>
      <Button key={name + "-btn"} className="Filter-Btn" text={text} onClick={e => {
        handleClick();
      }} />
      { selected &&
        <Popup activeFilter={activeFilter} showExtraFilter={false} hidePopup={hidePopup} />}
    </li>
  );
}

export default ListItem;