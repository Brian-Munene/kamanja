import React from 'react'
import List from './List'
import town_houses from '../images/town-houses.bmp'

const Residential_list =  ['High rise high cost apartments', 'mansionettes and town houses', 'Bungalows']

const styles = {
    width: '95%',
    height: '95%',
    borderRadius: 5,
    overflow: 'hidden',
    opacity: 0.85
}

export class Residential extends React.Component{
	render(){
		return(
			<div className = "Container">
                <h2> Residential Buildings</h2>
                <List list = {Residential_list} />
                <img style={styles} src = {town_houses} className = "App-logo" alt = "town_houses"/>
            </div>
			)
	}
}