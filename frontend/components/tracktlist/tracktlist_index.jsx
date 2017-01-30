import React from 'react';
import TracktlistIndexItemContainer from './tracktlist_index_item_container';
import {withRouter} from 'react-router';
import Masonry from 'react-masonry-component';

class TracktlistIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchTracktlists();
  }

  render(){
    // const {loading} = this.props;
    const {tracktlists, loading} = this.props;

    // const tracktlists = this.props.tracktlists.map((tracktlist) => // define tracktlists
    //   <TracktlistIndexItemContainer 
    //     tracktlist={tracktlist} 
    //     key={tracktlist.id}/>
    // );


   return loading ? <div className="spinner">
  <div className="rect1"></div>
  <div className="rect2"></div>
  <div className="rect3"></div>
  <div className="rect4"></div>
  <div className="rect5"></div>
</div> :
      <div className='tracktlists-index'>
        <h2
          className="explore">explore.</h2> 
          <img 
            className="telescope-logo"
            src="http://freevector.co/wp-content/uploads/2009/02/21421-binoculars-front-view1.png" />


          <Masonry className='tracktlists-index-container'
          elementType={'ul'}
           options={{fitWidth: false, columnWidth: 200, gutter: 30}}>
          {tracktlists.reverse().map(tracktlist =>
          <TracktlistIndexItemContainer
           tracktlist = {tracktlist}
           key={tracktlist.id}/>)}

          </Masonry>
        </div>
  
  }
}

export default withRouter(TracktlistIndex);