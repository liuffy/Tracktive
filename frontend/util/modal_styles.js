export const authModalStyle = {
  overlay : {
   position        : 'fixed',
   top             : 0,
   left            : 0,
   right           : 0,
   bottom          : 0,
 background: 'rgba(0,0,0,0.2)',
   zIndex          : 50
 },
 content : {
   position        : 'fixed',
  boxShadow: '0.5px 0.5px 3px 0px rgba(0,0,0,0.8)',
   top             : '10%',
   left:'21%',
   width           : '580px',
   height          : '440px',
   background:'white',
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

