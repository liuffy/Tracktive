import React from 'react';
import TracktlistIndexItemContainer from './tracktlist_index_item_container';
import {withRouter, Link} from 'react-router';
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

    const {loading} = this.props;

    $(window).scroll(function(){
    $(".explore").css("opacity", 1 - $(window).scrollTop() / 250);
    });

// SEARCHING!
  let {query, tracktlists} = this.props;
    let result = [];

    if (query.length > 0){
        let filteredTracktlists = tracktlists.filter( (tracktlist) => { 
          let artists = tracktlist.artists.toLowerCase() // these are all the artists
          return artists.match(query.toLowerCase()) // include if some (any) of the artists match the query
        })
        // console.log(query);
        // console.log('if statement');
        // console.log(filteredTracktlists.length);

        if (filteredTracktlists.length < 1 ) { // nested if statement
            // console.log('else if');
            result = 
            <div className="no-tracktlists">
              <h2> Seems like <span className="query-name">{query}</span> hasn't been featured in any tracktlists yet.
              Why not <Link className="link" to={'/tracktlists/new'}>create a new one?</Link></h2>
              <img className="thumbprint" src="http://res.cloudinary.com/liuffy/image/upload/v1486250085/transparent_thumbprint_m42mma.png" />
            </div>
         } else {
            result = filteredTracktlists.map(tracktlist =>
              <TracktlistIndexItemContainer
               tracktlist = {tracktlist}
               key={tracktlist.id}/>
               )
            }

    } 
    else {
      // console.log('else statement')
      result = tracktlists.map(tracktlist =>
          <TracktlistIndexItemContainer
           tracktlist = {tracktlist}
           key={tracktlist.id}/>
           )
      
    }

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
      
           {result}
          </Masonry>
      </div>


          <Footer/>
  </div>
  }
}

export default withRouter(TracktlistIndex);