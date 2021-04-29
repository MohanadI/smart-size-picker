import React from 'react';


function Paragraph(props) {
  const { className, text } = props;
  return (
    <p className={className}>{text}</p>
  )
}

export default Paragraph;