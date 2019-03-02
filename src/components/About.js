import React from 'react';
import '../styles/Style.css';
import List from './List';
import court_yard from "../images/3D-Court-Yard-Front.JPG";

const styles_h3 = {
		fontSize: 32,
		fontWeight: 'bold'
	};

const achievements = ['Designed and detailed drawings.',
							'Submitted drawings to County Government for Approval both Architectural and Structural.',
							'Prepared mechanical and Electrical drawings.',
							'Prepared Bills of Quantity(BQ).',
							'Supervised to completion the following types of buildings.'];





class About extends React.Component{
	render(){
		return(

			<div className="Container">
				<h2> About Us</h2>
				<h3 style={styles_h3}> Started in the year 2008 kamanja team designs successfully: </h3>
				
					<List list={achievements} />
				  <img style={this.props.styles} src = {this.props.images} className = "App-logo" alt = "CourtYard"/>
			</div>
		);
	}

}
export default About;

