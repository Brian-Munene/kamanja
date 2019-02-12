import React, { Component } from 'react';
import './App.css';
import Contacts from './Contacts';
import Location from './Location';
import About from './About';
import Home from './Home';
import Portfolio from './Portfolio';

//images Import
import River_land from './images/RIVER-LAND.jpg';
import multi_purpose_hall from './images/multipurpose-hall.jpg'
import astrol from './images/Astrol-2017.JPG'
import court_yard from './images/3D-Court-Yard-Front.JPG'
import stunning_homes from './images/stunning-homes.jpg'
import crest_park from './images/Crest-park.jpg'
import final_solid_gate from './images/final solid gate.jpg'

const styles = {
    width: '95%',
    height: '95%',
    borderRadius: 5,
    overflow: 'hidden',
    opacity: 0.85
}
class App extends Component {
    render() {
        return ( 
            <div className = "App" >
                <header className = "App-header" >
                    <img style={styles} src = { River_land } className = "App-logo" alt = "River_land"/>
                    <h1>
                        Welcome to Kamanja Team Designs. </h1>
                </header>
                <img style={styles} src = {multi_purpose_hall} className = "App-logo" alt = "MultiPurposeHall"/>
                <Home />
                <img style={styles} src = {astrol} className = "App-logo" alt = "Astrol"/>
                <About />
                <img style={styles} src = {court_yard} className = "App-logo" alt = "CourtYard"/>
                <Portfolio />
                <img style={styles} src = {stunning_homes} className = "App-logo" alt = "stunning_homes"/>
                <Location />
                <img style={styles} src = {crest_park} className = "App-logo" alt = "crest_park"/>
                <Contacts />
                <img style={styles} src = {final_solid_gate} className = "App-logo" alt = "final_solid_gate"/>
            </div>

        );
    }
}

export default App;