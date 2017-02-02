import React from 'react';
// import { Link } from 'react-router';
import Modal, {closeStyle} from 'simple-react-modal';
import {aboutModalStyle} from '../../util/modal_styles';
import SiteInfo from './site_info';

import Mailto from 'react-mailto';

const Mailee = () => (
      <Mailto 
      	className="link"
      	email="sliu3@wellesley.edu" obfuscate={false}>
        here.
      </Mailto>
    );

export default class AboutModal extends React.Component{

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
      <a onClick={this.show.bind(this)}>About site</a>
      <Modal
      show={this.state.show}
      onClose={this.close.bind(this)}>
 
      <SiteInfo/>
 
      </Modal>
      </div>
	)
}
}