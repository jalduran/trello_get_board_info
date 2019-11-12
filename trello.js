function savexlsdata(table){
	var interval_id = window.setInterval("", 5000);
		for (var i = 1; i < interval_id; i++)window.clearInterval(i);
	var interval_id = window.setInterval("", 2000);
		for (var i = 1; i < interval_id; i++)window.clearInterval(i);		
		var header = '<meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8">';
		var blob = new Blob([header + table ], {type:"data:application/vnd.ms-excel;charset=UTF-8"});
		var filename =  document.getElementById('trellos').value;
		saveAs(blob, 'tnw_'+filename+'.xls')
	
}
function getinfo(){
	var tableros = $('.js-list-content');
	var table = document.createElement("table"); 
	table.setAttribute('border','1');
	var tbody = document.createElement("tbody"); 
	tableros.each(function(tablero){
	//console.log($(this));
	var tr = document.createElement("tr"); 
	var listcont = document.createElement("td"); 
	persona = $(this)[0].childNodes[0].childNodes[1].textContent;  
	var t = document.createTextNode(persona); 
	listcont.appendChild(t); 
	tr.appendChild(listcont); 
	var listado = $(this)[0].childNodes[1].getElementsByTagName('a');
	Array.from(listado).forEach(function (element) { 
		var titulo = element.getElementsByClassName("js-card-name");
		var task = document.createElement("td"); 
		var t = document.createTextNode(titulo[0].childNodes[1].textContent);
		task.appendChild(t)
		tr.appendChild(task); 
     }); 
	tbody.appendChild(tr);	
	});
	table.appendChild(tbody);	
	document.getElementById('txtArea').appendChild(table);
	var tabla = table.outerHTML;
	savexlsdata(tabla);	
}
//add jquery
var jq = document.createElement('script');
jq.src = "//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq); 
setTimeout(function() {jQuery.noConflict();
 console.log('jQuery loaded'); }, 1000);
 void(0);

var fas = document.createElement('script');
fas.src = "https://raw.githubusercontent.com/jalduran/FileSaver.js/master/src/FileSaver.js";
document.getElementsByTagName('head')[0].appendChild(fas); 
setTimeout(function() {jQuery.noConflict();
 console.log('FileSaver loaded'); }, 1000);
 void(0);
 
//add button to process data
var btn = document.createElement("button"); 
btn.setAttribute("id", 'getinfo');
btn.setAttribute("onclick", 'getinfo();'); 
btn.setAttribute("style", 'padding:5px;cursor:pointer;');	    
var t = document.createTextNode("Procesa datos");      
btn.appendChild(t);   


//add iframe to display processed info data

var ifr = document.createElement("div"); 
ifr.setAttribute("id", 'txtArea');
ifr.setAttribute("style", 'border:solid 1px; blue; background-color:#7cc5d5;display:block;width:100%;height:450px;overflow:scroll;');                                        
var help = '<br/>';
help += 'Simple getinfo<br/><br/>';
ifr.innerHTML = help;	
document.getElementById("banners").appendChild(ifr);
document.getElementById("banners").appendChild(btn);
		var filen = document.createElement('input');
		filen.setAttribute('type','hidden');
		filen.setAttribute('id', 'trellos');
		filen.setAttribute('name', 'trellos');
		filen.setAttribute('value', 'trellos');
		document.getElementById("banners").appendChild(filen); 



