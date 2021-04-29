import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Paragraph from '../../components/Paragraph';
import SubFilter from '../Filters/SubFilter';

function Content() {
  const appliedFiltersObj = useSelector(state => state.filters.appliedFilters);
  const [appliedFilters, setAppliedFilters] = useState([]);

  useEffect(() => {
    setAppliedFilters(appliedFiltersObj);
  }, [appliedFiltersObj]);
  const listOfAppliedFilters =
    appliedFilters.length > 0 ?
      appliedFilters.map((filter, index) => {
        return <SubFilter key={index} filter={filter} />
      })
      : <Paragraph text="- none -" className="float-left" />;

  return (
    <div className="App-Content">
      <Paragraph text={"Applied Filters:"} className="float-left" />
      {listOfAppliedFilters}
    </div>
  );
}

export default Content;