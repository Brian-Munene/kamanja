import React from 'react';
import './Style.css';
import List from 'List';
import ObjectKey from './ObjectKey'

const works = {
	'Residential Buildings': ['High rise high cost apartments', 'mansionettes and town houses', 'Bungalows'],
	'Commercial Buildings': ['Shops and Flats', 'Schools and Colleges', 'Office block and Malls', 'Hotels and Restaurants', 'Hospitals', 'Petrol Stations'],
	'Industrial Buildings': ['Godowns', 'Workshop and Stores'],
	'Social Buildings': ['Churches', 'Sport facilities and club houses'],
	'Agricultural Buildings': ['All types of Farm Houses', 'Green house']
};


class Portfolio extends React.Component{

	

	render(){
		return(
			<div className="Container">
				<ObjectKey objectKey={works} />
			</div>
			);
	}
}
export default Portfolio;
