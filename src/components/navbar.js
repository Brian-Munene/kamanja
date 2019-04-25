import React, {PropTypes} from "react";
import '../styles/Style.css';
import {Button, Modal,ModalHeader, ModalFooter,ModalBody} from 'reactstrap';
import Contacts from "./Contacts";

 class Modals extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            modal: false
        };
        this.toggle = this.toggle.bind(this);
    }
    toggle(){
      this.setState(prevState => ({
          modal: !prevState.modal
      }));
    }
    render(){
        return(
            <div className='navbar'>
                <Button color="transparent" onClick={this.toggle}>Contacts</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Contacts</ModalHeader>
                    <ModalBody>
                        <Contacts/>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={this.toggle}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}
export default Modals;
