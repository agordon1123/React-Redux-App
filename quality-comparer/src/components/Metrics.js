import React, { useState, useEffect } from 'react';
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts';
import ScoreBar from './ScoreBar';
import MapBox from './MapBox';

const Metrics = props => {
    const [tab, setTab] = useState('scores');
    const [details, setDetails] = useState(false);
    const [desired, setDesired] = useState('');
    // Business Freedom
    console.log(desired);
    console.log(details);

    // Reset tab content to scores when a new city is chosen
    useEffect(() => {
        setTab('scores');
        // setDesired('Business Freedom');
        if(props.city._links) {
            props.getCityScores(props.city._links['ua:scores'].href);
        }
    }, [props.city]);

    if (props.city.full_name) {
        return (
            <div className='dashboard-metrics'>
                <h1>{props.city.full_name}</h1>
                <div className='metrics-button-container'>
                    <button 
                        className='metrics-button'
                        style={tab === 'scores' ? {border: '2px solid #4098F4'} : {border: '2px solid grey'}}
                        onClick={() => {
                            setTab('scores');
                            props.getCityScores(props.city._links['ua:scores'].href);
                        }}
                    >Scores</button>

                    <button 
                        className='metrics-button'
                        style={tab === 'details' ? {border: '2px solid #4098F4'} : {border: '2px solid grey'}}
                        onClick={() => {
                            setTab('details');
                            props.getCityDetails(props.city._links['ua:details'].href);
                        }}
                    >Details</button>

                    <button 
                        className='metrics-button'
                        style={tab === 'salaries' ? {border: '2px solid #4098F4'} : {border: '2px solid grey'}}
                        onClick={() => {
                            setTab('salaries');
                            props.getCitySalaries(props.city._links['ua:salaries'].href);
                        }}
                    >Salaries</button>

                    <button 
                        className='metrics-button'
                        style={tab === 'images' ? {border: '2px solid #4098F4'} : {border: '2px solid grey'}}
                        onClick={() => {
                            setTab('images');
                            props.getCityImages(props.city._links['ua:images'].href)
                        }}
                    >Images</button>

                    <button
                        className='metrics-button'
                        style={tab ==='maps' ? {border: '2px solid #4098F4'} : {border: '2px solid grey'}}
                        onClick={() => setTab('maps')}
                    
                    >Map</button>
                </div>

                {
                    tab === 'scores' ?
                    <>
                        <h3 className='overall-score'>Overall Score: {Math.round(props.scores.teleport_city_score)}/100</h3>
                        {/* Replace Element tags sent back with data from API with empty string */}
                        <p className='summary'>{props.scores.summary && props.scores.summary.replace(/<p>|<b>|<\/b>|<\/p>/gi, '')}</p>
                        <div className='metrics-scores-container'>
                            {props.scores.categories && props.scores.categories.map(el => {
                                // If score is 4 or greater: filler color green
                                if(el.score_out_of_10 > 4) {
                                    return (
                                        <div className='metrics-score'>
                                            <ScoreBar score={el.score_out_of_10} />
                                            <p>{Math.round(el.score_out_of_10)}/10</p>
                                            <p>{el.name}</p>
                                        </div>
                                    )
                                // Else, filler color red
                                } else {
                                    return (
                                        <div className='metrics-score'>
                                            <ScoreBar score={el.score_out_of_10} red={'#f45840'} />
                                            <p>{Math.round(el.score_out_of_10)}/10</p>
                                            <p>{el.name}</p>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </>
                    :
                    tab === 'details' ?
                    props.details.length && props.details.map(el => {
                        return (
                            <div className='dashboard-details'>
                                <div 
                                    className='dashboard-details-header-container'
                                    onClick={() => {
                                        setDetails(!details);
                                        setDesired(el.label);
                                    }}
                                >
                                    <h3>{el.label}</h3>
                                    <p>{el.label === desired && details === true ? '▼' : '►'}</p>
                                </div>
                                {
                                    el.data.map(e => {
                                        if (e.type === "float" && desired === el.label) {
                                            return (
                                                <div style={details === true ? {display: 'flex'} : {display: 'none'}} className='detail-value-container'>
                                                    {
                                                        // Remove Teleport scores (duplicates)
                                                        e.label.includes('[Teleport score]') ? null : <><p>{e.label}:</p> <p>{parseFloat(e.float_value).toFixed(2)}</p></>
                                                    }
                                                </div>
                                            )
                                        } else if (e.type === "int" && desired === el.label) {
                                            return (
                                                <div style={details === true ? {display: 'flex'} : {display: 'none'}} className='detail-value-container'>
                                                    <p>{e.label}</p>
                                                    <p>{e.int_value}</p>
                                                </div>
                                            )
                                        } else if (e.type === "string" && desired === el.label) {
                                            return (
                                                <div style={details === true ? {display: 'flex'} : {display: 'none'}} className='detail-value-container'>
                                                    <p>{e.label}</p>
                                                    <p>{e.string_value}</p>
                                                </div>
                                            )
                                        } else if (e.type === "currency_dollar" && desired === el.label) {
                                            return (
                                                <div style={details === true ? {display: 'flex'} : {display: 'none'}} className='detail-value-container'>
                                                    <p>{e.label}</p>
                                                    <p>${e.currency_dollar_value}</p>
                                                </div>
                                            )
                                        }
                                    })
                                }
                            </div>
                        )
                    })
                    :
                    tab ==='salaries' ?
                    <div className='chart-container'>
                        <LineChart height={450} width={2000}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                            data={
                                props.salaries.length && props.salaries.map(el => {
                                    return {
                                        name: el.job.title,
                                        ["25th Percentile"]: el.salary_percentiles.percentile_25,
                                        ["50th Percentile"]: el.salary_percentiles.percentile_50,
                                        ["75th Percentile"]: el.salary_percentiles.percentile_75
                                    }}
                                )
                            }>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="25th Percentile" stroke="#4098f4" />
                            <Line type="monotone" dataKey="50th Percentile" stroke="#6d40f4" />
                            <Line type="monotone" dataKey="75th Percentile" stroke="#40f49d" />
                        </LineChart>
                    </div>
                    :
                    tab ==='images' ?
                    props.images.length && props.images.map(el => {
                        return <img className='city-image' src={el.image.web}></img>
                    })
                    :
                    tab === 'maps' ?
                        <MapBox props={props.city.bounding_box.latlon} />
                    : null
                }
            </div>
        );
    } else {
        return (
            <div className='dashboard-metrics landing'>
                <p>Select a city to get started</p>
            </div>
        );
    };
};

export default Metrics;
