import React from 'react';
import './Style.css';
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