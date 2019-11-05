import React from 'react';
import Filler from './Filler';

const ScoreBar = ({ props }) => {
    console.log(props);
    return (
        <div className='score-bar'>
            <Filler props={props} />
        </div>
    );
};

export default ScoreBar;
