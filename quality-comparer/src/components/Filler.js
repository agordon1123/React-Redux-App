import React from 'react';

const Filler = props => {
    return (
        <div className='filler' style={props.red === undefined ? { width: `${Math.round(props.score * 10)}%` } : { width: `${Math.round(props.score * 10)}%`, backgroundColor: `${props.red}` }} />
    );
};

export default Filler;
