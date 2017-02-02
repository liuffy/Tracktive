import React from 'react';
import Modal, {closeStyle} from 'simple-react-modal';
import {aboutModalStyle} from '../../util/modal_styles';
import Graphics from './graphics';


export default class GraphicsModal extends React.Component{

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
      <a onClick={this.show.bind(this)}>Graphics</a>
      <Modal
      show={this.state.show}
      onClose={this.close.bind(this)}>
 
      <Graphics/>
 
      </Modal>
      </div>
  	)
  }
}