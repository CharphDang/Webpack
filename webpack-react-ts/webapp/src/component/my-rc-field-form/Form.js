import React from 'react';
import FieldContext from './FieldContext';
import useForm from './useForm';

function Form({ children, form, onFinish, onFinishFailed }, ref) {
    const [formInstance] = useForm(form);
    // 为了class组件的ref服务，暴露方法给组件实例
    React.useImperativeHandle(ref, () => formInstance);
    formInstance.setCallbacks({
        onFinish,
        onFinishFailed
    });
    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                formInstance.submit();
            }}
        >
            <FieldContext.Provider value={formInstance}>{children}</FieldContext.Provider>
        </form>
    );
}

export default Form;
