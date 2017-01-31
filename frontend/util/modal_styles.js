export const authModalStyle = {
  overlay : {
   position        : 'fixed',
   top             : 0,
   left            : 0,
   right           : 0,
   bottom          : 0,
 background: 'rgba(214, 35, 254, 0.6)',
   zIndex          : 50
 },
 content : {
   position        : 'fixed',
  boxShadow: '0.5px 0.5px 3px 0px rgba(0,0,0,0.8)',
   top             : '10%',
   left:'30vw',
   width           : '400px',
   height          : '500px',
   background:'white',
   borderRadius    : '5px',
   border: 'none',
   padding         : 0,
   margin          : '0 auto',
   zIndex          : 51
 }
};


export const aboutModalStyle = {
  overlay : {
   position        : 'fixed',
   top             : 0,
   left            : 0,
   right           : 0,
   bottom          : 0,
   backgroundColor : 'rgba(214, 35, 254, 0.6)',
   zIndex          : 50
 },
 content : {
   position        : 'fixed',
   top             : '0px',
   left             : '0px',
   width           : '700px',
   height          : '600px',
   borderRadius    : '5px',
   padding         : 0,
   margin          : '0 auto',
   zIndex          : 51,
   overflow: 'scroll'
 }
};

// export const playlistModalStyle = (playing) => {
//   if(!playing){
//     return {
//       overlay : {
//        position        : 'fixed',
//        top             : 0,
//        left            : '100px',
//        right           : 0,
//        bottom          : 0,
//        backgroundColor : 'rgba(17, 18, 20, 0.4)',
//        zIndex          : 50
//      },
//      content : {
//        position        : 'relative',
//        top             : 0,
//        right           : 0,
//        bottom          : 0,
//        borderRadius    : '0px',
//        width           : '70%',
//        height          : '100%',
//        padding         : 0,
//        float           : 'right',
//        zIndex          : 51
//      }
//    };
//  } else {
//    return {
//      overlay : {
//       position        : 'fixed',
//       top             : 0,
//       left            : '100px',
//       right           : '245px',
//       bottom          : 0,
//       backgroundColor : 'rgba(17, 18, 20, 0.75)',
//       zIndex          : 50
//     },
//     content : {
//       position        : 'relative',
//       top             : 0,
//       right           : 0,
//       bottom          : 0,
//       borderRadius    : '0px',
//       width           : '70%',
//       height          : '100%',
//       padding         : 0,
//       float           : 'right',
//       zIndex          : 51
//     }
//   };
//  }
// };

// export const searchModalStyle = {
//     overlay : {
//      position        : 'fixed',
//      top             : 0,
//      left            : '100px',
//      right           : 0,
//      bottom          : 0,
//      backgroundColor : 'rgba(17, 18, 20, 0.75)',
//      zIndex          : 100,
//    },
//    content : {
//      position        : 'relative',
//      top             : 0,
//      right           : 0,
//      bottom          : 0,
//      left            : '-5px',
//      width           : '250px',
//      height          : '100%',
//      backgroundColor : 'rgba(34, 35, 38, 1)',
//      zIndex          : 101,
//      border          : null
//    }
// };