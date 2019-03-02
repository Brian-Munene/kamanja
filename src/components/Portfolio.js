import React from 'react';
import '../styles/Style.css';
import {Residential} from './Residentials'
import {Agricultural} from './Agricultural'
import {Commercial} from "./Commercial";
import {Industrial} from "./Industrial";
import {Social} from "./Social";

class Portfolio extends React.Component {

    
    
    render() {
        return ( 
            <div className = "Portfolio">
                <h2> Portfolio</h2>
                <img style={this.props.styles} src = {this.props.images} className = "App-logo" alt = "stunning_homes"/>
                <Residential/>
                <Commercial/>
                <Industrial/>
                <Social/>
                <Agricultural/>
            </div>
        );
    }
}
export default Portfolio;