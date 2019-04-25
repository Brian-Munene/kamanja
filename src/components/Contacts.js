import React from 'react';
import '../styles/Style.css';

const header = {
	textAlign: 'center',
	h2: {
		fontSize: '42px',
		paddingTop: '1%',
		color: 'black',
		fontStyle:'italic',
	},
	p: {

		color: '#282c34',
		fontSize: '26px',
		lineHeight: '4'
	},
	h2_hr:{
		marginRight: '40%',
		marginLeft: '40%',
	}
}
const footer = {
		marginBottom: '1%',
		fontSize: '12px',
		color: 'black',
		textAlign: 'center',
	hr:{
		marginTop: '2%',
		marginRight: '30%',
		marginLeft: '30%',
	}
}
export class Contacts extends React.Component
{
	render()
	{
		return(
			<div className="Contacts">
				<h2 style={header.h2}> Contact Us</h2>
				<hr style={header.h2_hr}/>
					<p style={header.p}>
						Telephone: 0722783557  and 0722707166<br/>
						Email: kamanjateamdesigns@yahoo.com <br/>
					</p>
				<hr style={footer.hr}/>
                <p style={footer}>&copy; Copyright Kamanja Team Designs. | Created by Brian Munene.</p>
			</div>
			);
	}
}
export default Contacts;