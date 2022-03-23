import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    HashRouter,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from 'react-router-dom';
import Img from '../../pages/image/Img';
import imgURL from '@public/headImg.jpg';
import { Parent } from '../../pages/context/Parent';
import Counter from '../../pages/redux/Counter';
import CounterA from '../../pages/react-redux/CounterA';
import CounterB from '../../pages/redux-toolkit/CounterB';
import State from '../../pages/hooks/State';
import Effect from '../../pages/hooks/Effect';
import Memo from '../../pages/hooks/Memo';
import Callback from '../../pages/hooks/Callback';
import CustomerHook from '../../pages/hooks/CustomerHook';
import Dialog from '../../pages/dialog/Dialog';
import ClassAntdFormPage from '../../pages/rc-field-form/ClassForm';
import FunctionAntdFormPage from '../../pages/rc-field-form/FunctionForm';
import RCFieldForm from '../../pages/rc-field-form/RCFieldForm';
import RCForm from '../../pages/rc-form/RCForm';

function Main(props) {
    const [isShow, setIsShow] = useState(false);
    return (
        <div>
            <HashRouter>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/image">image</Link>
                            </li>
                            <li>
                                <Link to="/context">context</Link>
                            </li>
                            <li>
                                <Link to="/redux">redux</Link>
                            </li>
                            <li>
                                <Link to="/hooks">hooks</Link>
                            </li>
                            <li>
                                <Link to="/dialog">dialog</Link>
                            </li>
                            <li>
                                <Link to="/fclass-antd-form">fclass-antd-form</Link>
                            </li>
                            <li>
                                <Link to="/function-antd-form">function-antd-form</Link>
                            </li>
                            <li>
                                <Link to="/rc-form">rc-form(antd3)</Link>
                            </li>
                            <li>
                                <Link to="/rc-field-form">rc-field-form(antd4)</Link>
                            </li>
                            <li>
                                <Link to="/topics">Topics</Link>
                            </li>
                        </ul>
                    </nav>

                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/image">
                            <Img
                                src={imgURL}
                                onClick={() => {
                                    alert('click');
                                }}
                                age={12}
                            ></Img>
                        </Route>
                        <Route path="/context">
                            <Parent />
                        </Route>
                        <Route path="/redux">
                            <p>-------redux的简单实用---------</p>
                            <Counter />
                            <p>---------下面是react-redux 的使用</p>
                            <CounterA />
                            <p> -----------下面是redux-toolkit</p>
                            <CounterB />
                        </Route>
                        <Route path="/hooks">
                            <p>--------hooks内容------------</p>
                            <State />
                            <Effect />
                            <Memo />
                            <Callback />
                            <CustomerHook />
                        </Route>
                        <Route path="/dialog">
                            <p>-------- Dialog createPortal------------</p>
                            <button
                                onClick={() => {
                                    setIsShow(!isShow);
                                }}
                            >
                                toggle dialog
                            </button>
                            <Dialog isShow={isShow} setIsShow={setIsShow} />
                        </Route>
                        <Route path="/fclass-antd-form">
                            <ClassAntdFormPage />
                        </Route>
                        <Route path="/function-antd-form">
                            <FunctionAntdFormPage />
                        </Route>
                        <Route path="/rc-form">
                            <RCForm />
                        </Route>
                        <Route path="/rc-field-form">
                            <RCFieldForm />
                        </Route>

                        <Route path="/topics">
                            <Topics />
                        </Route>
                    </Switch>
                </div>
            </HashRouter>
        </div>
    );
}

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Topics() {
    let match = useRouteMatch();

    return (
        <div>
            <h2>Topics</h2>

            <ul>
                <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
                </li>
            </ul>

            {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
            <Switch>
                <Route path={`${match.path}/:topicId`}>
                    <Topic />
                </Route>
                <Route path={match.path}>
                    <h3>Please select a topic.</h3>
                </Route>
            </Switch>
        </div>
    );
}

function Topic() {
    let { topicId } = useParams();
    return <h3>Requested topic ID: {topicId}</h3>;
}

export default Main;
