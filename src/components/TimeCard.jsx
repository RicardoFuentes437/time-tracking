import React from 'react';
import PropTypes from 'prop-types';
import '../styles/timeCard/timeCard.scss';


const TimeCard = ({props, id}) => {
    return (
        <div className='time-card' id={id}>
            <div id="time-card-icon-section">
                <img src={props.icon} alt="card-icon" className='time-card-icon'></img>
            </div>
            <div className='card-content'>
                <div className='time-upper-section'>
                    <p>{props.title}</p>
                    <img src="images/icon-ellipsis.svg" alt="ellipsis-icon" className='ellipsis-icon'></img>
                </div>
                <div className='time-lower-section'>
                    <p className="card-hours">{props.hours}</p>
                    <p className='card-comparison'>{props.comparison}</p>
                </div>
            </div>
        </div>
    );
};


TimeCard.propTypes = {
    props: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired
};


export default TimeCard;
