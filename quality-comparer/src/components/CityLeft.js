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

            <h4>{props.props.props.left.data.full_name && props.props.props.left.data.full_name}</h4>
            <p>{props.props.props.left.scores.summary && props.props.props.left.scores.summary}</p>
            <h2>{props.props.props.left.scores.teleport_city_score && props.props.props.left.scores.teleport_city_score}</h2>
        </div>
    )
}

export default CityLeft;
