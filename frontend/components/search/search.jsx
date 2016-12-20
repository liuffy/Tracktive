const React = require('react');
import { FormGroup, FormControl, HelpBlock } from 'react-bootstrap';

module.exports = React.createClass({

  getInitialState(){
    return {query: ""};
  },

  updateQuery(e){
    e.preventDefault();
    this.props.queryCallback(e.target.value);
    this.setState({query: e.target.value});
  },

  render(){
    return(
      <FormControl 
        width={500} 
        placeholder={'What artist(s) do you want to hear?"'} 
        value={this.state.query} 
        onChange={this.updateQuery}/>
    );
  }
});