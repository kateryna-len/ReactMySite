import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost} from './Redux/State'



export let renderEntireTree = (state) => {
    ReactDOM.render(<App state={state} addPost={addPost} />, document.getElementById('root') );
}


