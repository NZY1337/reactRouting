
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Route, NavLink, BrowserRouter as Router, Switch} from 'react-router-dom';
import App from './Home';
import Users from './components/Users';
import Contact from './components/Conctact';
import Brand from './components/Brand';
import NotFound from './components/NotFound';

const routing = (
    <Router>
        <div>
            <nav>
                <div className="container">
                    <div className="nav-wrapper">
                        <NavLink exact activeClassName="active-2" to='/'>
                            <Brand />
                        </NavLink>

                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><NavLink exact activeClassName="active" to='/'>Home</NavLink>></li>
                            <li><NavLink activeClassName="active" to='/users'>Users</NavLink></li>
                            <li><NavLink activeClassName="active" to='/contact'>Contact</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
            
            <Switch>
                <Route exact path='/' component={App}/>
                <Route path="/users/:id" component={Users} />
                <Route path='/contact' component={Contact}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    </Router>
);;

ReactDOM.render(routing, document.getElementById('root'));
  



