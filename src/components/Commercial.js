import React from 'react'
import List from './List'
import {Container} from 'reactstrap';
const Commercial_list = ['Shops and Flats', 'Schools and Colleges', 'Office block and Malls', 'Hotels and Restaurants', 'Hospitals', 'Petrol Stations']

export class Commercial extends React.Component {
    render() {
        return (
            <Container fluid>
                <h2>Commercial Buildings</h2>
                <List list={Commercial_list}/>
            </Container>
        )
    }
}