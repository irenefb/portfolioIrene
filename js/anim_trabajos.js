  var k = {

    path: document.querySelectorAll('.lineaTrabajos'),
    pathLength: null,
    scrollPercentage: null,
    drawLength: null
    
    
}

  var l = {

    animBio: function(){
      for(var i=0; i<k.path.length;i++){
        k.pathLength = k.path[i].getTotalLength();
        k.path[i].style.strokeDasharray = k.pathLength + ' ' + k.pathLength;
        k.path[i].style.strokeDashoffset = k.pathLength;
        k.path[i].getBoundingClientRect();
      }
      window.addEventListener("scroll", l.inicioAnim);
    },

    inicioAnim: function(e) {

      k.scrollPercentage = (document.documentElement.scrollTop*2 + document.body.scrollTop) / (document.documentElement.scrollHeight-document.documentElement.clientHeight);  

        k.drawLength = k.pathLength * k.scrollPercentage;     

      for(var i=0; i<k.path.length;i++){
        k.path[i].style.strokeDashoffset = k.pathLength - k.drawLength;       

        if (k.scrollPercentage >= 0.99) {
          k.path[i].style.strokeDasharray = "none";       
        } else {
          k.path[i].style.strokeDasharray = k.pathLength + ' ' + k.pathLength;
        }
      }
      
      }
    }

  l.animBio();