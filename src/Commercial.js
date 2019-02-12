import React from 'react'
import List from './List'

const Commercial_list =  ['Shops and Flats', 'Schools and Colleges', 'Office block and Malls', 'Hotels and Restaurants', 'Hospitals', 'Petrol Stations']

export class Commercial extends React.Component{
	render(){
		return(
			<div className = "Container">
                <h2> Commercial Buildings</h2>
                <List list = {Commercial_list} />
            </div>
			)
	}
}