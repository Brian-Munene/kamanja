import React from 'react';
import './Style.css';


function List (props){

		const listItems = props.list;		
			
		const Items = listItems.map((listItem) =>
			<li className="list-items">{listItem}</li>
			)

		return(	
			<ul className="list">{Items}</ul>
		); 
}
export default List;