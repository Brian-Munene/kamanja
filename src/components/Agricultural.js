import React from 'react'
import List from './List'

const Agricultural_list =  ['All types of Farm Houses', 'Green house']

export class Agricultural extends React.Component{
	render(){
		return(
			<div className="Container">
                <h2> Agricultural Buildings</h2>
                <List list = {Agricultural_list} />
            </div>
			)
	}
}