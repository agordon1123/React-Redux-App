import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';

const Metrics = props => {
    console.log(props);
    const [tab, setTab] = useState('scores');

    // Reset tab to scores when a new city is chosen
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

                <button onClick={() => {
                    setTab('scores');
                    props.getCityScores(props.city._links['ua:scores'].href);
                }}>Scores</button>

                <button onClick={() => {
                    setTab('details');
                    props.getCityDetails(props.city._links['ua:details'].href);
                }}>Details</button>

                <button onClick={() => {
                    setTab('salaries');
                    props.getCitySalaries(props.city._links['ua:salaries'].href);
                }}>Salaries</button>

                <button onClick={() => {
                    setTab('images');
                    props.getCityImages(props.city._links['ua:images'].href)
                }}>Images</button>

                {
                    tab === 'scores' ?
                    // <p>Scores</p> 
                    props.scores.length && props.scores.map(el => {
                        console.log(el);
                        return (
                            <>
                                <p>{el.name}</p>
                            </>
                        )
                    })
                    :
                    tab === 'details' ?
                    // <p>Details</p>
                    props.details.length && props.details.map(el => {
                        return (
                            <>
                                <p>{el.label}</p>
                                {
                                    el.data.map(e => {
                                        if (e.type === "float") {
                                            return (
                                                <>
                                                    <p>{e.label}</p>
                                                    <p>Float: {e.float_value}</p>
                                                </>
                                            )
                                        } else if (e.type === "int") {
                                            return (
                                                <>
                                                    <p>{e.label}</p>
                                                    <p>Int: {e.int_value}</p>
                                                </>
                                            )
                                        }
                                    })
                                }
                            </>
                        )
                    })
                    :
                    tab ==='salaries' ?
                    // <p>Salaries</p> 
                    props.salaries.length && props.salaries.map(el => {
                        return (
                            <>
                                <p>{el.job.title}</p> 
                                <p>25th percentile{el.salary_percentiles.percentile_25}</p>
                                <p>50th percentile{el.salary_percentiles.percentile_50}</p>
                                <p>75th percentile{el.salary_percentiles.percentile_75}</p>
                            </>
                        )
                    })
                    :
                    tab ==='images' ?
                    // <p>Images</p>
                    props.images.length && props.images.map(el => {
                        return <img src={el.image.web}></img>
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
