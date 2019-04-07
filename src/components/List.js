import React from 'react';
import '../styles/Style.css';


function List (props){

		const listItems = props.list;		
			
		const Items = listItems.map((listItem) => <li className="list-items" key={listItem}>{listItem}</li>);
		return(	
			<ul className="list">{Items}</ul>
		); 
}
export default List;