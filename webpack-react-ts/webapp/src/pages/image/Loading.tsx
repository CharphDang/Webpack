import React, { Component } from 'react';
class Loading extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="loading">
                <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-ic_laoding"></use>
                </svg>
            </div>
        );
    }
}

export default Loading;
