import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getLeftCityData } from '../actions'
import { cityData } from '../data/cities';
import { leftChartData } from './functions/leftChartData';
import City from './City';
import FusionCharts from 'fusioncharts';
import Widgets from 'fusioncharts/fusioncharts.widgets';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Widgets, FusionTheme);

const chartConfigs = (props) => {
    return {
        type: 'angulargauge',
        width: 240,
        height: 120,
        dataFormat: 'json',
        dataSource: leftChartData(props),
    }
};

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
            <img className='city-logo' src="https://img.icons8.com/ios-filled/50/000000/city-buildings.png"></img>
            <h2 className='city-indicator'>City 1</h2>

            <form className='form' onSubmit={handleSubmit}>
                <select className='select' onChange={handleChange}>
                    {cityData.map(city => {
                        return <City city={city} />
                    })}
                </select>

                <button className='button' onClick={() => props.getLeftCityData(leftState.value.replace(/\s+/g, '-').replace(/,/g, '').toLowerCase())}>getCityData</button>
            </form>

            {props.left.left.data && props.left.left.scores &&
                <div className='card'>
                    <h2>{props.left.left.data.full_name}</h2>
                    <h2>{Math.round(props.left.left.scores.teleport_city_score)} / 100</h2>
                    <ReactFC className='graph' {...chartConfigs(props)} />
                    <p>{props.left.left.scores.summary.replace(/<p>|<b>|<\/b>|<\/p>/gi, '')}</p>
                </div>
            }
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
