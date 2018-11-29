//window.onload = function(){
	var c = {
		navegador:window.innerHeight,		
		
		trabajo:document.querySelectorAll(".trabajo"),
		img:document.querySelectorAll(".trabajo img"),

		
	}

	var d = {
		inicioTrabajo: function(){
			for(var i=0; i<c.trabajo.length; i++){
				c.trabajo[i].style.height=(c.navegador/2)+"px";
				//c.img[i].style.height=(c.navegador/2)+"px";

				c.trabajo[i].addEventListener("mouseover", d.inicioHover);

			}	
		},


		inicioHover: function() {

      		for(var i=0; i<c.img.length; i++){
      			c.img[i].classList.add("imgAnimHover");
      		}

      	},



	}
	d.inicioTrabajo();
		
//}
