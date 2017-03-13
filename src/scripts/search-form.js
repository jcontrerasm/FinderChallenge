
/* ========================================================
    Valida el estado del boton de busqueda
   ======================================================== */

function btnValidate(){

  if(document.getElementById("text-search").value == ""){
    document.getElementById("btn-submit").disabled = true;
  }else{
    document.getElementById("btn-submit").disabled = false;
  }

}

/* ========================================================
    Carga los datos de las busquedas por defecto
   ======================================================== */

function loadData() {
 loadJSON(function(response) {

    var objJson = JSON.parse(response);

    var x = 0;

    while(objJson.entities.saved[x] != undefined){
      var savedLabel = objJson.entities.saved[x].label;
      document.getElementById('listSearchSaved')
        .innerHTML += "<li id='link" + x + "'>" +
                        "<a href='' id='searchSaved" + x +"' onMouseOver='showOptions(this.id)' onMouseOut='hideOptions(this.id)'>" + savedLabel +"</a><br>" +
                        "<div id='options" + x + "' class='options-search' onMouseOver='showOptions(this.id)' onMouseOut='hideOptions(this.id)'></div>" +
                      "</li>";
      x++;
    }

 });
}

/* ========================================================
    Muestra las opciones de las busquedas
   ======================================================== */

function showOptions(id){

  var sizeId = id.length;
  var identifier = id.substring(0 , sizeId - 1);

  if(identifier == "searchSaved"){
    var numberLink = id.substring(sizeId - 1);
    var link = document.getElementById("options" + numberLink);
    link.innerHTML = "<a href=''>Editar</a><span> | </span><a href='javascript:void(0);' id='deleteSearch" + numberLink + "' onClick='hideOptions(this.id)'>Eliminar</a>";
    link.style.display = "block";
  }

  if(identifier == "options"){
    var numberLink = id.substring(sizeId - 1);
    var link = document.getElementById("options" + numberLink);
    link.style.display = "block";
  }

}

/* ========================================================
    Oculta las opciones de las busquedas
   ======================================================== */

function hideOptions(id){

  var sizeId = id.length;
  var identifier = id.substring(0 , sizeId - 1);
  var numberLink = id.substring(sizeId - 1);
  var link = document.getElementById("options" + numberLink);
  link.style.display = "none";

  if(identifier == "deleteSearch"){
    var link = document.getElementById("link" + numberLink);
    link.style.display = "none";
  }

}
