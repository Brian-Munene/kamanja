import React from 'react';
import '../styles/Style.css';
import List from './List';
import life_architect from "../images/life-of-an-architect.jpeg";
import {Row,Column, Col} from 'reactstrap';


const achievements = ['Designed detailed drawings.',
							'Submitted drawings to County Government for Approval both Architectural and Structural.',
							'Prepared mechanical and Electrical drawings.',
							'Prepared Bills of Quantity(BQ).',
							'Supervised to completion the following types of buildings.'
							];
const styles = {
	color: 'black',
	width: '100%',
	height: '75%',
	borderRadius: 5,
	overflow: 'hidden',
	opacity: 0.85
}
const header = {
    textAlign: 'center',
    h2: {
        fontSize: '42px',
        paddingTop: '1%',
        color: 'black',
        fontStyle:'italic',
        textAlign: 'center'
    },
    h3: {
        color: 'black',
        paddingTop: '1%',
        fontSize: '36px',
        textAlign: 'center'
    },
    first:{
        marginRight: '40%',
        marginLeft: '40%',
    },
    second:{
        marginRight: '30%',
        marginLeft: '30%',
    },
    third:{
        marginRight: '20%',
        marginLeft: '20%',
    }
}
 class About extends React.Component{
	render(){
		return(

			<div className='Container'>
				<h2 style={header.h2}> About Us</h2>
                <hr style={header.first}/>
				<h3 style={header.h3}> Started in the year 2008.<br/><hr style={header.second}/> Kamanja team designs successfully: </h3>
                <hr style={header.third}/>
                    <Row>
                        <Col>
                            <img style={styles} src = {life_architect}  alt="architect_life"/>
                        </Col>
                        <Col>
                            <List list={achievements} />
                        </Col>
					</Row>
			</div>
		);
	}
}
export default About;

