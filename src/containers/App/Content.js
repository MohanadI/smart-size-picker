import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearAll } from "../../redux/actions";
import Button from '../../components/Button';

import Paragraph from '../../components/Paragraph';
import SubFilter from '../Filters/SubFilter';

function Content() {
  const appliedFiltersObj = useSelector(state => state.filters.appliedFilters);
  const [appliedFilters, setAppliedFilters] = useState([]);
  const dispatch = useDispatch();

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
      { appliedFilters.length > 0 &&
        <div className="Applied-Filters">
          <Button text="Clear All" className="btn" withRemoveBtn={true}
            onRemove={() => {
              let payload = {};
              dispatch(clearAll(payload));
            }} />
        </div>
      }
    </div>
  );
}

export default Content;