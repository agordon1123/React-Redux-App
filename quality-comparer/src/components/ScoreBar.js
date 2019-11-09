import React from 'react';
import Filler from './Filler';

const ScoreBar = props => {
    return (
        <div className='score-bar'>
            <Filler score={props.score} red={props.red} />
        </div>
    );
};

export default ScoreBar;
