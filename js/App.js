import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';
import Main from './components/Main'

function App() {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/Canvasdata.aspx" component={Main} />
                    <Redirect to="/Canvasdata.aspx" />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;