/*funci� d'inicialitzaci� de les variables de l'aplicaci�*/
function iniciar(){
	/* obtenim element caixadades del fitxer html*/
	//caixadades=document.getElementById('caixadades');
	/* obtenim el boto */
	var botoLou=document.getElementById('mortLou');
	/*afegim un listener al click del bot�, que executar� la funci� llegir */
	botoLou.addEventListener('click', llegirLou, false);
	/* obtenim el boto */
	var botoSterling=document.getElementById('mortSterling');
	/*afegim un listener al click del bot�, que executar� la funci� llegir */
	botoSterling.addEventListener('click', llegirSterling, false);
	/* obtenim el boto */
	var botoOrigenLou=document.getElementById('origenLou');
	/*afegim un listener al click del bot�, que executar� la funci� llegir */
	botoOrigenLou.addEventListener('click', llegirOrigenLou, false);
	/* obtenim el boto */
	var botoOrigenJohn=document.getElementById('origenJohn');
	/*afegim un listener al click del bot�, que executar� la funci� llegir */
	botoOrigenJohn.addEventListener('click', llegirOrigenJohn, false);
	/* obtenim el boto */
	var botoOrigenSterling=document.getElementById('origenSterling');
	/*afegim un listener al click del bot�, que executar� la funci� llegir */
	botoOrigenSterling.addEventListener('click', llegirOrigenSterling, false);
	/* obtenim el boto */
	var botoOrigenMaureen=document.getElementById('origenMaureen');
	/*afegim un listener al click del bot�, que executar� la funci� llegir */
	botoOrigenMaureen.addEventListener('click', llegirOrigenMaureen, false);
}

/*funci� que s'executa al fer clic al bot�*/
function llegirLou(){
	/*obtenim el fitxer a carregar, ha d'estar en l'arrel del servidor */
	var url="../ajax/mortLou.txt";
	/*Iniciem una sol�licitud XMLHttpRequest */
	var sollicitud=new XMLHttpRequest();
	/*Afegim un listener, quan s'acabe de carregar el fitxer, ha d'executar la funci� mostrar() */
	sollicitud.addEventListener('load',mostrarLou,false);
	/*Es configura la petici� al servidor, GET , fitxer a processar: url, ass�ncrona (true)*/
	sollicitud.open("GET", url, true);
	/*inicia la sol�licitud, en aquesta ocasi�, no s'envia res*/
	sollicitud.send(null);
}

/*funci� que s'executa al fer clic al bot�*/
function llegirSterling(){
	/*obtenim el fitxer a carregar, ha d'estar en l'arrel del servidor */
	var url="../ajax/mortSterling.txt";
	/*Iniciem una sol�licitud XMLHttpRequest */
	var sollicitud=new XMLHttpRequest();
	/*Afegim un listener, quan s'acabe de carregar el fitxer, ha d'executar la funci� mostrar() */
	sollicitud.addEventListener('load',mostrarSterling,false);
	/*Es configura la petici� al servidor, GET , fitxer a processar: url, ass�ncrona (true)*/
	sollicitud.open("GET", url, true);
	/*inicia la sol�licitud, en aquesta ocasi�, no s'envia res*/
	sollicitud.send(null);
}

