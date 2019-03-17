import React from 'react';
import '../styles/Style.css';
import List from './List';
import astrol from '../images/Astrol-2017.JPG'
import {Container} from 'reactstrap'

const qualifications = [
    'Architectural / Architects',
    'Structural and Civil Engineers',
    'Mechanical Engineers',
    'Electrical Engineers',
    'Quantity Surveyors',
    'Land Surveyors',
    'Nema Experts'
];
export default class Home extends React.Component {
    render() {
        return ( 
		<Container fluid>
			 <p className="large-text"> Kamanja Team Designs is a consortium of qualified professionals in the areas of:</p>
			 <List list={qualifications }/>
			  <img style = {this.props.styles} src={astrol} className="App-logo" alt="Astrol"/>
		</Container>
        );
    }
}
