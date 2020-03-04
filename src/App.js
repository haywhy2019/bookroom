import React, { Fragment }from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Home from './components/home';
import Navbar from './components/navigation/Routes';
import './App.css';



function App() {
  return (
    <Fragment>
    <Router>
        <Navbar />
        <Switch>
            <div>
                
                <Route exact path='/' component={Home} />
                <Route path='/dashboard/mymeetings'  component={Dashboard} />
                <Route path='/dashboard/meetingrooms'  component={Dashboard} />
                <Route path='/dashboard/createmeeting' component={Dashboard} />
            </div>
        </Switch>
    </Router>

</Fragment>
    
  );
}

export default App;
