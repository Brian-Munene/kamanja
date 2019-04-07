import React from 'react';
import List from './List';
import '../styles/Style.css';
import stmarys from "../images/StMary's.jpeg";
import multi_hall from "../images/multipurpose-hall.jpg";
const Social_list = ['Churches', 'Sport facilities and club houses']

const styles = {
    width: '50%',
    height: '50%',
    borderRadius: 5,
    overflow: 'hidden',
    opacity: 0.85
}

export class Social extends React.Component {
    render() {
        return (
            <div className="Container" >
                <h2>Social Buildings</h2>
                <List list={Social_list}/>
                <div className="flex-container">
                    <div>
                        <img src={stmarys} alt="stmarys"/>
                    </div>
                    <div>
                        <img src={multi_hall} alt="multi_purpose_hall"/>
                    </div>
                </div>
            </div>
        )
    }
}