import React from 'react';

function SvgIcon(props) {
  const { name, className } = props;
  return (
    <svg className={`icon svg-icon ${className}`} aria-hidden='true'>
      <use xlinkHref={`#icon-${name}`} />
    </svg>
  );
}

export default SvgIcon;
