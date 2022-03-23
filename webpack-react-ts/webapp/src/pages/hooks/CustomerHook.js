import React, { useEffect, useState } from 'react';

function Timer() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(timer);
    }, [time]);
    return <p>{time}</p>;
}

function useClock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(timer);
    }, [time]);
    return time;
}
function CustomerHook(props) {
    const time = useClock();
    return (
        <div>
            <div>
                复用组件的使用
                <Timer />
            </div>
            <p style={{ color: 'blue' }}>自定义hook的使用{time}</p>
        </div>
    );
}

export default CustomerHook;
