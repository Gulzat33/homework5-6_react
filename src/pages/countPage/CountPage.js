import React, { useState } from 'react';
import Button from '../../components/button/Button';


const CountPage = () => {
    const [ count, setCount ] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        if (count > 0) setCount(count - 1);
    };

    return (
        <div>
            <p>COunt: {count}</p>
            <Button title={'increment'} action={increment}/>
            <Button title={'decrement'} action={decrement}/>
        </div>
    );
};

export default CountPage;