import React from 'react';
import '../styles/Style.css';
import {Residential} from './Residentials'
import {Agricultural} from './Agricultural'
import {Commercial} from "./Commercial";
import {Industrial} from "./Industrial";
import {Social} from "./Social";
import stunning_homes from '../images/stunning-homes.jpg'

const styles = {
    color: 'black',
    width: '95%',
    height: '95%',
    borderRadius: 5,
    overflow: 'hidden',
    paddingLeft: '2%',
    opacity: 0.85,
}
class Portfolio extends React.Component {
    render() {
        return ( 
            <div className = "Portfolio">
                <h2>Portfolio</h2>
                <p className="large-text">
                    Take a look at some of our Projects:
                </p>
                <div>
                    <img style={styles} src = {stunning_homes} alt = "stunning_homes"/>
                </div>
                <div>
                    <Residential/>
                </div>
                <div>
                    <Commercial/>
                </div>
                <div>
                    <Industrial/>
                </div>
                <div>
                    <Social/>
                </div>
                <div>
                    <Agricultural/>
                </div>                
            </div>
        );
    }
}
export default Portfolio;