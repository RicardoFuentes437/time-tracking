import React from 'react';
import PropTypes from 'prop-types';
import '../styles/userCard/userCard.scss';

const UserCard = ({props}) => {
    return (
        <div id="user-card">
            <div id="card-upper-section">
                <img src={props.photo} alt="user-icon" id="user-icon"></img>
                <h1 id="user-report">Report for <span id="user-name">{props.name}</span></h1>
            </div>
            <div id="card-lower-section">
                <p id="daily">Daily</p>
                <p id="weekly">Weekly</p>
                <p id="monthly">Monthly</p>
            </div>
        </div>
    );
};


UserCard.propTypes = {
    props: PropTypes.object.isRequired
};


export default UserCard;
