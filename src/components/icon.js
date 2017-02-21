import React from 'react';

const steps = {
  tiny: 1,
  small: 2,
  big: 3
};

export const Heart = ({size = 'small'}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12" height="16" viewBox="0 0 12 16"
    className={`dib v-mid red h${steps[size]} w${steps[size]}`}
    style={{
      fill: 'currentColor'
    }}
  >
    <path fillRule="evenodd" d="M11.2 3c-.52-.63-1.25-.95-2.2-1-.97 0-1.69.42-2.2 1-.51.58-.78.92-.8 1-.02-.08-.28-.42-.8-1-.52-.58-1.17-1-2.2-1-.95.05-1.69.38-2.2 1-.52.61-.78 1.28-.8 2 0 .52.09 1.52.67 2.67C1.25 8.82 3.01 10.61 6 13c2.98-2.39 4.77-4.17 5.34-5.33C11.91 6.51 12 5.5 12 5c-.02-.72-.28-1.39-.8-2.02V3z"/>
  </svg> 
);

export const Home = ({size = 'small'}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16" height="16" viewBox="0 0 16 16"
    className={`dib v-mid h${steps[size]} w${steps[size]}`}
    style={{
      fill: 'currentColor'
    }}
  >
    <path fillRule="evenodd" d="M16 9l-3-3V2h-2v2L8 1 0 9h2l1 5c0 .55.45 1 1 1h8c.55 0 1-.45 1-1l1-5h2zm-4 5H9v-4H7v4H4L2.81 7.69 8 2.5l5.19 5.19L12 14z"/>
  </svg>
);

Heart.propTypes = Home.propTypes = {
  size: React.PropTypes.oneOf(['tiny', 'small', 'big'])
};
