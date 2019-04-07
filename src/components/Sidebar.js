import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Location from "./Location";
import Contacts from "./Contacts";
import '../styles/Style.css';

//menu_items = ['Home', 'About us', 'Portfolio', 'Location', 'Contacts']
const routes = [
    {
        path: '/',
        exact: true,
        sidebar: () => <div>Home</div>,
        main: () => <h2><Home/></h2>
    },
    {
        path: '/About',
        sidebar: () => <div>About</div>,
        main: () => <h2><About/></h2>
    },
    {
         path: '/Portfolio',
        sidebar: () => <div>Portfolio</div>,
        main: () => <h2><Portfolio/></h2>
    },
    {
         path: '/Location',
        sidebar: () => <div>Location</div>,
        main: () => <h2><Location/></h2>
    },
    {
         path: '/Contacts',
        sidebar: () => <div>Contacts</div>,
        main: () => <h2><Contacts/></h2>
    },
]
const Sidebar = () => {
    return(         
        <Router>
            <div className="Sidebar">
                <div className="Sidebar-list">
                    <ul className="Sidebar-menu">
                        <li className="menu-list"><Link to='/'>Home</Link></li>
                        <li className="menu-list"><Link to='/About'>About</Link></li>
                        <li className="menu-list"><Link to='/Location'>Location</Link></li>
                        <li className="menu-list"><Link to='/Portfolio'>Portfolio</Link></li>
                        <li className="menu-list"><Link to='/Contacts'>Contacts</Link></li>
                    </ul>

                    {
                        routes.map((route) => (
                            <Route
                            key={route.path}
                            path={route.path}
                            exact={route.exact}
                            component={route.sidebar}/>
                        )
                    )}
                </div>
                <div className='current-menu'>
                     {
                        routes.map((route) => (
                            <Route
                            key={route.path}
                            path={route.path}
                            exact={route.exact}
                            component={route.main}/>
                        )
                    )}
                </div>
            </div>
            
        </Router>
    );
}
export default Sidebar;
