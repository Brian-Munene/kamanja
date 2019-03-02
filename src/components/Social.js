import React from 'react'
import List from './List'

import stmarys from "../images/StMary\'s.jpeg"

const Social_list = ['Churches', 'Sport facilities and club houses']

const styles = {
    width: '95%',
    height: '95%',
    borderRadius: 5,
    overflow: 'hidden',
    opacity: 0.85
}

export class Social extends React.Component{
	render(){
		return(
			<div className = "Container">
                <h2> Social Buildings</h2>
                <List list = {Social_list}/>
                <img style={styles} src = {stmarys} className = "App-logo" alt = "stmarys"/>
            </div>
			)
	}
}