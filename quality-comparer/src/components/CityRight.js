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
            <h1>Right</h1>

            <form onSubmit={handleSubmit}>
                <label>Austin, TX</label>
                <input type='radio' name='rightRadio' value='austin' onChange={handleChange} />

                <label>San Francisco, CA</label>
                <input type='radio' name='rightRadio' value='san-francisco-bay-area' onChange={handleChange} />

                <label>Charleston, SC</label>
                <input type='radio' name='rightRadio' value='charleston' onChange={handleChange} />

                <label>New York, NY</label>
                <input type='radio' name='rightRadio' value='new-york' onChange={handleChange} />

                <label>Portland, OR</label>
                <input type='radio' name='rightRadio' value='portland-or' onChange={handleChange} />
            <button onClick={() => props.getRightCityData(rightState.value)}>getCityData</button>
            </form>


            <h4>{props.right.right.data.full_name && props.right.right.data.full_name}</h4>
            <p>{props.right.right.scores.summary && props.right.right.scores.summary}</p>
            <h2>{props.right.right.scores.teleport_city_score && props.right.right.scores.teleport_city_score}</h2>
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
