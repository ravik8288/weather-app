import React from 'react';

function Button(props) {
  const { label, children } = props;
  return <button className='button'>{label || children}</button>;
}

export default Button;
