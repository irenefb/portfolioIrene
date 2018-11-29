
var o = {

	posicionScroll: 0,
	botonera: document.querySelectorAll("nav ul li a"),
	ruta: null,
	intervalo: null,
	destinoScroll: 0,
	moverMenu:document.querySelector("#moverMenu"),
	enlacesMenu:document.querySelectorAll(".nav-link"),
	//bio: document.querySelector("#bio"),
	//posicionB:null,

}


var p = {

	inicioMenu: function() {

		for(var i = 0; i < o.botonera.length; i++){

			o.botonera[i].addEventListener("click", p.desplazamiento);
			//o.botonera[i].addEventListener("click", p.pintarMenu);
			

		}
		console.log("posicion scroll",o.posicionScroll)
					console.log("destino",o.destinoScroll)

	},

	desplazamiento: function(ruta){
		//o.posicionB=o.bio.offsetTop;
		
		//o.posicionScroll=window.pageYOffset;

		ruta.preventDefault();
		
		o.ruta = ruta.target.getAttribute("href");

		o.destinoScroll = (document.querySelector(o.ruta).offsetTop)+5;
	
		o.intervalo = setInterval(function(){	

			if(o.posicionScroll <= o.destinoScroll){

				o.posicionScroll += 150;
	
				
	
				if(o.posicionScroll == o.destinoScroll){

					//o.posicionScroll = o.destinoScroll;
					console.log("avanza")
					console.log("posicion scroll",o.posicionScroll)
					console.log("destino",o.destinoScroll)

					clearInterval(o.intervalo)

				}

			}else{

				o.posicionScroll -= 150;

				if(o.posicionScroll <= o.destinoScroll){
										console.log("vuelve atrás")
					console.log("posicion scroll",o.posicionScroll)
					console.log("destino",o.destinoScroll)


					o.posicionScroll = o.destinoScroll;

					clearInterval(o.intervalo)

				}
			}

			window.scrollTo(0, o.posicionScroll);

		},50)

	},

}

p.inicioMenu();