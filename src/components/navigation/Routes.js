import React, { Fragment } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Dashboard from '../dashboard/Dashboard';
import Home from '../home/Home';
import Navbar from '../home/Navbar';


const Routes = () => {
    return (
        <Fragment>
            <Router>
                <Navbar />
                <Switch>
                    <div>
                        
                        <Route exact path='/'component={Home} />
                        <Route path='/dashboard/mymeetings' exact component={Dashboard} />
                        <Route path='/dashboard/meetingrooms' exact component={Dashboard} />
                        <Route path='/dashboard/createmeeting' exact component={Dashboard} />
                    </div>
                </Switch>
            </Router>

        </Fragment>
    )
}

export default Routes;