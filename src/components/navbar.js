import * as React from "react";
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem} from 'reactstrap';
import Contacts from "./Contacts";
import About from "./About";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Location from "./Location"

export default class NavigationBar extends React.Component{
    constructor(props){
        super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }
    toggleNavbar(){
      this.setState({
          collapsed: !this.state.collapsed
      });
    }
    render(){
        return(
            <Router>
                <div>
                <Navbar color="faded" light>
                    <NavbarBrand href='/' className="mr-auto">Kamanja</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav navbar>

                                <NavItem>
                                    <ul>
                                        <li><Link to={"/"}>Home</Link></li>
                                    </ul>
                                </NavItem>
                                <NavItem>
                                    <ul>
                                        <li><Link to={"/About"}>About us</Link></li>
                                    </ul>
                                </NavItem>
                                <NavItem>
                                    <ul>
                                        <li><Link to={"/Portfolio"}>Portfolio</Link></li>
                                    </ul>
                                </NavItem>
                                <NavItem>
                                    <ul>
                                        <li><Link to={"/Location"}>Location</Link></li>
                                    </ul>
                                </NavItem>
                                <NavItem>
                                    <ul>
                                        <li><Link to={"/Contacts"}>Contacts</Link></li>
                                    </ul>
                                </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>

                    <Switch>
                        <Route exact={true} path={"/"} component={Home} />
                        <Route path={"/About"} component={About} />
                        <Route path={"/Portfolio"} component={Portfolio} />
                        <Route path={"/Location"} component={Location} />
                        <Route path={"/Contacts"} component={Contacts}/>
                    </Switch>

                </div>
            </Router>
        );
    }
}

NavbarToggler.propTypes = {
    type: PropTypes.string,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
    // pass in custom element to use
}
