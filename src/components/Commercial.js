import React from 'react'
import List from './List'
import '../styles/Style.css';
import astrol from "../images/Astrol-2017.JPG";
const Commercial_list = ['Shops and Flats', 'Schools and Colleges', 'Office block and Malls', 'Hotels and Restaurants', 'Hospitals', 'Petrol Stations']

const styles = {
    color: 'black',
    width: '95%',
    height: '95%',
    borderRadius: 5,
    overflow: 'hidden',
    opacity: 0.85
}
export class Commercial extends React.Component {
    render() {
        return (
            <div className="Container">
                <h2>Commercial Buildings</h2>
                <List list={Commercial_list}/>
                <img style = {styles} src={astrol} className="App-logo" alt="Astrol"/>
            </div>
        )
    }
}