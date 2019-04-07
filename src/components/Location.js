import React from 'react';
import '../styles/Style.css';
import crest_park from "../images/Crest-park.jpg";

const styles = {
	color: 'black',
	width: '95%',
	height: '95%',
	borderRadius: 5,
	overflow: 'hidden',
	opacity: 0.85,
}
class Location extends React.Component{
	render() {
		return (
			<div className='Container'>
				<h2>Location</h2>
				<p className="large-text">
					Kamanja team Designs is located at Nairobi Central Business District/ City center
					along Muindi Mbingu Street 200 meters from Nairobi city County headquarters (CITY HALL).
				</p>
				<img style={styles} src = {crest_park} className = "App-logo" alt = "crest_park"/>
			</div>
			);
	}
}
export default Location;