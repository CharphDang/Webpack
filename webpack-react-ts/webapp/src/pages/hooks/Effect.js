import React, { useEffect, useState } from 'react';

function Effect(props) {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');
    useEffect(() => {
        console.log('render');
        document.title = `You clicked ${count} times`;
    }, [count]);

    // 依赖性为空数组的时候
    useEffect(() => {
        console.log('只有第一次初始化的时候更新一次');
    }, []);
    return (
        <div>
            {count}
            {count === 0 && <Timer />}
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                click
            </button>
            <input
                type="text"
                value={text}
                onChange={e => {
                    setText(e.target.value);
                }}
            />
        </div>
    );
}

function Timer() {
    useEffect(() => {
        const timer = setInterval(() => {
            console.log('这里是一个interval 定时器');
        }, 1000);
        // 返回值， 清除副作用使用。 相当于willUnMount lifecycle
        return () => {
            window.clearInterval(timer);
        };
    });
    return <div>timer</div>;
}
export default Effect;
