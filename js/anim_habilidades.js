  
  var m = {

    path: document.querySelectorAll('.lineaHabilidades'),
    pathLength: null,
    scrollPercentage: null,
    drawLength: null,
    posicionScroll:null ,
    posicionH: null,
    habilidades: document.querySelector("#habilidades"),
    longitudHabilidades:null,
    navegador:window.innerHeight
    
}

  var n = {


    animBio: function(){
      for(var i=0; i<m.path.length;i++){
        m.pathLength = m.path[i].getTotalLength();
        m.path[i].style.strokeDasharray = m.pathLength + ' ' + m.pathLength;
        m.path[i].style.strokeDashoffset = m.pathLength;
        m.path[i].getBoundingClientRect();
      }
      window.addEventListener("scroll", n.inicioAnim);
    },

    inicioAnim: function(e) {
      m.posicionScroll= window.pageYOffset;
      m.posicionH=m.habilidades.offsetTop;
      m.longitudHabilidades=m.habilidades.clientHeight;
      m.scrollPercentage =-(m.posicionScroll-(m.posicionH-m.navegador))/(m.posicionScroll-(m.posicionH+m.navegador));


     /* m.scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight-document.documentElement.clientHeight);  */

       
        

      for(var i=0; i<m.path.length;i++){
 
        m.path[i].style.strokeDashoffset = (m.path[i].getTotalLength()) -(m.path[i].getTotalLength() * m.scrollPercentage);
     

        if (m.scrollPercentage >= 0.99|| m.scrollPercentage <= -1) {
          m.path[i].style.strokeDasharray = "none";       
        } else {
          m.path[i].style.strokeDasharray = m.pathLength + ' ' + m.pathLength;
        }
      }
      
      }
    }

  n.animBio();