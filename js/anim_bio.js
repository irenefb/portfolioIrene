  var g = {

    path: document.querySelectorAll('.lineaBio'),
    pathLength: null,
    scrollPercentage: null,
    drawLength: null,
    posicionScroll:null ,
    posicionB: null,
    bio: document.querySelector("#bio"),
    longitudBio:null,
    navegador:window.innerHeight,
    
    
}

  var h = {

    animBio: function(){
      for(var i=0; i<g.path.length;i++){
        g.pathLength = g.path[i].getTotalLength();
        g.path[i].style.strokeDasharray = g.pathLength + ' ' + g.pathLength;
        g.path[i].style.strokeDashoffset = g.pathLength;
        g.path[i].getBoundingClientRect();
      }
      window.addEventListener("scroll", h.inicioAnim);
    },

    inicioAnim: function(e) {
      g.posicionScroll= window.pageYOffset;
      g.posicionB=g.bio.offsetTop;
      g.longitudBio=g.bio.clientHeight;
      g.scrollPercentage =-(g.posicionScroll-(g.posicionB-g.navegador))/(g.posicionScroll-(g.posicionB+g.navegador));


      /*g.scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.clientHeight+300);  */

      g.drawLength = g.pathLength * g.scrollPercentage;  
 

      for(var i=0; i<g.path.length;i++){
        g.path[i].style.strokeDashoffset = g.pathLength - g.drawLength;       

        if (g.scrollPercentage >= 0.99 || g.scrollPercentage <= -1 ) {
          g.path[i].style.strokeDasharray = "none";       
        } else {
          g.path[i].style.strokeDasharray = g.pathLength + ' ' + g.pathLength;
        }
      }
      
      }
    }

  h.animBio();