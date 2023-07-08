import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/userCard/userCard.scss';

const UserCard = ({props, changeStats}) => {

    const [elemColor, setElement] = useState("Daily");

    const changeText = (time) => {
        setElement(time);
        changeStats(time);
    }

    const normalStyle = {
        color: "hsl(246, 80%, 60%)",
        fontWeight: "300",
    }

    const selectedStyle = {
        color: "hsl(236, 100%, 87%)",
        fontWeight: "400",
    }



    return (
        <div id="user-card">
            <div id="card-upper-section">
                <img src={props.photo} alt="user-icon" id="user-icon"></img>
                <h1 id="user-report">Report for <span id="user-name">{props.name}</span></h1>
            </div>
            <div id="card-lower-section">
                <p id="daily" onClick={() => changeText("Daily")} style={ elemColor === "Daily" ? selectedStyle : normalStyle }>Daily</p>
                <p id="weekly" onClick={() => changeText("Weekly")} style={ elemColor === "Weekly" ? selectedStyle : normalStyle }>Weekly</p>
                <p id="monthly" onClick={() => changeText("Monthly")} style={ elemColor === "Monthly" ? selectedStyle : normalStyle }>Monthly</p>
            </div>
        </div>
    );
};


UserCard.propTypes = {
    props: PropTypes.object.isRequired,
    changeStats: PropTypes.func.isRequired
};


export default UserCard;
