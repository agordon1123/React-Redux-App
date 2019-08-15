import React from 'react';

const CityLeft = (props) => {
    console.log(props)
    return (
        <div className='city cityLeft'>
            <h1>Left</h1>

            <select name='rightList'>
                <option value='4671654'>Austin, TX</option>
                <option value='5391959'>San Francisco, CA</option>
                <option value='4574324'>Charleston, SC</option>
                <option value='5128581'>New York, NY</option>
                <option value='5746545'>Portland, OR</option>
            </select>

            <p>{props.props.props.city.summary && props.props.props.city.summary}</p>
            <h2>{props.props.props.city.teleport_city_score && props.props.props.city.teleport_city_score}</h2>
        </div>
    )
}

export default CityLeft;
