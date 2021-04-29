import React from 'react';

function Button(props) {
  const { className, text, withRemoveBtn, onClick, onRemove } = props;
  let btn = <button className={className} onClick={onClick}>
    {text}
  </button>;
  if (withRemoveBtn) {
    btn = <button className={className}>
      {text}
      {withRemoveBtn && <span className="remove" onClick={() => onRemove()}>x</span>}
    </button>;
  }
  return (
    <>
      {btn}
    </>
  );
}

export default Button;