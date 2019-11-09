import React from 'react';

const CityListCard = props => {
    return (
        <div 
            className='city-list-card'
            style={props.selected === props.city.name ? { backgroundColor: '#4098F4', color: '#FFFFFF' } : null}
            onClick={() => {
                props.getCityMetrics(props.city.href);
                props.setSelected(props.city.name);
            }}>
                <p>{props.city.name}</p>
        </div>
    );
};

export default CityListCard;
