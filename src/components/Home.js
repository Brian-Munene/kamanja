import React from 'react';
import '../styles/Style.css';
import List from './List';
import astrol from '../images/Astrol-2017.JPG'

const qualifications = [
    'Architects',
    'Structural and Civil Engineers',
    'Mechanical Engineers',
    'Electrical Engineers',
    'Quantity Surveyors',
    'Land Surveyors',
    'Nema Experts'
];
const styles = {
    color: 'black',
    width: '60%',
    height: '95%',
    borderRadius: '5px',
    overflow: 'hidden',
    paddingLeft: '1%',
    opacity: 0.85
}
export default class Home extends React.Component {
    render() {
        return ( 
		<div className="Container" style={{backgroundColor: 'ivory'}}>
            <p className="large-text"> Kamanja Team Designs is a consortium of qualified professionals in the areas of:</p>
            <div className="Home">
			    <List list={qualifications }/>
			    <img style={styles} src={astrol} alt="Astrol"/>
            </div>
		</div>
        );
    }
}
