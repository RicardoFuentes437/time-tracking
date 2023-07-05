import React, { useState } from 'react';
import TimeCard from './TimeCard';
import UserCard from './UserCard';
import * as data from '../variables';

const CardsContainer = () => {

    const [work, setWork] = useState(data.workDaily);
    const [play, setPlay] = useState(data.playDaily);
    const [study, setStudy] = useState(data.studyDaily);
    const [exercise, setExercise] = useState(data.exerciseDaily);
    const [social, setSocial] = useState(data.socialDaily);
    const [selfCare, setSelfCare] = useState(data.selfCareDaily);

    const changeStats = (stats) =>{
        console.log(stats);
        if(stats === "Daily"){
            setWork(data.workDaily);
            setPlay(data.playDaily);
            setStudy(data.studyDaily);
            setExercise(data.exerciseDaily);
            setSocial(data.socialDaily);
            setSelfCare(data.selfCareDaily);
        }else if(stats === "Weekly"){
            setWork(data.workWeekly);
            setPlay(data.playWeekly);
            setStudy(data.studyWeekly);
            setExercise(data.exerciseWeekly);
            setSocial(data.socialWeekly);
            setSelfCare(data.selfCareWeekly);
        }else{
            setWork(data.workMonthly);
            setPlay(data.playMonthly);
            setStudy(data.studyMonthly);
            setExercise(data.exerciseMonthly);
            setSocial(data.socialMonthly);
            setSelfCare(data.selfCareMonthly);
        }
    }

    return (
        <div id="cards-container">
            <div id="user-card-container">
                <UserCard props={data.user} changeStats={changeStats}></UserCard>
            </div>
            <div id='time-cards-container'>
                <TimeCard props={work} id="card-1"></TimeCard>
                <TimeCard props={play} id="card-2"></TimeCard>
                <TimeCard props={study} id="card-3"></TimeCard>
                <TimeCard props={exercise} id="card-4"></TimeCard>
                <TimeCard props={social} id="card-5"></TimeCard>
                <TimeCard props={selfCare} id="card-6"></TimeCard>
            </div>
        </div>
    );
}

export default CardsContainer;
