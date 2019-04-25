import React from 'react';
import '../styles/Style.css';
import List from './List'
import{Card, CardImg, CardDeck, CardHeader, CardBody} from 'reactstrap';
import town_houses from "../images/town-houses.bmp";
import astrol from "../images/Astrol-2017.JPG";
import stmarys from "../images/StMary's.jpeg";
import godowns from "../images/Godowns.jpg";

const styles = {
    color: 'black',
    width: '95%',
    height: '95%',
    borderRadius: 5,
    overflow: 'hidden',
    paddingLeft: '2%',
    opacity: 0.85,
}

const Agricultural_list =  ['All types of Farm Houses', 'Green house']
const Social_list = ['Churches', 'Sport facilities and club houses']
const Industrial_list = ['Go-downs', 'Workshop and Stores']
const Commercial_list = ['Shops and Flats', 'Schools and Colleges', 'Office block and Malls', 'Hotels and Restaurants', 'Hospitals', 'Petrol Stations']
const Residential_list =  ['High rise high cost apartments', 'mansionettes and town houses', 'Bungalows'];
class Portfolio extends React.Component {
    render() {
        return (
            <div className="Portfolio">
                <h1>Portfolio</h1>
                <CardDeck>
                    <Card className='text-muted'>
                        <CardHeader tag={"h2"}>Social Buildings</CardHeader>
                        <CardBody><List list={Social_list}/></CardBody>
                        <CardImg bottom width="100%" src={stmarys} alt="stmarys"/>
                    </Card>
                    <Card className='text-muted'>
                        <CardHeader tag="h2"> Industrial Buildings</CardHeader>
                        <CardBody className="text-center"><List list={Industrial_list}/></CardBody>
                        <CardImg width="100%" src={godowns} alt="town_houses"/>
                    </Card>
                </CardDeck>
                    <Card className='text-muted'>
                        <CardHeader tag="h2"> Agricultural Buildings</CardHeader>
                        <CardBody><List list={Agricultural_list}/></CardBody>
                    </Card>
                <CardDeck>
                    <Card className="text-muted">
                        <CardHeader tag="h2">Commercial Buildings</CardHeader>
                        <CardBody color= "white"><List list={Commercial_list}/></CardBody>
                        <CardImg src={astrol} alt="Astrol"/>
                    </Card>
                    <Card className='text-muted'>
                        <CardHeader tag="h2">Residential Buildings</CardHeader>
                        <CardBody><List list={Residential_list}/></CardBody>
                        <CardImg width="40%" src={town_houses} alt="town_houses"/>
                    </Card>
                </CardDeck>

            </div>
        );
    }
}
export default Portfolio;