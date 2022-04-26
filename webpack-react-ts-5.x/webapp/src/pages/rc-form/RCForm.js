import React, { Component } from 'react';
// import { createForm } from 'rc-form';
import createForm from '../../component/my-rc-form';
import Input from './Input';
const nameRules = { required: true, message: '请输入姓名！' };
const passworRules = { required: true, message: '请输入密码！' };

@createForm
class MyRCForm extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.form.setFieldsValue({ username: 'default' });
    }
    submit = () => {
        const { getFieldsValue, validateFields } = this.props.form;
        console.log('submit', getFieldsValue());
        validateFields((err, data) => {
            if (err) {
                console.log(err, '校验失败');
            } else {
                console.log(data, '校验成功');
            }
        });
    };
    render() {
        console.log(this.props, 'props');
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <h3>MyRCForm</h3>
                {getFieldDecorator('username', { rules: [nameRules] })(
                    <Input placeholder="Username" />
                )}
                {getFieldDecorator('password', { rules: [passworRules] })(
                    <Input placeholder="Password" />
                )}
                <button onClick={this.submit}>submit</button>
            </div>
        );
    }
}
export default MyRCForm;
