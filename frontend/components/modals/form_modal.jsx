import React from 'react';
import Modal, {closeStyle} from 'simple-react-modal';
import {aboutModalStyle} from '../../util/modal_styles';
import TracktlistFormContainer from '../tracktlist_form/tracktlist_form_container';


export default class FormModal extends React.Component{

	constructor(){
    super()
    this.state = {}
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
      <a onClick={this.show.bind(this)}>CREATE</a>
      <Modal
      show={this.state.show}
      onClose={this.close.bind(this)}>
 
      <TracktlistFormContainer/>
    
            
      </Modal>
      </div>
  	)
  }
}