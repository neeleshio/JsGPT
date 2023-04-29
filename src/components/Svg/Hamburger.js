import React from 'react';

const Hamburger = ({ stroke }) => (
    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M1 11H15M1 6H15M1 1H15"
            stroke={stroke}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>
);

export default Hamburger;
