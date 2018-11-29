//window.onload = function(){
var e = {

	medidorPh: document.querySelector("#medidorPhotoshop"),
	medidorIl: document.querySelector("#medidorIllustrator"),
	medidorIn: document.querySelector("#medidorIndesign"),
	medidorHt: document.querySelector("#medidorHtml"),
	medidorCs: document.querySelector("#medidorCss"),
	medidorJs: document.querySelector("#medidorJs"),
	medidorWp: document.querySelector("#medidorWp"),
	medidorAn: document.querySelector("#medidorAngular"),
	medidorJe: document.querySelector("#medidorJekyll"),
	medidorMo: document.querySelector("#medidorMongo"),
	medidorMod: document.querySelector("#medidorModelado"),
	medidorIlu: document.querySelector("#medidorIlum"),
	medidorLay: document.querySelector("#medidorLayout"),
	medidorPos: document.querySelector("#medidorPostpo"),
	longitudMPh:null,
	longitudMIl:null,
	longitudMIn:null,
	longitudMHt:null,
	longitudMCs:null,
	longitudMJs:null,
	longitudMWp:null,
	longitudMAn:null,
	longitudMJe:null,
	longitudMMo:null,
	longitudMMod:null,
	longitudMIlu:null,
	longitudMLay:null,
	longitudMPos:null,

	posicionScroll:0,
	habilidades: document.querySelector("#habilidades"),
	posicionHabilidades:null,
	navegador:window.innerHeight
}

var f = {
	inicioHabilidades: function(){
		e.posicionHabilidades=e.habilidades.offsetTop;
		
		e.longitudMPh= e.medidorPh.getTotalLength();
		e.medidorPh.style.strokeDasharray=e.longitudMPh;
		e.medidorPh.style.strokeDashoffset=e.longitudMPh;

		e.longitudMIl= e.medidorIl.getTotalLength();
		e.medidorIl.style.strokeDasharray=e.longitudMIl;
		e.medidorIl.style.strokeDashoffset=e.longitudMIl;

		e.longitudMIn= e.medidorIn.getTotalLength();
		e.medidorIn.style.strokeDasharray=e.longitudMIn;
		e.medidorIn.style.strokeDashoffset=e.longitudMIn;

		e.longitudMHt= e.medidorHt.getTotalLength();
		e.medidorHt.style.strokeDasharray=e.longitudMHt;
		e.medidorHt.style.strokeDashoffset=e.longitudMHt;

		e.longitudMCs= e.medidorCs.getTotalLength();
		e.medidorCs.style.strokeDasharray=e.longitudMCs;
		e.medidorCs.style.strokeDashoffset=e.longitudMCs;

		e.longitudMJs= e.medidorJs.getTotalLength();
		e.medidorJs.style.strokeDasharray=e.longitudMJs;
		e.medidorJs.style.strokeDashoffset=e.longitudMJs;

		e.longitudMWp= e.medidorWp.getTotalLength();
		e.medidorWp.style.strokeDasharray=e.longitudMWp;
		e.medidorWp.style.strokeDashoffset=e.longitudMWp;

		e.longitudMAn= e.medidorAn.getTotalLength();
		e.medidorAn.style.strokeDasharray=e.longitudMAn;
		e.medidorAn.style.strokeDashoffset=e.longitudMAn;

		e.longitudMJe= e.medidorJe.getTotalLength();
		e.medidorJe.style.strokeDasharray=e.longitudMJe;
		e.medidorJe.style.strokeDashoffset=e.longitudMJe;

		e.longitudMMo= e.medidorMo.getTotalLength();
		e.medidorMo.style.strokeDasharray=e.longitudMMo;
		e.medidorMo.style.strokeDashoffset=e.longitudMMo;

		e.longitudMMod= e.medidorMod.getTotalLength();
		e.medidorMod.style.strokeDasharray=e.longitudMMod;
		e.medidorMod.style.strokeDashoffset=e.longitudMMod;

		e.longitudMIlu= e.medidorIlu.getTotalLength();
		e.medidorIlu.style.strokeDasharray=e.longitudMIlu;
		e.medidorIlu.style.strokeDashoffset=e.longitudMIlu;

		e.longitudMLay= e.medidorLay.getTotalLength();
		e.medidorLay.style.strokeDasharray=e.longitudMLay;
		e.medidorLay.style.strokeDashoffset=e.longitudMLay;

		e.longitudMPos= e.medidorPos.getTotalLength();
		e.medidorPos.style.strokeDasharray=e.longitudMPos;
		e.medidorPos.style.strokeDashoffset=e.longitudMPos;



		document.addEventListener("scroll", f.animHabilidades);
		},

	animHabilidades: function(){
		e.posicionScroll = window.pageYOffset;


		if(e.posicionScroll>e.posicionHabilidades){
				e.medidorPh.classList.add("anim");
				e.medidorPh.style.strokeDashoffset=0;

				e.medidorIl.classList.add("animIl");
				e.medidorIl.style.strokeDashoffset=0;

				e.medidorIn.classList.add("animIn");
				e.medidorIn.style.strokeDashoffset=0;

				e.medidorHt.classList.add("animHt");
				e.medidorHt.style.strokeDashoffset=0;

				e.medidorCs.classList.add("animCs");
				e.medidorCs.style.strokeDashoffset=0;

				e.medidorJs.classList.add("animJs");
				e.medidorJs.style.strokeDashoffset=0;

				e.medidorWp.classList.add("animWp");
				e.medidorWp.style.strokeDashoffset=0;

				e.medidorAn.classList.add("animAn");
				e.medidorAn.style.strokeDashoffset=0;

				e.medidorJe.classList.add("animJe");
				e.medidorJe.style.strokeDashoffset=0;

				e.medidorMo.classList.add("animMo");
				e.medidorMo.style.strokeDashoffset=0;

				e.medidorMod.classList.add("animMod");
				e.medidorMod.style.strokeDashoffset=0;

				e.medidorIlu.classList.add("animIlu");
				e.medidorIlu.style.strokeDashoffset=0;

				e.medidorLay.classList.add("animLay");
				e.medidorLay.style.strokeDashoffset=0;

				e.medidorPos.classList.add("animPos");
				e.medidorPos.style.strokeDashoffset=0;
			
			};
	
	}
}
f.inicioHabilidades();
		
//}
