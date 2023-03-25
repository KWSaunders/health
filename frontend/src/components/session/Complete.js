import React from 'react';
import SessionService from '../../services/session.service';

export default function Complete({ update }) {

    // increment workoutId
    // force re-render for Workout component

    // render a Button component from material UI

    // on click, call SessionService.complete()

    const handleClick = () => {
        SessionService.complete().then(
            response => {
                update();
                console.log(response.data);
                alert(response.data);
            }
        );
        // force a refresh or re-render on Session Component (Parent)
    };



    return (
        <div>
            <h1>Session Complete</h1>
            <p>Great job! You've completed your workout.</p>
            <p>Click the button below to save your session.</p>
            <button onClick={handleClick}>Complete Session</button>
        </div>
    );
}