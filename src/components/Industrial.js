import React from 'react'
import List from './List'
import '../styles/Style.css';
const Industrial_list = ['Go-downs', 'Workshop and Stores']

export class Industrial extends React.Component{
	render(){
		return(
			<div className="Container">
                <h2> Industrial Buildings</h2>
                <List list={Industrial_list}/>
            </div>
			)
	}
}
