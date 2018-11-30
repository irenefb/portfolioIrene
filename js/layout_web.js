window.onload = function(){
	var q = {
		navegador:window.innerHeight,
		anchoNavegador:window.innerWidth,		
		posicionScroll:0,
		section:document.querySelectorAll("section"),
	
		//web
		web: document.querySelector("#web1"),
		posicionW:null,
		tituloW:document.querySelector("#web1Titulo"),
		longitudContenidoW:null,
		contenidoW: document.querySelector("#web1Contenido"),
		topContenidoW:null,

		//web2
		web2: document.querySelector("#web2"),
		posicionW2:null,
		tituloW2:document.querySelector("#web2Titulo"),
		longitudContenidoW2:null,
		contenidoW2: document.querySelector("#web2Contenido"),
		topContenidoW2:null,

		//web3
		web3: document.querySelector("#web3"),
		posicionW3:null,
		tituloW3:document.querySelector("#web3Titulo"),
		longitudContenidoW3:null,
		contenidoW3: document.querySelector("#web3Contenido"),
		topContenidoW3:null,


	}

	var r = {
		inicioScroll: function(){
			
			for(var i=0; i<q.section.length; i++){
				q.section[i].style.minHeight=q.navegador+"px";
			}

			window.addEventListener('resize', r.resize);
			document.addEventListener("scroll", r.scrollTexto);	

			
	
		},

		resize: function(){

			q.navegador=window.innerHeight;
			q.anchoNavegador=window.innerWidth;

			for(var i=0; i<q.section.length; i++){
				q.section[i].style.minHeight=q.navegador+"px";
			}
			//web1
			if(q.anchoNavegador<768){
				q.tituloW.style.position="relative";
				q.contenidoW.style.left=0;
			};
			//web2
			if(q.anchoNavegador<768){
				q.tituloW2.style.position="relative";
				q.contenidoW2.style.left=0;
			};
			//web3
			if(q.anchoNavegador<768){
				q.tituloW3.style.position="relative";
				q.contenidoW3.style.left=0;
			};

		},
		scrollTexto: function(){
			//web1
			q.tituloW.style.height=q.navegador+"px";
			q.posicionW=q.web.offsetTop;
			q.longitudContenidoW=q.contenidoW.clientHeight + q.web.offsetTop -q.navegador;
			q.topContenidoW = q.contenidoW.clientHeight-q.navegador;

			//web2
			q.tituloW2.style.height=q.navegador+"px";
			q.posicionW2=q.web2.offsetTop;
			q.longitudContenidoW2=q.contenidoW2.clientHeight + q.web2.offsetTop -q.navegador;
			q.topContenidoW2 = q.contenidoW2.clientHeight-q.navegador;

			//web3
			q.tituloW3.style.height=q.navegador+"px";
			q.posicionW3=q.web3.offsetTop;
			q.longitudContenidoW3=q.contenidoW3.clientHeight + q.web3.offsetTop -q.navegador;
			q.topContenidoW3 = q.contenidoW3.clientHeight-q.navegador;


			q.posicionScroll = window.pageYOffset;

			
			//web1
			if(q.posicionScroll>q.posicionW && q.anchoNavegador>768){
				q.tituloW.style.position="fixed";
				q.tituloW.style.top="0px";
				q.contenidoW.style.left="40%";

			
				if(q.posicionScroll>q.longitudContenidoW){
					q.tituloW.style.position="absolute";
					q.tituloW.style.top=q.topContenidoW+"px";
					q.contenidoW.style.left="40%";
				}
			}else if(q.posicionScroll<q.posicionW && q.anchoNavegador>768){
				q.tituloW.style.position="absolute";
				q.contenidoW.style.left="40%";
			}else if(q.anchoNavegador<768){
				q.tituloW.style.position="relative";
				q.contenidoW.style.left=0;
			};
			//web2
			if(q.posicionScroll>q.posicionW2 && q.anchoNavegador>768){
				q.tituloW2.style.position="fixed";
				q.tituloW2.style.top="0px";
				q.contenidoW2.style.left="40%";

			
				if(q.posicionScroll>q.longitudContenidoW2){
					q.tituloW2.style.position="absolute";
					q.tituloW2.style.top=q.topContenidoW2+"px";
					q.contenidoW2.style.left="40%";
				}
			}else if(q.posicionScroll<q.posicionW2 && q.anchoNavegador>768){
				q.tituloW2.style.position="absolute";
				q.contenidoW2.style.left="40%";
			}else if(q.anchoNavegador<768){
				q.tituloW2.style.position="relative";
				q.contenidoW2.style.left=0;
			};
			//web3
			if(q.posicionScroll>q.posicionW3 && q.anchoNavegador>768){
				q.tituloW3.style.position="fixed";
				q.tituloW3.style.top="0px";
				q.contenidoW3.style.left="30%";

			
				if(q.posicionScroll>q.longitudContenidoW3){
					q.tituloW3.style.position="absolute";
					q.tituloW3.style.top=q.topContenidoW3+"px";
					q.contenidoW3.style.left="30%";
				}
			}else if(q.posicionScroll<q.posicionW3 && q.anchoNavegador>768){
				q.tituloW3.style.position="absolute";
				q.contenidoW3.style.left="30%";
			}else if(q.anchoNavegador<768){
				q.tituloW3.style.position="relative";
				q.contenidoW3.style.left=0;
			};

		},
		



	}
	r.inicioScroll();
		
}
