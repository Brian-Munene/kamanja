import React from 'react';
import '../styles/Style.css';
import final_solid_gate from "../images/final_solid_gate.jpg";


export class Contacts extends React.Component
{


	render()
	{
		return(
			<div className="Container">
				<h2> Contact Us</h2>
				<p>
					Please contact us on: <br/>
					Telephone: 0722783557  and 0722707166<br/>
					Email Address: kamanjateamdesigns@yahoo.com <br/>
				</p>
				 <img style={this.props.styles} src = { this.props.images} className = "App-logo" alt = "final_solid_gate"/>
			</div>
			);
	}
}

export default Contacts;