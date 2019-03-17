import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Location from "./Location";
import Contacts from "./Contacts";
import {StickyContainer, Sticky} from 'react-sticky';


const Sidebar = () => {
    return(
        <Router>
            <StickyContainer style={{zIndex:2}}>
                <Sticky>
                    <li><Link to={"/"}/>Home</li>
                </Sticky>
                <Sticky>
                    <li><Link to={"/About"}>About us</Link></li>
                </Sticky>
                <Sticky>
                    <li><Link to={"/Portfolio"}>Portfolio</Link></li>
                </Sticky>
                <Sticky>
                    <li><Link to={"/Location"}>Location</Link></li>
                </Sticky>
                <Sticky>
                    <li><Link to={"/Contacts"}>Contacts</Link></li>
                </Sticky>
            </StickyContainer>
            <Switch>
                <Route exact={true} path={"/"} component={Home} />
                <Route path={"/About"} component={About} />
                <Route path={"/Portfolio"} component={Portfolio} />
                <Route path={"/Location"} component={Location} />
                <Route path={"/Contacts"} component={Contacts}/>
            </Switch>
        </Router>
    );
}
export default Sidebar;