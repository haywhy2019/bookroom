import React, { Fragment } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Dashboard from '../dashboard/Dashboard';
import Home from '../home/Home';
import Navbar from '../home/Navbar';


function Routes() {
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
    )
}

export default Routes;