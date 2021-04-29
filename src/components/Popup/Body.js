import React from 'react';

import Button from '../Button';

function Body(props) {
  const { data, selectedFilters, changeSelectedFilters } = props;

  const updateSelectedFilters = item => {
    let temp = [...selectedFilters];
    let index = temp.indexOf(item.id);
    if (index === -1) temp.push(item.id);
    else {
      temp.splice(index, 1);
    }
    changeSelectedFilters(temp);
  };

  return (
    <div className="Popup-Body">
      {data.map((item, index) => {
        return <Button key={index}
          text={item.title}
          className={selectedFilters.indexOf(item.id) >= 0 ? 'selected' : ""}
          onClick={e => {
            updateSelectedFilters(item);
          }} />
      })}
    </div>
  );
}

export default Body;