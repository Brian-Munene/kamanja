import React, {Component} from 'react';
import '../styles/App.css';
import {Container, Row, Col} from 'reactstrap';
import Contacts from './Contacts';
import Location from './Location';
import About from './About';
import Home from './Home';
import Portfolio from './Portfolio';
import Sidebar from './Sidebar';
// images Import
import River_land from '../images/RIVER-LAND.jpg'; 
import multi_purpose_hall from '../images/multipurpose-hall.jpg';

const styles = {
    color: 'black',
    width: '95%',
    height: '95%',
    borderRadius: 5,
    overflow: 'hidden',
    opacity: 0.85
}
export default class App extends Component {

    render() {
        return (
        <Container fluid>
            <Row>
                <Col>
                    <header className = "app-header">
                      <h1> Welcome to Kamanja Team Designs.</h1>
                        <img style={ styles } src={ River_land } className="App-logo" alt="River_land"/>
                    </header>
                </Col>
            </Row>
            <Row>
                <Col md={{size: 3, offset: 9}}>
                    Sidebar
                </Col>
                <Col style={styles} sm="12" md={{size: 9}}>
                    <Home style={styles}/>
                    <About style={styles}/>
                    <Portfolio style={styles}/>
                    <Location style={styles}/>
                    <Contacts style={styles}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div>
                        <img style={ styles } src={ multi_purpose_hall } alt="MultiPurposeHall"/>
                    </div>
                </Col>
            </Row>
        </Container>
        );
    }
}