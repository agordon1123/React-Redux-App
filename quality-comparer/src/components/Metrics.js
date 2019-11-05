import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts';
import ScoreBar from './ScoreBar';

const Metrics = props => {
    console.log(props);
    const [tab, setTab] = useState('scores');
    const [details, setDetails] = useState(false);
    const [desired, setDesired] = useState('Business Freedom');
    console.log(desired);

    // Reset tab content to scores when a new city is chosen
    useEffect(() => {
        setTab('scores');
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
                        style={tab === 'scores' ? {border: '2px solid blue'} : {border: '2px solid grey'}}
                        onClick={() => {
                            setTab('scores');
                            props.getCityScores(props.city._links['ua:scores'].href);
                        }}
                    >Scores</button>

                    <button 
                        className='metrics-button'
                        style={tab === 'details' ? {border: '2px solid blue'} : {border: '2px solid grey'}}
                        onClick={() => {
                            setTab('details');
                            props.getCityDetails(props.city._links['ua:details'].href);
                        }}
                    >Details</button>

                    <button 
                        className='metrics-button'
                        style={tab === 'salaries' ? {border: '2px solid blue'} : {border: '2px solid grey'}}
                        onClick={() => {
                            setTab('salaries');
                            props.getCitySalaries(props.city._links['ua:salaries'].href);
                        }}
                    >Salaries</button>

                    <button 
                        className='metrics-button'
                        style={tab === 'images' ? {border: '2px solid blue'} : {border: '2px solid grey'}}
                        onClick={() => {
                            setTab('images');
                            props.getCityImages(props.city._links['ua:images'].href)
                        }}
                    >Images</button>
                </div>

                {
                    tab === 'scores' ?
                    <>
                        <h3 className='overall-score'>Overall Score: {Math.round(props.scores.teleport_city_score)}/100</h3>
                        {/* Replace Element tags sent back with data from API */}
                        <p className='summary'>{props.scores.summary && props.scores.summary.replace(/<p>|<b>|<\/b>|<\/p>/gi, '')}</p>
                        <div className='metrics-scores-container'>
                            {props.scores.categories && props.scores.categories.map(el => {
                                console.log(el);
                                return (
                                    <div className='metrics-score'>
                                        <ScoreBar props={el.score_out_of_10} />
                                        <p>{Math.round(el.score_out_of_10)}/10</p>
                                        <p>{el.name}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </>
                    :
                    tab === 'details' ?
                    // <p>Details</p>
                    props.details.length && props.details.map(el => {
                        return (
                            <>
                                <h3 onClick={() => {
                                    setDetails(!details);
                                    setDesired(el.label);
                                }}>{el.label}</h3>
                                {
                                    el.data.map(e => {
                                        if (e.type === "float" && desired === el.label) {
                                            return (
                                                <div style={details === false ? {display: 'flex'} : {display: 'none'}} className='detail-value-container'>
                                                    <p>{e.label}</p>
                                                    <p>Float: {e.float_value}</p>
                                                </div>
                                            )
                                        } else if (e.type === "int" && desired === el.label) {
                                            return (
                                                <div style={details === false ? {display: 'flex'} : {display: 'none'}} className='detail-value-container'>
                                                    <p>{e.label}</p>
                                                    <p>Int: {e.int_value}</p>
                                                </div>
                                            )
                                        } else if (e.type === "string" && desired === el.label) {
                                            return (
                                                <div style={details === false ? {display: 'flex'} : {display: 'none'}} className='detail-value-container'>
                                                    <p>{e.label}</p>
                                                    <p>String: {e.string_value}</p>
                                                </div>
                                            )
                                        } else if (e.type === "currency_dollar" && desired === el.label) {
                                            return (
                                                <div style={details === false ? {display: 'flex'} : {display: 'none'}} className='detail-value-container'>
                                                    <p>{e.label}</p>
                                                    <p>DV: ${e.currency_dollar_value}</p>
                                                </div>
                                            )
                                        }
                                    })
                                }
                            </>
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
                            <Line type="monotone" dataKey="25th Percentile" stroke="#82ca9d" />
                            <Line type="monotone" dataKey="50th Percentile" stroke="#8884d8" />
                            <Line type="monotone" dataKey="75th Percentile" stroke="red" />
                        </LineChart>
                    </div>
                    :
                    tab ==='images' ?
                    // <p>Images</p>
                    props.images.length && props.images.map(el => {
                        return <img className='city-image' src={el.image.web}></img>
                    })
                    : null
                }
            </div>
        );
    } else {
        return (
            <div className='dashboard-metrics'>
                <p>Select a city to get started</p>
            </div>
        );
    };
};

export default Metrics;
