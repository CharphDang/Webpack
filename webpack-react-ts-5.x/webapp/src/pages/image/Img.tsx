import React, { Component, MouseEvent } from 'react';
import Loading from './Loading';
export interface IMyProps {
    src: string;
    onClick(event: MouseEvent<HTMLImageElement>): void;
    age: number;
}

export interface IMyState {
    src: string;
}

function woof(Comp): any {
    return (props: IMyProps) => {
        console.log(props);
        return (
            <div>
                <h1>woof11</h1>
                <Comp
                    {...props}
                    onClick={(e: MouseEvent<HTMLImageElement>) => {
                        props.onClick(e);
                    }}
                ></Comp>
            </div>
        );
    };
}

function dog(Comp): any {
    return (props: IMyProps) => {
        console.log(props);
        return (
            <div>
                <h1>dog</h1>
                <Comp
                    {...props}
                    onClick={e => {
                        props.onClick(e);
                    }}
                ></Comp>
            </div>
        );
    };
}

// 自下而上
// @dogDeractor
// @woofDeractor
@dog
@woof
class Img extends Component<IMyProps, IMyState> {
    name = 'dcf';
    constructor(props: IMyProps) {
        super(props);
        this.state = {
            src: null
        };
    }

    componentDidMount() {
        // 组件加载好之后， 进行请求img， 使用timeout模拟请求异步 5S 返回
        setTimeout(() => {
            const img = document.createElement('img');
            img.src = this.props.src;
            img.onload = () => {
                // img请求回来后，将其转换为base64，直接塞进src中
                const data = this.getBase64Image(img);
                this.setState({
                    src: data
                });
            };
        }, 5000);
    }

    getBase64Image(img) {
        var canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, img.width, img.height);
        var dataURL = canvas.toDataURL('image/png');
        return dataURL;
    }

    render() {
        return (
            <div className="wrap">
                <div>蚂蚁雅黑： {this.props.age}</div>
                <span className="iconfont icon-wxbzhanghu"></span>
                <div className="color">456</div>
                <div className="divImg"></div>
                <div className="imgContainer">
                    {this.state.src === null ? (
                        <Loading></Loading>
                    ) : (
                        <img
                            onClick={e => {
                                this.props.onClick(e);
                            }}
                            src={this.state.src}
                            alt=""
                        />
                    )}
                </div>
            </div>
        );
    }
}
export default Img;
