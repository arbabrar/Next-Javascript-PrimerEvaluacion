var textJs='{"estudiantes":['+
'{"codigo":"0001","nombre":"Alan Mendez","nota":"25"},'+
'{"codigo":"0002","nombre":"Juan Jose Cortez","nota":"48"},'+
'{"codigo":"0003","nombre":"Miguel Martinez","nota":"55"},'+
'{"codigo":"0004","nombre":"Pedro Garcia","nota":"88"},'+
'{"codigo":"0005","nombre":"Carla Morales","nota":"75"},'+
'{"codigo":"0006","nombre":"Silvia Peron","nota":"95"},'+
'{"codigo":"0007","nombre":"Horacio Bohorquez","nota":"68"},'+
'{"codigo":"0008","nombre":"Martin Silva","nota":"49"},'+
'{"codigo":"0009","nombre":"Carmen Suarez","nota":"33"},'+
'{"codigo":"0010","nombre":"Lucia Herrera","nota":"93"}]}';
var lectorjs=JSON.parse(textJs);
function leerjson(json){
	var tabla_cabecera="<table><caption>"+"Lista de estudiantes"+"</caption>";
		tabla_cabecera+="<thead><td>Codigo</td><td>Nombre y Apellido</td><td>Calificacion</td></thead>";
	var tabla_pie="</table>";
	var i;
	for (i = 0;i<json.estudiantes.length; i++) {
		tabla_cabecera+="<tr><td>"+json.estudiantes[i].codigo+"</td><td>"+json.estudiantes[i].nombre+"</td><td>"+json.estudiantes[i].nota+"</td></tr>";
	}
	document.getElementById("contenido").innerHTML=tabla_cabecera+tabla_pie;	
}
function promedio(json){
	var a="El valor Promedio es:";
	var b;
	var suma=0;
	var resultado;
	for (b in json.estudiantes){
		suma+=Number(json.estudiantes[b].nota);
		
	}
	resultado=suma/Number(json.estudiantes.length)+1;
	document.getElementById("contenido").innerHTML=a +"<br><p>"+ resultado + "</p>";
}
function mayorque(json){
	var cadena ="La calificacion mas alta es de: "+"<br>";
	var valor0=0;
	var codigo1;
	var nombre1;
	var i;
	for(i in json.estudiantes){
		if(Number(json.estudiantes[i].nota)>valor0){
			codigo1= json.estudiantes[i].codigo;
			nombre1= json.estudiantes[i].nombre;
			valor0= json.estudiantes[i].nota;
			console.log(valor0);
		}
	}
	document.getElementById("contenido").innerHTML=cadena+ nombre1+ " con codigo nro: "+codigo1+ " con la nota de: "+"<p>"+valor0+"</p";  
}
function menorque(json){
	var cad ="La calificacion mas baja es de: "+"<br>";
	var v0=100;
	var c1;
	var n1;
	var x;
	for(x in json.estudiantes){
		if(Number(json.estudiantes[x].nota)<v0){
			c1= json.estudiantes[x].codigo;
			n1= json.estudiantes[x].nombre;
			v0= json.estudiantes[x].nota;
			console.log(v0);
		}
	}
	document.getElementById("contenido").innerHTML=cad+ n1+ " con codigo nro: "+c1+ " con la nota de: "+"<p>"+v0+"</p";  
}
function listar(){
	leerjson(lectorjs);
}
function promediar(){
	promedio(lectorjs);
}
function buscar_mayor(){
	mayorque(lectorjs);
}
function buscar_menor(){
	menorque(lectorjs);
}