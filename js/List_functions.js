window.onload = function() {
    document.getElementsByClassName("tablinks")[0].click();
};

function openTab(evt, tabName) {
  // Ocultar todo el contenido
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Quitar la clase "active" de todos los botones
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Mostrar la pestaña seleccionada y activar el botón
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

