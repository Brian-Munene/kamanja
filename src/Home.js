import React from 'react';
import './Style.css';
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
			<div className="Container">
				<p>
					Kamanja Team Designs is a consotium of qualified professionals in the areas of:
				</p>	
					<List list={qualifications} />
				
			</div>
			);
	}
}
export default Home;