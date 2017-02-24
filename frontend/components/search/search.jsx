import { FormGroup, FormControl, HelpBlock } from 'react-bootstrap';
import { Link, hashHistory } from 'react-router';
import {bindActionCreators} from 'redux';
import * as searchActions from '../../actions/search_actions';
import { connect } from 'react-redux';
const React = require('react');


class Search extends React.Component {

 constructor(props) {
    super(props);
    this.state = {
      searchString: ""
    }

    this.updateQuery = this.updateQuery.bind(this)
    this.clearQuery = this.clearQuery.bind(this)
  }

  updateQuery(e){
    e.preventDefault();
    hashHistory.push("/browse");
    this.setState({searchString: e.target.value});
    this.props.actions.search(e.target.value);
  }


  clearQuery(e){
    e.preventDefault();
    this.setState({searchString: e.target.value});
    this.props.actions.search("");
  }

  render(){

    $(".clear-button").click(function() {
      $('input').val("");
    });


    return(
   
   <div className="search-container">
      <input
        className="search-bar" 
        placeholder={'artists/bands you like'} 
        value={this.state.searchString} 
        onChange={this.updateQuery}>
        </input>
        <span
        className="clear-button"
          onClick={this.clearQuery}>&times;</span>
        </div>
    );
  }
};


const mapStateToProps = (state) =>({
  query: state.query
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(searchActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);