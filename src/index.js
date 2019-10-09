
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Route, NavLink, BrowserRouter as Router, Switch} from 'react-router-dom';
import App from './components/HomeComponent/Home';
import Users from './components/UsersComponent/Users';
import Contact from './components/ContactComponent/Conctact';
import Brand from './components/BrandComponent/Brand';
import NotFound from './components/NotFoundComponent/NotFound';

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
                            <li><NavLink exact activeClassName="activ" to='/'>Home</NavLink>></li>
                            <li><NavLink activeClassName="activ" to='/users'>Users</NavLink></li>
                            <li><NavLink activeClassName="activ" to='/contact'>Contact</NavLink></li>
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
  



