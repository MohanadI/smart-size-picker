import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getAppliedFilterByName } from '../../utils/helpers';

import Body from './Body';
import Footer from './Footer';
import Header from './Header';

function SubPopup(props) {
  const { data, filterKey, hidePopup, className } = props;
  const appliedFilters = useSelector(state => state.filters.appliedFilters);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const handleChange = data => {
    setSelectedFilters(data);
  }

  useEffect(() => {
    setSelectedFilters(getAppliedFilterByName(appliedFilters, filterKey));
    // return function cleanup() { }
  }, [filterKey, appliedFilters]);

  return (
    <div className={className ? className : "Filter-Popup"}>
      <Header />
      {
        data.length ?
          <Body data={data}
            selectedFilters={selectedFilters}
            changeSelectedFilters={handleChange} /> : <div></div>
      }
      <Footer selectedFilters={selectedFilters}
        changeSelectedFilters={handleChange}
        activeFilter={filterKey}
        hidePopup={() => hidePopup()}
      />
    </div >
  );
}

export default SubPopup;