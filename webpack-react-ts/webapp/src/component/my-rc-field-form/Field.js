// /*
//  * @Author: Charph Dang
//  * @Description:
//  * @Date: 2021-05-11 14:20:56
//  * @LastEditors: Charph Dang
//  * @LastEditTime: 2021-05-12 14:05:36
//  */
// import React, { useContext, useEffect, useState } from 'react';
// import FieldContext from './FieldContext';

// function Field(props) {
//     const { setFieldsValue, getFieldValue, registerEntities } = useContext(FieldContext);
//     const { name, rules } = props;

//     useEffect(() => {
//         registerEntities(name, this);
//     }, []);

//     return (
//         <div>
//             {React.cloneElement(props.children, {
//                 name,
//                 value: getFieldValue(name) || '',
//                 onChange: e => {
//                     setFieldsValue({ [name]: e.target.value });
//                 }
//             })}
//         </div>
//     );
// }

// export default Field;
import React, { Component } from 'react';
import FieldContext from './FieldContext';

export default class Field extends Component {
    static contextType = FieldContext;

    componentDidMount() {
        this.unregisterEntity = this.context.registerFieldEntities(this);
    }

    componentWillUnmount() {
        this.unregisterEntity();
    }

    onStoreChange = () => {
        this.forceUpdate();
    };

    getCntrolled = () => {
        const { getFieldValue, setFieldsValue } = this.context;
        const { name } = this.props;
        return {
            value: getFieldValue(name), //"omg", // 从formStore当中读取数据
            onChange: e => {
                const newValue = e.target.value;
                // 设置formStore的数据
                setFieldsValue({ [name]: newValue });
            }
        };
    };
    render() {
        const { children } = this.props;
        return React.cloneElement(children, this.getCntrolled());
    }
}
