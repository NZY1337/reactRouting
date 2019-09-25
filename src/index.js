
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
import App from './Home';
import Users from './components/Users';
import Contact from './components/Conctact';
import Brand from './components/Brand';

const routing = (
    <Router>
        <div>
            <nav>
                <div className="container">
                    <div className="nav-wrapper">
                        <Link to='/'>
                            <Brand />
                        </Link>

                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Link to='/'>Home</Link>></li>
                            <li><Link to='/users'>Users</Link>></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            
            <Route exact path='/' component={App}/>
            <Route path='/users' component={Users}/>
            <Route path='/contact' component={Contact}/>
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));
  



