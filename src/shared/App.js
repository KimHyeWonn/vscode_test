import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from 'pages';
import About from 'pages/About';

class App extends Component {
    render() {
        return (
            <div>
                 <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
            </div>
        );
    }
}

export default App;