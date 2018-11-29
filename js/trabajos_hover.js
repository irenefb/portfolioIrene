  var q = {

    hovers: document.querySelectorAll('.trabajo')

    
    
}

  var r = {

    inicioHover: function(){
      for(var i=0; i<q.hovers.length;i++){
         q.hovers[i].addEventListener("mouseover", hover);
      }
     

    },

    hover: function() {

      console.log("hola")
      }


    }

  r.inicioHover();