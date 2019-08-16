import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getLeftCityData } from '../actions'

const CityLeft = (props) => {
    console.log(props)
    const [leftState, setLeftState] = useState({ value: '' })
    console.log(leftState)

    const handleChange = e => {
        setLeftState({ value: e.target.value })
    }

    const handleSubmit = e => {
        console.log(leftState.value, e)
        e.preventDefault();
    }

    return (
        <div className='city cityLeft'>
            {/* <h1>City 1</h1> */}
            <img className='city-logo' src="https://img.icons8.com/ios-filled/50/000000/city-buildings.png"></img>
            <h2>City 1</h2>

            <form className='form' onSubmit={handleSubmit}>
                <span className='input'>
                    <label>Austin, TX</label>
                    <input className='radio' type='radio' name='leftRadio' value='austin' onChange={handleChange} />
                </span>

                <span className='input'>
                    <label>San Francisco, CA</label>
                    <input className='radio' type='radio' name='leftRadio' value='san-francisco-bay-area' onChange={handleChange} />
                </span>

                <span className='input'>
                    <label>Charleston, SC</label>
                    <input className='radio' type='radio' name='leftRadio' value='charleston' onChange={handleChange} />
                </span>

                <span className='input'>
                    <label>New York, NY</label>
                    <input className='radio' type='radio' name='leftRadio' value='new-york' onChange={handleChange} />
                </span>

                <span className='input'>
                    <label>Portland, OR</label>
                    <input className='radio' type='radio' name='leftRadio' value='portland-or' onChange={handleChange} />
                </span>

                <button className='button' onClick={() => props.getLeftCityData(leftState.value)}>getCityData</button>
            </form>

            <div className='card'>
                <h2>{props.left.left.data.full_name && props.left.left.data.full_name}</h2>
                <p>{props.left.left.scores.summary && props.left.left.scores.summary}</p>
                <h2>{props.left.left.scores.teleport_city_score && props.left.left.scores.teleport_city_score}</h2>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        left: state.left,
        right: state.right,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(mapStateToProps, { getLeftCityData })(CityLeft);