/*funci� que s'executa al fer clic al bot�*/
function llegirOrigenLou(){
	/*obtenim el fitxer a carregar, ha d'estar en l'arrel del servidor */
	var url="../ajax/origenLou.txt";
	/*Iniciem una sol�licitud XMLHttpRequest */
	var sollicitud=new XMLHttpRequest();
	/*Afegim un listener, quan s'acabe de carregar el fitxer, ha d'executar la funci� mostrar() */
	sollicitud.addEventListener('load',mostrarOrigenLou,false);
	/*Es configura la petici� al servidor, GET , fitxer a processar: url, ass�ncrona (true)*/
	sollicitud.open("GET", url, true);
	/*inicia la sol�licitud, en aquesta ocasi�, no s'envia res*/
	sollicitud.send(null);
}
/*funci� que s'executa al fer clic al bot�*/
function llegirOrigenJohn(){
	/*obtenim el fitxer a carregar, ha d'estar en l'arrel del servidor */
	var url="../ajax/origenJohn.txt";
	/*Iniciem una sol�licitud XMLHttpRequest */
	var sollicitud=new XMLHttpRequest();
	/*Afegim un listener, quan s'acabe de carregar el fitxer, ha d'executar la funci� mostrar() */
	sollicitud.addEventListener('load',mostrarOrigenJohn,false);
	/*Es configura la petici� al servidor, GET , fitxer a processar: url, ass�ncrona (true)*/
	sollicitud.open("GET", url, true);
	/*inicia la sol�licitud, en aquesta ocasi�, no s'envia res*/
	sollicitud.send(null);
}
/*funci� que s'executa al fer clic al bot�*/
function llegirOrigenSterling(){
	/*obtenim el fitxer a carregar, ha d'estar en l'arrel del servidor */
	var url="../ajax/origenSterling.txt";
	/*Iniciem una sol�licitud XMLHttpRequest */
	var sollicitud=new XMLHttpRequest();
	/*Afegim un listener, quan s'acabe de carregar el fitxer, ha d'executar la funci� mostrar() */
	sollicitud.addEventListener('load',mostrarOrigenSterling,false);
	/*Es configura la petici� al servidor, GET , fitxer a processar: url, ass�ncrona (true)*/
	sollicitud.open("GET", url, true);
	/*inicia la sol�licitud, en aquesta ocasi�, no s'envia res*/
	sollicitud.send(null);
}
/*funci� que s'executa al fer clic al bot�*/
function llegirOrigenMaureen(){
	/*obtenim el fitxer a carregar, ha d'estar en l'arrel del servidor */
	var url="../ajax/origenMaureen.txt";
	/*Iniciem una sol�licitud XMLHttpRequest */
	var sollicitud=new XMLHttpRequest();
	/*Afegim un listener, quan s'acabe de carregar el fitxer, ha d'executar la funci� mostrar() */
	sollicitud.addEventListener('load',mostrarOrigenMaureen,false);
	/*Es configura la petici� al servidor, GET , fitxer a processar: url, ass�ncrona (true)*/
	sollicitud.open("GET", url, true);
	/*inicia la sol�licitud, en aquesta ocasi�, no s'envia res*/
	sollicitud.send(null);
}
/*funci� que mostra en la caixa de dades el contingut del fitxer*/
function mostrarLou(e){
	/*modifica el contingut de l'element caixadades amb innerHTML, inserint la resposta del Servidor: responseText*/
	/*alert(e.target.responseText);*/
	var causaMortLou=document.getElementById("causaMortLou");
	var txt="<div class=\"alert alert-danger\"><a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times;</a><strong> Causa: </strong>"+e.target.responseText+"</div>";
	causaMortLou.innerHTML=txt;
}
/*funci� que mostra en la caixa de dades el contingut del fitxer*/
function mostrarSterling(e){
	/*modifica el contingut de l'element caixadades amb innerHTML, inserint la resposta del Servidor: responseText*/
	/*alert(e.target.responseText);*/
	var causaMortSterling=document.getElementById("causaMortSterling");
	var txt="<div class=\"alert alert-danger\"><a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times;</a><strong> Causa: </strong>"+e.target.responseText+"</div>";
	causaMortSterling.innerHTML=txt;
}
/*funci� que mostra en la caixa de dades el contingut del fitxer*/
function mostrarOrigenLou(e){
	/*modifica el contingut de l'element caixadades amb innerHTML, inserint la resposta del Servidor: responseText*/
	/*alert(e.target.responseText);*/
	var llocOrigenLou=document.getElementById("llocOrigenLou");
	var txt="<div class=\"alert alert-info\"><a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times;</a><strong> Lloc d'origen: </strong> <a href=\""+e.target.responseText+"\">Brooklyn, en Google Maps</a></div>";
	llocOrigenLou.innerHTML=txt;
}
/*funci� que mostra en la caixa de dades el contingut del fitxer*/
function mostrarOrigenJohn(e){
	/*modifica el contingut de l'element caixadades amb innerHTML, inserint la resposta del Servidor: responseText*/
	/*alert(e.target.responseText);*/
	var llocOrigenJohn=document.getElementById("llocOrigenJohn");
	var txt="<div class=\"alert alert-info\"><a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times;</a><strong> Lloc d'origen: </strong> <a href=\""+e.target.responseText+"\">Garnant, en Google Maps</a></div>";
	llocOrigenJohn.innerHTML=txt;
}
/*funci� que mostra en la caixa de dades el contingut del fitxer*/
function mostrarOrigenSterling(e){
	/*modifica el contingut de l'element caixadades amb innerHTML, inserint la resposta del Servidor: responseText*/
	/*alert(e.target.responseText);*/
	var llocOrigenSterling=document.getElementById("llocOrigenSterling");
	var txt="<div class=\"alert alert-info\"><a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times;</a><strong> Lloc d'origen: </strong> <a href=\""+e.target.responseText+"\">East Meadow, en Google Maps</a></div>";
	llocOrigenSterling.innerHTML=txt;
}
/*funci� que mostra en la caixa de dades el contingut del fitxer*/
function mostrarOrigenMaureen(e){
	/*modifica el contingut de l'element caixadades amb innerHTML, inserint la resposta del Servidor: responseText*/
	/*alert(e.target.responseText);*/
	var llocOrigenMaureen=document.getElementById("llocOrigenMaureen");
	var txt="<div class=\"alert alert-info\"><a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times;</a><strong> Lloc d'origen: </strong> <a href=\""+e.target.responseText+"\">Jackson Heights, Queens, en Google Maps</a></div>";
	llocOrigenMaureen.innerHTML=txt;
}
/*Quan s'acabe de carregar la p�gina, executa la funci� iniciar() */
window.addEventListener('load', iniciar, false);