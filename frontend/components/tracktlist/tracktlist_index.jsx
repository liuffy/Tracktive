import React from 'react';
import TracktlistIndexItemContainer from './tracktlist_index_item_container';
import { withRouter, Link } from 'react-router';
import Masonry from 'react-masonry-component';
import Footer from '../footer/footer';
import ReactDOM from 'react-dom';
import FormModal from '../modals/form_modal';


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

// Scroller button
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200);   // Else fade out the arrow
        }
    });
    $('#return-to-top').click(function() {      // When arrow is clicked
        $('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 500);
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
              Why not <FormModal/>a new one?</h2>
            </div>
         } else {
            result = filteredTracktlists.map(tracktlist =>
              <TracktlistIndexItemContainer
               tracktlist = {tracktlist}
               key={tracktlist.id}/>
               )
           }

    } else {
      indexText = 'explore'
      result = tracktlists.map( (tracktlist, idx) =>
        <TracktlistIndexItemContainer
         tracktlist = {tracktlist}
         key={idx}/>
         )
      
    }

   return loading ? <div className="spinner">
    <img className="loader-logo" src="http://res.cloudinary.com/liuffy/image/upload/v1491921600/vinyl_pwajpu.svg"/>
    </div> :
    
    <div>
      <a href="javascript:" id="return-to-top"><i className="icon-chevron-up"></i></a>

      <div className="whole-index-page">
      <h2
        className="explore">{indexText}         <img 
        className="binoculars-logo"
        src="http://res.cloudinary.com/liuffy/image/upload/v1491888128/submarine-with-periscope-up_pz2z4y.svg" />
      </h2> 

      <div className='tracktlists-index'>
        <Masonry className='tracktlists-index-container'
          elementType={'ul'}
          options={{fitWidth: false, columnWidth: 200, gutter: 30}}>
          {result}
        </Masonry>
      </div>


      <Footer/>
      </div>
    </div>
  }
}

export default withRouter(TracktlistIndex);