import React, { Component, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
const FormItem = Form.Item;
const nameRules = { required: true, message: '请输入姓名！' };
const passworRules = { required: true, message: '请输入密码！' };
export default class AntdFormPage extends Component {
    formRef = React.createRef();
    componentDidMount() {
        this.formRef.current.setFieldsValue({ name: 'default' });
    }
    onReset = () => {
        this.formRef.current.resetFields();
    };
    onFinish = val => {
        console.log('onFinish', val); //sy-log
    };
    onFinishFailed = val => {
        console.log('onFinishFailed', val); //sy-log
    };
    render() {
        console.log('AntdFormPage render', this.formRef.current); //sy-log
        return (
            <div>
                <h3>AntdFormPage</h3>
                <Form
                    ref={this.formRef}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                    onReset={this.onReset}
                >
                    <FormItem label="姓名" name="name" rules={[nameRules]}>
                        <Input placeholder="name input placeholder" />
                    </FormItem>
                    <FormItem label="密码" name="password" rules={[passworRules]}>
                        <Input placeholder="password input placeholder" />
                    </FormItem>
                    <FormItem>
                        <Button type="primary" size="large" htmlType="submit">
                            Submit
                        </Button>
                    </FormItem>
                    web全栈架构师 function实现： 注意 useForm 是React
                    Hooks的实现，只能用于函数组件。
                    <FormItem>
                        <Button type="default" size="large" htmlType="reset">
                            Reset
                        </Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}
