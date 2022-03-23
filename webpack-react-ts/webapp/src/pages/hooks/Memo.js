import React, { useMemo, useState } from 'react';

function Memo(props) {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');
    // useMemo的参数有两个， 第一个是函数，会自执行得出一个结果并返回给变量， 第二个是其依赖项，只有当依赖项发生变化的时候，才会重新运行计算函数。
    let result = useMemo(() => {
        console.log('hello ，这里是计算逻辑，会返回一个结果值');
        return count + 10;
    }, [count]);
    return (
        <div>
            {count}
            <p>result: {result}</p>
            <button
                onClick={() => {
                    setCount(count + 5);
                }}
            >
                ++++++++
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

export default Memo;
