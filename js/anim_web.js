
  var r = {

    path: document.querySelectorAll('.dbjWeb'),
    pathLength: null,
    scrollPercentage: null,
    drawLength: null
     
    
}

  var s = {
   

    animWeb: function(){
       
      for(var i=0; i<r.path.length;i++){
        r.pathLength = r.path[i].getTotalLength();
        r.path[i].style.strokeDasharray = r.pathLength + ' ' + r.pathLength;
        r.path[i].style.strokeDashoffset = r.pathLength;
        r.path[i].getBoundingClientRect();
      }


      setTimeout (function(e){
        console.log("holichurri")
        for(var i=0; i<r.path.length;i++){
          r.path[i].classList.add("animWeb");
          r.path[i].style.strokeDashoffset=0;
        }

      }
      , 500)
     
    }
  }

  s.animWeb();


  /* window.onload=function(e) {
        console.log("holichurri")
        for(var i=0; i<r.path.length;i++){
          r.path[i].classList.add("animWeb");
          r.path[i].style.strokeDashoffset=0;
        }
      
      }*/