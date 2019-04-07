import React from 'react';
import '../styles/Style.css';
import List from './List';
import life_architect from "../images/life-of-an-architect.jpeg";


const achievements = ['Designed and detailed drawings.',
							'Submitted drawings to County Government for Approval both Architectural and Structural.',
							'Prepared mechanical and Electrical drawings.',
							'Prepared Bills of Quantity(BQ).',
							'Supervised to completion the following types of buildings.'
							];
const styles = {
	color: 'black',
	width: '95%',
	height: '95%',
	borderRadius: 5,
	overflow: 'hidden',
	opacity: 0.85
}
class About extends React.Component{
	render(){
		return(

			< div className="Container">
				<h2> About Us</h2>
				<h3> Started in the year 2008 kamanja team designs successfully: </h3>
					<div className="About">
						<List list={achievements} />
					</div>
				  <img style={styles} src = {life_architect}  alt = "CourtYard"/>
			</div>
		);
	}

}
export default About;

