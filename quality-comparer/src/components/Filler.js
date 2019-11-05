import React from 'react';

const Filler = ({ props }) => {
    console.log(Math.round(props * 10));
    return (
        <div className='filler' style={{ width: `${Math.round(props * 10)}%` }} />
    );
};

export default Filler;
