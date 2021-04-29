import React from 'react';

import Item from './Item';

function SubFilter(props) {
  const { filter } = props;

  const itemsArea = filter.items.map((item, index) => <Item key={index} name={item} parent={filter.name} />);
  return (
    <div className="Applied-Filters">
      {itemsArea}
    </div>
  )
}

export default SubFilter;