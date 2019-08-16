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
            <h1>Left</h1>

            <form onSubmit={handleSubmit}>
                <label>Austin, TX</label>
                <input type='radio' name='leftRadio' value='austin' onChange={handleChange} />

                <label>San Francisco, CA</label>
                <input type='radio' name='leftRadio' value='san-francisco-bay-area' onChange={handleChange} />

                <label>Charleston, SC</label>
                <input type='radio' name='leftRadio' value='charleston' onChange={handleChange} />

                <label>New York, NY</label>
                <input type='radio' name='leftRadio' value='new-york' onChange={handleChange} />

                <label>Portland, OR</label>
                <input type='radio' name='leftRadio' value='portland-or' onChange={handleChange} />
            <button onClick={() => props.getLeftCityData(leftState.value)}>getCityData</button>
            </form>


            <h4>{props.left.left.data.full_name && props.left.left.data.full_name}</h4>
            <p>{props.left.left.scores.summary && props.left.left.scores.summary}</p>
            <h2>{props.left.left.scores.teleport_city_score && props.left.left.scores.teleport_city_score}</h2>
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

export default connect(mapStateToProps, {getLeftCityData})(CityLeft);
