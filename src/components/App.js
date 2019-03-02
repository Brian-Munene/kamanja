import React, { Component } from 'react';
import * as PropTypes from "proptypes";
import '../styles/App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Contacts from './Contacts';
import Location from './Location';
import About from './About';
import Home from './Home';
import Portfolio from './Portfolio';
import NavigationBar from './navbar';

//images Import
import River_land from '../images/RIVER-LAND.jpg';
import multi_purpose_hall from '../images/multipurpose-hall.jpg'
import astrol from '../images/Astrol-2017.JPG'
import court_yard from '../images/3D-Court-Yard-Front.JPG'
import stunning_homes from '../images/stunning-homes.jpg'
import crest_park from '../images/Crest-park.jpg'
import final_solid_gate from '../images/final_solid_gate.jpg'

const styles = {
    width: '95%',
    height: '95%',
    borderRadius: 5,
    overflow: 'hidden',
    opacity: 0.85
}
export default class App extends Component {
    render() {
        return (
            <div>
                <header className = "App-header" >
                    <h1>Welcome to Kamanja Team Designs. </h1>
                    <img style={styles} src = { River_land } className = "App-logo" alt = "River_land"/>
                </header>
                <Container>
                    <Row className="show-grid">
                        <Col sm="4">
                            <NavigationBar />
                        </Col>
                        <Col sm="8">
                            <img style={styles} src = {multi_purpose_hall} className = "App-logo" alt = "MultiPurposeHall"/>
                            <Home style={styles} images={astrol}/>
                            <About style={styles} images={court_yard}/>
                            <Portfolio styles={styles} images={stunning_homes}/>
                            <Location styles={styles} images={crest_park}/>
                            <Contacts styles={styles} images={final_solid_gate}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
