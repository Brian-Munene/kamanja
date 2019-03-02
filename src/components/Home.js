import React from 'react';
import '../styles/Style.css';
import List from './List';


const qualifications = ['Architectural / Architects',
						 'Structural and Civil Engineers',
						 'Mechanical Engineers',
						 'Electrical Engineers',
						 'Quantity Surveyors',
						 'Land Surveyors',
						 'Nema Experts'
];

class Home extends React.Component{
	render(){
		return(
				<div>
				<p>
					Kamanja Team Designs is a consortium of qualified professionals in the areas of:
				</p>
					<List list={qualifications}/>
				<img style={this.props.styles} src = {this.props.images} className = "App-logo" alt = "Astrol"/>
				</div>
			);
	}
}
export default Home;
