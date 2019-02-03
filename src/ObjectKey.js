import React from 'react';
import './Style.css';
import List from './List';


function ObjectKey(props) {

	const data = props.objectKey;
	
	return (
		for(const prop in data){
		<li className="list-items">{data.prop}</li>
	}
	);
}
export default ObjectKey;

