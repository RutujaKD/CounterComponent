import { useEffect, useState } from 'react';
import './Counter.css';

export default function Counter() {
    const [counter, setCounter] = useState('');

    var maxCounterValue = 1000;

    useEffect(() => {
        if (!counter) {
            setCounter(1);
        }
    }, [])

    const handleIncrement = () => {
        if (maxCounterValue && counter < maxCounterValue) {
            setCounter(counter + 1);
        }
        else {
            if (counter < 15) {
                setCounter(counter + 1);
            }
        }
    }

    const handleDecrement = () => {
        if (counter >= 1) {
            setCounter(counter - 1);
        }
    }

    const handleChange = (e) => {
        console.log('event', parseInt(e.target.value), e.target.value < 15);
        if (e.target.value <= maxCounterValue) {
            setCounter(parseInt(e.target.value));
        }
    }

    return (
        <div className="container">
            <div onClick={() => handleDecrement()} className="left-box"> - </div>
            <input type="number" className="middle-box" onChange={(e) => handleChange(e)} value={counter}></input>
            <div onClick={() => handleIncrement()} className="right-box"> + </div>
        </div>
    )
}