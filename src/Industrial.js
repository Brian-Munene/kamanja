import React from 'react'
import List from './List'

const Industrial_list = ['Godowns', 'Workshop and Stores']

export class Industrial extends React.Component{
	render(){
		return(
			<div className = "Container">
                <h2> Industrial Buildings</h2>
                <List list = {Industrial_list} />
            </div>
			)
	}
}