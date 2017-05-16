// JavaScript Document

var fecha = new Date();
var mes = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];


document.getElementById('titulo').textContent = fecha.getDate() + " de " + mes[fecha.getMonth()] + " de " + fecha.getFullYear();

document.getElementById("time").textContent = "El timestamp actual en segundos es: " + Math.round(new Date().getTime()/1000);



var fechaEntrada = new Pikaday({
    field: document.getElementById('datCom_1'),
    i18n: {
      previousMonth : 'Anterior',
      nextMonth     : 'Siguiente',
      months        : ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
      weekdays      : ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'],
      weekdaysShort : ['Dom','Lun','Mar','Mie','Jue','Vie','Sáb'],
    },
    firstDay: 1,
	format: 'DD/MM/YYYY',
	onSelect: function(data) {
      document.getElementById("datCom_2").disabled = false;
	  var dia = data.getDate().toString();
	  dia = dia.length > 1 ? dia = dia : dia = "0"+dia;
	  var mes = (data.getMonth()+1).toString();
	  mes = mes.length > 1 ? mes = mes : mes = "0"+mes;
	  var ano = data.getFullYear().toString();
	  var fechaMySQL = ano+"-"+mes+"-"+dia;
	  document.getElementById("comfirmacion").textContent = fechaMySQL;
    }
  });
  
var fechaSalida = new Pikaday({
    field: document.getElementById('datCom_2'),
	i18n: {
      previousMonth : 'Anterior',
      nextMonth     : 'Siguiente',
      months        : ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
      weekdays      : ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'],
      weekdaysShort : ['Dom','Lun','Mar','Mie','Jue','Vie','Sáb'],
    },
    firstDay: 1,
	format: 'DD/MM/YYYY',
	 onSelect: function(fecha) {
		 var entrada = document.getElementById("datCom_1").value;
		 var salida = document.getElementById("datCom_2").value;
		 if(entrada > salida){
			 document.getElementById("aviso").style.display = "block";
		 }else {
			 document.getElementById("aviso").style.display = "none";
		 }
		 
    }
  });
  
  
  
  
  
  document.getElementById("boto1").addEventListener("click", function(){
	  
	  	  var paraMes = document.getElementById("elMes").value;
		  var mesEscogido = moment().month(paraMes);
		  
		  var cardinal = [7,1,2,3,4,5,6];
		  var esNumeroDia = (moment(mesEscogido).format('D')-1);
		  var empiezaElDia = moment(mesEscogido).subtract(esNumeroDia, 'days');
		  var elCardinal = moment(empiezaElDia).format('e');
		  
		  
		  /*semanas del mes*/
		  var diasDeEsteMes = moment(mesEscogido).daysInMonth();
		  var delA = moment(mesEscogido).date(diasDeEsteMes);
		  var delB = moment(mesEscogido).date(1);
		  var fin = moment(delA).format('W');
		  var inicio = moment(delB).format('W');
		  inicio = Number(inicio);
		  fin = Number(fin);
		  var a;
		  if(inicio > fin){
			  a = 0;
		  }else{
			 a = inicio;
		  }
		  
		  var X = 1;
		  var Z;
		  var constante = 1-(cardinal[elCardinal] - 1);
		  
		  var poner = document.getElementById("tabla");
		  poner.innerHTML="";
		  var tabla   = document.createElement("table");
		  var tblBody = document.createElement("tbody");
		  var hilera = document.createElement("tr");
		  
		  var celdar = document.createElement("th");
		  var textoCelda = document.createTextNode("Lun");
		  celdar.appendChild(textoCelda);
		  hilera.appendChild(celdar);
		  var celdar = document.createElement("th");
		  var textoCelda = document.createTextNode("Mar");
		  celdar.appendChild(textoCelda);
		  hilera.appendChild(celdar);
		  var celdar = document.createElement("th");
		  var textoCelda = document.createTextNode("Mie");
		  celdar.appendChild(textoCelda);
		  hilera.appendChild(celdar);
		  var celdar = document.createElement("th");
		  var textoCelda = document.createTextNode("Jue");
		  celdar.appendChild(textoCelda);
		  hilera.appendChild(celdar);
		  var celdar = document.createElement("th");
		  var textoCelda = document.createTextNode("Vie");
		  celdar.appendChild(textoCelda);
		  hilera.appendChild(celdar);
		  var celdar = document.createElement("th");
		  var textoCelda = document.createTextNode("Sáb");
		  celdar.appendChild(textoCelda);
		  hilera.appendChild(celdar);
		  var celdar = document.createElement("th");
		  var textoCelda = document.createTextNode("Dom");
		  celdar.appendChild(textoCelda);
		  hilera.appendChild(celdar);
		  
		  tblBody.appendChild(hilera);
		  
		  var I = constante;
		  while(I <= diasDeEsteMes)
		  {
			  var hilera = document.createElement("tr");
			  for(var y = 1; y < 8; y++)
			 {
				 
				 if(I > diasDeEsteMes)
				 {
					break; 
				 }
				 Z = I < 1 ? Z = "" : Z = I;
				 var celda = document.createElement("td");
				  var textoCelda = document.createTextNode(Z);
				  celda.appendChild(textoCelda);
				  if(moment(mesEscogido).format('D') == Z){
					  celda.setAttribute('data-es', 'este');
				  }
				  
				  hilera.appendChild(celda);
				 I++;
			 }
			 
			 tblBody.appendChild(hilera);
		  }
		  
		  tabla.appendChild(tblBody);
		  poner.appendChild(tabla);

	  
	  });
  
  
  
var fechaEscogida = new Pikaday({
    field: document.getElementById('datCom_3'),
    i18n: {
      previousMonth : 'Anterior',
      nextMonth     : 'Siguiente',
      months        : ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
      weekdays      : ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'],
      weekdaysShort : ['Dom','Lun','Mar','Mie','Jue','Vie','Sáb'],
    },
    firstDay: 1,
	format: 'DD/MM/YYYY',
	onSelect: function(data) {
		document.getElementById("datCom_4").value = moment(data).add(3, 'days').format('DD/MM/YYYY');
    }
  });  
  
  
  document.getElementById("boto2").addEventListener("click", function(){
	  	var hora = document.getElementById("datCom_5").value;
		var minuto = document.getElementById("datCom_6").value;
		var numHora = Number(hora);
		var numMinuto = Number(minuto);
		var horario = moment().hours(numHora).minute(numMinuto);
		var mexico = horario.tz("America/Mexico_City");
		var madrid = mexico.clone().tz("Europe/Madrid");
		document.getElementById("hora").textContent = madrid.format('HH:mm') 
	  
	  });
	  
  