import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getRightCityData } from '../actions';
import { cityData } from '../data/cities';
import { rightChartData } from './functions/rightChartData';
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
        dataSource: rightChartData(props),
    }
};

const CityRight = (props) => {
    console.log(props)
    const [rightState, setRightState] = useState({ value: '' })

    const handleChange = e => {
        setRightState({ value: e.target.value })
    }

    const handleSubmit = e => {
        console.log(rightState.value, e)
        e.preventDefault();
    }

    return (
        <div className='city cityRight'>
            <img className='city-logo' src="https://img.icons8.com/ios-filled/50/000000/city-buildings.png"></img>
            <h2 className='city-indicator'>City 2</h2>

            <form className='form' onSubmit={handleSubmit}>
                <select className='select' onChange={handleChange}>
                    {cityData.map(city => {
                        return <City city={city} />
                    })}
                </select>

                <button className='button' onClick={() => props.getRightCityData(rightState.value.replace(/\s+/g, '-').replace(/,/g, '').replace(/\./g, '').toLowerCase())}>Submit</button>
            </form>

            {props.right.right.data && props.right.right.scores &&
                <div className='card'>
                    <h2 className='city-name'>{props.right.right.data.full_name}</h2>
                    <h2 className='city-score'>{Math.round(props.right.right.scores.teleport_city_score)} / 100</h2>
                    <ReactFC className='graph' {...chartConfigs(props)} />
                    <p>{props.right.right.scores.summary.replace(/<p>|<b>|<\/b>|<\/p>/gi, '')}</p>
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

export default connect(mapStateToProps, { getRightCityData })(CityRight);
