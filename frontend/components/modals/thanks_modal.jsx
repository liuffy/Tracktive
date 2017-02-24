import React from 'react';
import Modal, {closeStyle} from 'simple-react-modal';
import {aboutModalStyle} from '../../util/modal_styles';
import Thanks from './thanks';


export default class ThanksModal extends React.Component{

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
      <a onClick={this.show.bind(this)}>Special thanks</a>
      <Modal
      show={this.state.show}
      onClose={this.close.bind(this)}>
            <span 
      onClick={this.close.bind(this)}
      className="exit-button">&times;</span>
      <Thanks/>
 
      </Modal>
      </div>
  	)
  }
}