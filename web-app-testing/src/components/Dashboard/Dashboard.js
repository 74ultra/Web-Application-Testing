import React from 'react';
import './Dashboard.scss';

const Dashboard = (props) => {

    return (
        <div className='btn-wrapper'>
            <button className='btn' onClick={props.addBall}>Ball</button>
            <button className='btn' onClick={props.addStrike}>Strike</button>
            <button className='btn' onClick={props.addFoul}>Foul</button>
            <button className='btn' onClick={props.reset}>Hit</button>
            <button className='btn' onClick={props.addOut}>Out</button>
            <button className='btn' onClick={props.clear}>Clear all</button>
        </div>
    )
}

export default Dashboard;