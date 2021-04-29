import React, { useState, useEffect } from 'react';
import ListItem from '../ListItem';

import { checkShowItem, inArray } from '../../utils/helpers';

import './List.css';
import Button from '../Button';
import Popup from '../Popup';

function List(props) {
  const { items, isMobile } = props;
  const [allowedList, setAllowedList] = useState(['all']);
  const [activeFilter, setActiveFilter] = useState({
    key: "",
    data: []
  });
  const [showExtraFilter, setShowExtraFilters] = useState(false);

  useEffect(() => {
    if (isMobile) {
      setAllowedList(["color", "size"]);
    } else {
      setAllowedList(["all"]);
    }
    console.log("updated");
  }, [isMobile]);

  const listItems = Object.keys(items).map(function (key) {
    return checkShowItem(key, allowedList) &&
      <ListItem
        key={key}
        name={key}
        activeFilter={activeFilter}
        isActive={key === activeFilter.key}
        handleClick={() => {
          let filter = {
            key: "",
            data: []
          };
          if (key !== activeFilter.key) {
            filter = {
              key: key,
              data: items[key]
            };
          }
          setActiveFilter(filter);
        }} />;
  });

  let moreFilters = <li><Button className="Filter-Btn" text="More Filters"
    onClick={e => {
      const filteredByKey = Object.fromEntries(
        Object.entries(items).filter(([key, value]) => !inArray(allowedList, key)));

      setActiveFilter(filteredByKey);
      setShowExtraFilters(!showExtraFilter);
    }} /></li>;
  return (
    <div className="App-Filters">
      <ul>
        {listItems}
        {isMobile ? moreFilters : ""}
      </ul>
      { isMobile && showExtraFilter &&
        <Popup activeFilter={activeFilter} showExtraFilter={showExtraFilter} hidePopup={() => { setShowExtraFilters(false) }} />}
    </div>
  )
}

export default List;