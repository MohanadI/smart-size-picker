import React, { useState, useEffect } from 'react';

import './Filters.css';

import List from '../../components/List';
import { useWindowSize } from '../../utils/useWindowSize';
import { getJsonFile, isEmptyObject } from '../../utils/helpers';

function Filters() {
  const [data, setData] = useState({});
  const size = useWindowSize();
  const isMobile = size.width <= 768;

  useEffect(() => {
    getJsonFile('data.json').then(response => setData(response));
  }, []);

  return (
    <div>
      {
        !isEmptyObject(data) &&
        <List items={data} isMobile={isMobile} />
      }
    </div>
  );
}

export default Filters;