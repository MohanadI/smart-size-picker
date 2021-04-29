import React from 'react';
import { useDispatch } from 'react-redux';

import Button from '../../components/Button';

import { removeItem } from "../../redux/actions";

function Item(props) {
  const { parent, name } = props;
  const dispatch = useDispatch();

  const onRemove = () => {
    let data = {
      parent: parent,
      item: name
    }
    dispatch(removeItem(data));
  }

  return (
    <Button className="btn" text={props.name} withRemoveBtn={true} onRemove={() => onRemove()} />
  );
}

export default Item;