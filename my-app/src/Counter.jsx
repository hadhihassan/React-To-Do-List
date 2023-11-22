import React, { useState, useEffect } from 'react';

const Counter = (props) => {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0); // Add this line to initialize count1

    useEffect(() => {
        console.log('mounting.....');
        console.log('mounting.....', { count });
        console.log('mounting.....', { count1 });
    }, [count, count1]);

    return (
        <div>
            <h1>hai hadhi</h1>
            <button onClick={() => setCount(count + 1)}>++</button>
            <h1>values : {count}</h1>
            <button onClick={() => setCount1(count1 + 1)}>++</button>
            <h1>values : {count1}</h1>
        </div>
    );
};

export default Counter;
