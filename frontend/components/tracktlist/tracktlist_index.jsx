import React from 'react';
import TracktlistIndexItemContainer from './tracktlist_index_item_container';
import {withRouter, Link} from 'react-router';
import Masonry from 'react-masonry-component';
import Footer from '../footer/footer';
import ReactDOM from 'react-dom';

class TracktlistIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchTracktlists();
  }

  componentWillUnMount() {
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
    let indexText;

    if (query.length > 0){
        indexText = 'search'
        let filteredTracktlists = tracktlists.filter( (tracktlist) => { 
          let artists = tracktlist.artists.toLowerCase() // these are all the artists
          return artists.match(query.toLowerCase()) // include if some (any) of the artists match the query
        })

        if (filteredTracktlists.length < 1 ) { // nested if statement
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
      indexText = 'explore'
      result = tracktlists.map( (tracktlist, idx) =>
          <TracktlistIndexItemContainer
           tracktlist = {tracktlist}
           key={idx}/>
           )
      
    }

   return loading ? <div className="spinner">
  <img className="loader-logo" src="http://res.cloudinary.com/liuffy/image/upload/v1485894607/wordmark-2_m4clkf.png"/>
</div> :
<div className="whole-index-page">
        <h2
          className="explore">{indexText}         <img 
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