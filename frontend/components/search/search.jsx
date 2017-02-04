import { FormGroup, FormControl, HelpBlock } from 'react-bootstrap';
import { Link, hashHistory } from 'react-router';
const React = require('react');


class Search extends React.Component {

 constructor(props) {
    super(props);
    this.state = {
      searchString: ""
    }

    this.updateQuery = this.updateQuery.bind(this)
  }

  updateQuery(e){
    e.preventDefault();
    hashHistory.push("/browse");
    this.setState({searchString: e.target.value});
    this.props.search(e.target.value);
  }

  render(){
    return(
   
      <FormControl
        className="search-bar" 
        placeholder={'What artist(s) do you want to hear?'} 
        value={this.state.searchString} 
        onChange={this.updateQuery}
        />
    );
  }
};

export default Search;