import React, { useState, useEffect, useRef } from 'react'

export default function Toggle() {

    const [count, setCount] = useState(0);

    useEffect(() => {

        console.log('useEffect entered');

        return () => {
            console.log('useEffect return called');
        }
    }, [count]);

    return (
        <div className="toggle">
            <div className="display">{count}</div>
            <div className="controls">
                <button onClick={() => {setCount(c => c + 1)}} className="start-button">Start</button>
            </div>
        </div>
    );
}
