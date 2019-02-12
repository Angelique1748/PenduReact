import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/Accueil';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {Route, Switch} from "react-router";
import {HashRouter} from "react-router-dom";
import {combineReducers, createStore} from "redux";
import {reducer as formReducer} from 'redux-form';
import reducer from "./reducer";
import MotATrouver from "./MotATrouver/MotATrouver";
import Jeux from "./Jeux/Jeux";
import Resultat from "./Resultat/Resultat";

const rootReducer = combineReducers({
    jeux: reducer,
    form: formReducer,
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route path='/' exact component={App} />
                <Route path='/MotATrouver' component={MotATrouver} />
                <Route path='/jeux' component={Jeux} />
                <Route path='/Resultat' component={Resultat}/>
            </Switch>
        </HashRouter>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
