import React from 'react';
import '../styles/Style.css';
import {Residential} from './Residentials'
import {Agricultural} from './Agricultural'
import {Commercial} from "./Commercial";
import {Industrial} from "./Industrial";
import {Social} from "./Social";
import stunning_homes from '../images/stunning-homes.jpg'

class Portfolio extends React.Component {
    render() {
        return ( 
            <div className = "Portfolio">
                <h2> Portfolio</h2>
                <p className="large-text">
                    Take a look at some of our Projects:
                </p>
                <img style={this.props.style} src = {stunning_homes} className = "App-logo" alt = "stunning_homes"/>
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