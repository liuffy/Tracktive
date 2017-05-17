import React from 'react';
import Modal, { closeStyle } from 'simple-react-modal';
import { aboutModalStyle } from '../../util/modal_styles';
import TracktlistFormContainer from '../tracktlist_form/tracktlist_form_container';
import { browserHistory } from 'react-router'; 


export default class FormModal extends React.Component{

	constructor(){
    super()
    this.state = {}
    browserHistory.listen( location =>  { // modal closes once route changes
      this.close()
    });
  }

  show(){
    this.setState({show: true})
  }
 
  close(){
    this.setState({show: false})
  }
 

  render(){

     return (
      <div>
      <button className="create-modal-button" onClick={this.show.bind(this)}>CREATE</button>
      <Modal
      id="formModal"
      show={this.state.show}
      onClose={this.close.bind(this)}>
 
      <TracktlistFormContainer
        id="tracktlistForm"/>
        <span 
          onClick={this.close.bind(this)}
          className="exit-button">&times;</span>
      </Modal>
      </div>
  	)
  }
}