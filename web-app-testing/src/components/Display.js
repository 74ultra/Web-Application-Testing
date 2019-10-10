import React from 'react';

const Display = (props) => {

    return (
        <div>
            <div className='at-bat'>
                <h3>Ball</h3>
                <h3>{props.balls}</h3>
            </div>
            <div className='at-bat'>
                <h3>Strike</h3>
                <h3>{props.strikes}</h3>
            </div>
            <div className='at-bat'>
                <h3>Out</h3>
                <h3>{props.outs}</h3>
            </div>
            
        </div>
    )
}

export default Display;