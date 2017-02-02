import React from 'react';
import TracktlistIndexItemContainer from './tracktlist_index_item_container';
import {withRouter} from 'react-router';
import Masonry from 'react-masonry-component';
import Footer from '../footer/footer';

class TracktlistIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchTracktlists();
  }

  render(){
    $(".footer").removeClass( "footer" ).addClass("index-footer");

    // Script for fading effect 

    const {tracktlists, loading} = this.props;
    $(window).scroll(function(){
    $(".explore").css("opacity", 1 - $(window).scrollTop() / 250);
    });


   return loading ? <div className="spinner">
  <div className="rect1"></div>
  <div className="rect2"></div>
  <div className="rect3"></div>
  <div className="rect4"></div>
  <div className="rect5"></div>
</div> :
<div className="whole-index-page">
        <h2
          className="explore">explore          <img 
            className="binoculars-logo"
            src="http://res.cloudinary.com/liuffy/image/upload/v1485845606/binoculars-final_ysflar.png" /></h2> 

      <div className='tracktlists-index'>


          <Masonry className='tracktlists-index-container'
          elementType={'ul'}
           options={{fitWidth: false, columnWidth: 200, gutter: 30}}>
          {tracktlists.reverse().map(tracktlist =>
          <TracktlistIndexItemContainer
           tracktlist = {tracktlist}
           key={tracktlist.id}/>)}

          </Masonry>
        </div>
          <Footer/>
  </div>
  }
}

export default withRouter(TracktlistIndex);