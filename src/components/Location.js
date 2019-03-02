import React from 'react';
import '../styles/Style.css';
import crest_park from "../images/Crest-park.jpg";

class Location extends React.Component{
	render() {
		return (
			<div className='Container'>
				<h2>Location</h2>
				<p className="about-text">
					Kamanja tean Designs is located at Nairobi Central Business District/ City center
					along Muindi Mbingu Street 200 meters from Nairobi city County headquarters (CITYHALL).
				</p>
				<img style={this.props.styles} src = {this.props.images} className = "App-logo" alt = "crest_park"/>
			</div>
			);
	}
}
export default Location;