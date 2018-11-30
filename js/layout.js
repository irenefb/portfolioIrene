window.onload = function(){
	var a = {
		navegador:window.innerHeight,
		anchoNavegador:window.innerWidth,		
		posicionScroll:0,
		section:document.querySelectorAll("section"),
		moverMenu:document.querySelector("#moverMenu"),
		enlacesMenu:document.querySelectorAll(".nav-link"),


		//habilidades
		habilidades: document.querySelector("#habilidades"),
		posicionH:null,
		tituloH:document.querySelector("#habilidadesTitulo"),
		longitudContenidoH:null,
		contenidoH: document.querySelector("#habilidadesContenido"),
		topContenidoH:null,

		//trabajos
		trabajos: document.querySelector("#trabajos"),
		posicionTT:null,
		tituloTT:document.querySelector("#trabajosTitulo"),
		longitudContenidoTT:null,
		contenidoTT: document.querySelector("#trabajosContenido"),
		topContenidoTT:null,

		//bio
		bio: document.querySelector("#bio"),
		posicionB:null,
		tituloB:document.querySelector("#bioTitulo"),
		longitudContenidoB:null,
		contenidoB: document.querySelector("#bioContenido"),
		topContenidoB:null

	}

	var b = {
		inicioScroll: function(){
			
			for(var i=0; i<a.section.length; i++){
				a.section[i].style.minHeight=a.navegador+"px";
			}

			window.addEventListener('resize', b.resize);

			document.addEventListener("scroll", b.scrollTexto);	
			document.addEventListener("scroll", b.moverMenu);	
			
	
		},

		resize: function(){
			a.navegador=window.innerHeight;
			a.anchoNavegador=window.innerWidth;

			for(var i=0; i<a.section.length; i++){
				a.section[i].style.minHeight=a.navegador+"px";
			}
				//bio
			if(a.anchoNavegador<768){
				a.tituloB.style.position="relative";
				a.contenidoB.style.left=0;
			};
			//trabajos
			if(a.anchoNavegador<768){
				a.tituloTT.style.position="relative";
				a.contenidoTT.style.left=0;
			};

			//habilidades
			if(a.anchoNavegador<768){
				a.tituloH.style.position="relative";
				a.contenidoH.style.left=0;
			};

		},
		scrollTexto: function(){

			//habilidades
			a.tituloH.style.height=a.navegador+"px";
			a.posicionH=a.habilidades.offsetTop;
			a.longitudContenidoH=a.contenidoH.clientHeight + a.habilidades.offsetTop -a.navegador;
			a.topContenidoH = a.contenidoH.clientHeight-a.navegador;

			//trabajos
			a.tituloTT.style.height=a.navegador+"px";
			a.posicionTT=a.trabajos.offsetTop;
			a.longitudContenidoTT=a.contenidoTT.clientHeight + a.trabajos.offsetTop -a.navegador;
			a.topContenidoTT = a.contenidoTT.clientHeight-a.navegador;

			//bio
			a.tituloB.style.height=a.navegador+"px";
			a.posicionB=a.bio.offsetTop;
			a.longitudContenidoB=a.contenidoB.clientHeight + a.bio.offsetTop -a.navegador;
			a.topContenidoB = a.contenidoB.clientHeight-a.navegador;



			a.posicionScroll = window.pageYOffset;

			//bio
			if(a.posicionScroll>a.posicionB && a.anchoNavegador>768){
				a.tituloB.style.position="fixed";
				a.tituloB.style.top="0px";
				a.contenidoB.style.left="50%";
			
				if(a.posicionScroll>a.longitudContenidoB){
					a.tituloB.style.position="absolute";
					a.tituloB.style.top=a.topContenidoB+"px";
					a.contenidoB.style.left="50%"
				}
			}
			else if(a.posicionScroll<a.posicionB && a.anchoNavegador>768) {
				a.tituloB.style.position="absolute";
				a.contenidoB.style.left="50%"
			}
			else if(a.anchoNavegador<768){
				a.tituloB.style.position="relative";
				a.contenidoB.style.left=0;
			};

			//trabajos
			if(a.posicionScroll>a.posicionTT && a.anchoNavegador>768){
				a.tituloTT.style.position="fixed";
				a.tituloTT.style.top="0px";
				a.contenidoTT.style.left="50%";
			
				if(a.posicionScroll>a.longitudContenidoTT){
					a.tituloTT.style.position="absolute";
					a.tituloTT.style.top=a.topContenidoTT+"px";
					a.contenidoTT.style.left="50%";
				}
			}else if(a.posicionScroll<a.posicionTT && a.anchoNavegador>768){

				a.tituloTT.style.position="absolute";
				a.contenidoTT.style.left="50%";
			}else if(a.anchoNavegador<768){
				a.tituloTT.style.position="relative";
				a.contenidoTT.style.left=0;
			};

			//habilidades
			if(a.posicionScroll>a.posicionH && a.anchoNavegador>768){
				a.tituloH.style.position="fixed";
				a.tituloH.style.top="0px";
				a.contenidoH.style.left="50%";
				a.contenidoH.style.left="50%";
			
				if(a.posicionScroll>a.longitudContenidoH){
					a.tituloH.style.position="absolute";
					a.tituloH.style.top=a.topContenidoH+"px";
					a.contenidoH.style.left="50%";
				}
			}else if(a.posicionScroll<a.posicionH && a.anchoNavegador>768){
				a.tituloH.style.position="absolute";
				a.contenidoH.style.left="50%";
			}else if(a.anchoNavegador<768){
				a.tituloH.style.position="relative";
				a.contenidoH.style.left=0;
			};

		},
		moverMenu: function(){
			if(a.posicionScroll>a.posicionB && a.anchoNavegador>768){
				a.moverMenu.classList.add("ancho50");
				a.moverMenu.classList.add("fixed-top");
				a.moverMenu.classList.add("bk-rosa");
				a.moverMenu.classList.remove("bk-blanco");
				a.moverMenu.classList.remove("bk-berenjena");
				for(var i=0; i<a.enlacesMenu.length; i++){
					a.enlacesMenu[i].classList.remove("tp-rosa");
				}
			}else if( a.anchoNavegador<768){
				a.moverMenu.classList.add("fixed-top");
			}else if(a.posicionScroll<a.posicionB && a.anchoNavegador>768){
				a.moverMenu.classList.remove("ancho50");
				a.moverMenu.classList.add("ancho100");
				a.moverMenu.classList.remove("fixed-top");
				a.moverMenu.classList.remove("bk-rosa");
				a.moverMenu.classList.add("bk-berenjena");	
			};
			if(a.posicionScroll>a.posicionTT && a.anchoNavegador>768){
				for(var i=0; i<a.enlacesMenu.length; i++){
					a.enlacesMenu[i].classList.add("tp-rosa");
				}
				a.moverMenu.classList.remove("bk-berenjena");
				a.moverMenu.classList.remove("bk-rosa");
				a.moverMenu.classList.add("bk-blanco");
			
			};
			if(a.posicionScroll>a.posicionH && a.anchoNavegador>768){
				for(var i=0; i<a.enlacesMenu.length; i++){
					a.enlacesMenu[i].classList.remove("tp-rosa");
				}
				a.moverMenu.classList.add("bk-berenjena");
				a.moverMenu.classList.remove("bk-rosa");
				a.moverMenu.classList.remove("bk-blanco");
			}else {

			};


		}

	}
	b.inicioScroll();
		
}
