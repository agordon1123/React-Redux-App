import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getRightCityData } from '../actions';

const CityRight = (props) => {
    console.log(props)
    const [rightState, setRightState] = useState({ value: '' })
    console.log(rightState)
    
    const handleChange = e => {
        setRightState({ value: e.target.value })
    }

    const handleSubmit = e => {
        console.log(rightState.value, e)
        e.preventDefault();
    }

    return (
        <div className='city cityRight'>
            {/* <h1>City 2</h1> */}
            <img className='city-logo' src="https://img.icons8.com/ios-filled/50/000000/city-buildings.png"></img>
            <h2>City 2</h2>

            <form className='form' onSubmit={handleSubmit}>
                <span className='input'>
                    <label>Austin, TX</label>
                    <input className='radio' type='radio' name='rightRadio' value='austin' onChange={handleChange} />
                </span>

                <span className='input'>
                    <label>San Francisco, CA</label>
                    <input className='radio' type='radio' name='rightRadio' value='san-francisco-bay-area' onChange={handleChange} />
                </span>

                <span className='input'>
                    <label>Charleston, SC</label>
                    <input className='radio' type='radio' name='rightRadio' value='charleston' onChange={handleChange} />
                </span>

                <span className='input'>
                    <label>New York, NY</label>
                    <input className='radio' type='radio' name='rightRadio' value='new-york' onChange={handleChange} />
                </span>

                <span className='input'>
                    <label>Portland, OR</label>
                    <input className='radio' type='radio' name='rightRadio' value='portland-or' onChange={handleChange} />
                </span>

                <button className='button' onClick={() => props.getRightCityData(rightState.value)}>getCityData</button>
            </form>

            <div className='card'>
                <h2>{props.right.right.data.full_name && props.right.right.data.full_name}</h2>
                <p>{props.right.right.scores.summary && props.right.right.scores.summary}</p>
                <h2>{props.right.right.scores.teleport_city_score && props.right.right.scores.teleport_city_score}</h2>
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

export default connect(mapStateToProps, {getRightCityData})(CityRight);
