import React from 'react';
import { Component } from 'react';

function createForm(Cmp) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {};
            this.options = {};
        }

        handleChange = e => {
            const { name, value } = e.target;
            this.setState({
                [name]: value
            });
        };

        validateFields = callback => {
            // 进行遍历校验
            let err = false;
            const errParams = {};
            Object.keys(this.options).forEach(field => {
                let rules = this.options[field].rules;
                const errors = [];
                rules.map(rule => {
                    if (rule.required) {
                        if (!this.state[field]) {
                            errors.push(rule);
                        }
                    }
                });
                if (errors.length > 0) {
                    err = true;
                    errParams[field] = {
                        errors
                    };
                }
            });
            if (err) {
                callback(errParams);
            } else {
                callback(null, this.state);
            }
        };

        getFieldDecorator = (field, opiton) => InputCmp => {
            this.options[field] = opiton;
            return React.cloneElement(InputCmp, {
                name: field,
                value: this.state[field] || '',
                onChange: this.handleChange
            });
        };

        setFieldsValue = state => {
            this.setState(state);
        };

        getFieldsValue = () => {
            return this.state;
        };

        getForm = () => {
            return {
                form: {
                    getFieldDecorator: this.getFieldDecorator,
                    setFieldsValue: this.setFieldsValue,
                    getFieldsValue: this.getFieldsValue,
                    validateFields: this.validateFields
                }
            };
        };
        render() {
            return (
                <div>
                    <Cmp {...this.props} {...this.getForm()} />
                </div>
            );
        }
    };
}

export default createForm;
