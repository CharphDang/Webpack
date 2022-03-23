import React, { memo, useCallback, useState } from 'react';

function Child(props) {
    const { clickFun } = props;
    console.log('render child');
    return (
        <div>
            <button
                onClick={() => {
                    clickFun();
                }}
            >
                点击运行props传下来的事件
            </button>
        </div>
    );
}

// 相当于purComponent，props对进行浅比较，不变话就不更新组件。
const MemoChild = memo(Child);

function Callback(props) {
    const [text, setText] = useState('');
    const [count, setCount] = useState(0);
    const add = () => {
        setCount(count + 1);
    };
    const clickFun = useCallback(() => {
        console.log('clickFun');
        return count + 5;
    }, [count]);

    return (
        <div>
            {count}
            <MemoChild clickFun={clickFun} />

            <button
                onClick={() => {
                    add();
                }}
            >
                改变count
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

export default Callback;
