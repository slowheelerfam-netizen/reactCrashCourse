import React from 'react';

function Counter({ count, onIncrement, onDecrement }) {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>{count}</h1>
            <button onClick={onDecrement}>-</button>
            <button onClick={onIncrement}>+</button>
        </div>
    );
}

export default Counter;