import React from 'react';

const CityListCard = props => {
    return (
        <div 
            className='city-list-card'
            style={props.selected === props.city.name ? {borderTop: '2px solid blue', borderBottom: '2px solid blue', backgroundColor: 'gray'} : null}
            onClick={() => {
                props.getCityMetrics(props.city.href);
                props.setSelected(props.city.name);
            }}>
                <p>{props.city.name}</p>
        </div>
    );
};

export default CityListCard;
