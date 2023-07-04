import React from 'react';
import TimeCard from './TimeCard';
import UserCard from './UserCard';
import * as data from '../variables';

const CardsContainer = () => {

    return (
        <div id="cards-container">
            <div id="user-card-container">
                <UserCard props={data.user}></UserCard>
            </div>
            <div id='time-cards-container'>
                <TimeCard props={data.work} id="card-1"></TimeCard>
                <TimeCard props={data.play} id="card-2"></TimeCard>
                <TimeCard props={data.study} id="card-3"></TimeCard>
                <TimeCard props={data.exercise} id="card-4"></TimeCard>
                <TimeCard props={data.social} id="card-5"></TimeCard>
                <TimeCard props={data.self_care} id="card-6"></TimeCard>
            </div>
        </div>
    );
}

export default CardsContainer;
