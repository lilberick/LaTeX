//pandoc -s codeauni.tex --number-sections --template=template.html -o codigo.html
//Hecho por: LILBERICK
function lineaSeparadora(){
  var h1Elements = document.getElementsByTagName('h1');
  for (var i = 1; i < h1Elements.length; i++) { // Comenzar desde el segundo <h1>
    var hrElement = document.createElement('hr');
    h1Elements[i].parentNode.insertBefore(hrElement, h1Elements[i]);
  }
}
function titulo() {
  var h1Elements = document.querySelectorAll('h1[data-number][id]');
  h1Elements.forEach(function(element) {
    if (!element.querySelector('a')) { // Verificar si no contiene enlaces
      var number = element.getAttribute('data-number');
      var title = element.textContent.replace(number + ' ', '').toUpperCase();
      var newElement = document.createElement('p');
      var strongElement = document.createElement('strong');
      var spanElement1 = document.createElement('span');
      spanElement1.style.fontFamily = 'Arial, Helvetica, sans-serif';
      spanElement1.style.fontSize = '20px';
      spanElement1.style.color = '#0099ff';
      spanElement1.textContent = number + '. ' + title;
      strongElement.appendChild(spanElement1);
      newElement.appendChild(strongElement);
      element.parentNode.replaceChild(newElement, element);
    }
  });
}
function subtitulo() {
  var headings = document.querySelectorAll('h2[data-number][id], h3[data-number][id], h4[data-number][id]');
  headings.forEach(function(element) {
    if (!element.querySelector('a')) { // Verificar si no contiene enlaces
      var number = element.getAttribute('data-number');
      var title = element.textContent.replace(number + ' ', '').toUpperCase();
      var newElement = document.createElement('p');
      var strongElement = document.createElement('strong');
      var spanElement1 = document.createElement('span');
      spanElement1.style.fontFamily = 'Arial, Helvetica, sans-serif';
      spanElement1.style.fontSize = '14px';
      spanElement1.style.color = '#16a085';
      spanElement1.textContent = number + '. ' + title;
      strongElement.appendChild(spanElement1);
      newElement.appendChild(strongElement);

      element.parentNode.replaceChild(newElement, element);
    }
  });
}
function parrafo() {
  var pElements = document.querySelectorAll('p');
  pElements.forEach(function(element) {
    // Verificar si el elemento <p> contiene enlaces <a>
    if (!element.querySelector('a')) {
      var contenido = element.textContent;
      var newElement = document.createElement('p');
      var strongElement = document.createElement('strong');
      var spanElement1 = document.createElement('span');
      spanElement1.style.fontFamily = 'Arial, Helvetica, sans-serif';
      spanElement1.style.fontSize = '14px';
      spanElement1.style.color = '#8b8b8b';
      spanElement1.textContent = contenido;
      strongElement.appendChild(spanElement1);
      newElement.appendChild(strongElement);
      element.parentNode.replaceChild(newElement, element);
    }
  });
}
function transformarFiguras(){
  var figureElements = document.querySelectorAll('figure');
  figureElements.forEach(function(figure, index){
	var img = figure.querySelector('img');
	var description = figure.querySelector('figcaption').textContent;
	// Crear el nuevo elemento <p> con el formato deseado
	var newElement = document.createElement('p');
	newElement.style.textAlign = 'center';
	newElement.innerHTML = '<strong><span style="color:#0099ff; font-family:Arial,Helvetica,sans-serif; font-size:14px">Figura ' + (index + 1) + '. ' + description + '</span></strong>';
	// Crear un nuevo elemento <p> con la imagen centrada
	var imgElement = document.createElement('p');
	imgElement.innerHTML = '<img alt="" src="' + img.src + '" style="display:block; height:70%; margin-left:auto; margin-right:auto; text-align:center; width:70%" onerror="this.src=\'img/26.png\'"/>';
	// Reemplazar la etiqueta <figure> original con los nuevos elementos <p>
	figure.parentNode.replaceChild(newElement, figure);
	newElement.parentNode.insertBefore(imgElement, newElement.nextSibling);
  });
}
function transformarTabla(){
  var tablas = document.querySelectorAll('table');
  tablas.forEach(function(tabla) {
    var caption = tabla.querySelector('caption').textContent;
    var thead = tabla.querySelector('thead');
    var tbody = tabla.querySelector('tbody');
    var nuevaTabla = document.createElement('table');
    nuevaTabla.setAttribute('border', '1');
    nuevaTabla.setAttribute('cellpadding', '1');
    nuevaTabla.setAttribute('cellspacing', '1');
    nuevaTabla.style.marginLeft = 'auto';
    nuevaTabla.style.marginRight = 'auto';
    nuevaTabla.style.width = '500px';
    var nuevoCaption = document.createElement('caption');
    nuevoCaption.innerHTML = '<p style="text-align:center"><strong><span style="color:#0099ff; font-family:Arial,Helvetica,sans-serif; font-size:14px">Cuadro 1. ' + caption + '</span></strong></p>';
    nuevaTabla.appendChild(nuevoCaption);
    var contenidoThead = thead.cloneNode(true);
    contenidoThead.querySelectorAll('th').forEach(function(th) {
      th.outerHTML = '<td style="text-align: center;"><strong>' + th.textContent + '</strong></td>';
    });
    tbody.appendChild(contenidoThead);
    var contenidoTbody = tbody.cloneNode(true);
    nuevaTabla.appendChild(contenidoTbody);
    tabla.parentNode.replaceChild(nuevaTabla, tabla);
  });
}
function transformarCodigo(){
    var preElements = document.querySelectorAll('pre[style="PythonStyle"]');
    preElements.forEach(function(preElement) {
      var codigo = preElement.querySelector('code').textContent;
	  // Reemplazar saltos de línea con <br>
	  codigo = codigo.replace(/\n/g, '<br>');
	  // Reemplazar espacios con el código HTML de espacio en blanco
	  codigo = codigo.replace(/ /g, '&nbsp;');
      // Crear el nuevo elemento <table> con el formato deseado
      var nuevaTabla = document.createElement('table');
      nuevaTabla.setAttribute('border', '1');
      nuevaTabla.setAttribute('cellpadding', '1');
      nuevaTabla.setAttribute('cellspacing', '1');
      nuevaTabla.style.marginLeft = 'auto';
      nuevaTabla.style.marginRight = 'auto';
      nuevaTabla.style.width = '800px';
      var tbody = document.createElement('tbody');
      var tr = document.createElement('tr');
      var td = document.createElement('td');
      var span = document.createElement('span');
      span.style.color = '#333333';
      span.style.fontFamily = 'monospace';
      span.textContent = codigo;
	  // Asignar el código con saltos de línea y otros elementos HTML
	  span.innerHTML = codigo;
      // Construir la estructura de la tabla
      td.appendChild(span);
      tr.appendChild(td);
      tbody.appendChild(tr);
      nuevaTabla.appendChild(tbody);
      // Reemplazar el <pre> original con la nueva tabla
      preElement.parentNode.replaceChild(nuevaTabla, preElement);
    });
}
function transformarTituloSinEnumerar(){
    var h1Elements = document.querySelectorAll('h1.unnumbered');
    h1Elements.forEach(function(h1Element) {
      var titulo = h1Element.textContent;
      // Crear el nuevo elemento <p> con el formato deseado
      var nuevoElemento = document.createElement('p');
      var strongElement = document.createElement('strong');
      var spanElement = document.createElement('span');
      spanElement.style.color = '#0099ff';
      spanElement.style.fontFamily = 'Arial, Helvetica, sans-serif';
      spanElement.style.fontSize = '20px';
      spanElement.textContent = titulo;
      // Construir la estructura del nuevo elemento <p>
      strongElement.appendChild(spanElement);
      nuevoElemento.appendChild(strongElement);
      // Reemplazar el <h1> original con el nuevo elemento <p>
      h1Element.parentNode.replaceChild(nuevoElemento, h1Element);
    });
}
function transformarListaReferencias(){
  var listaItems = document.querySelectorAll('ol li p a');
    listaItems.forEach(function(item) {
      // Crear los nuevos elementos <strong> y <span> con el formato deseado
      var nuevoStrong = document.createElement('strong');
      var spanElement = document.createElement('span');
      spanElement.style.color = '#8b8b8b';
      spanElement.style.fontFamily = 'Arial, Helvetica, sans-serif';
      spanElement.style.fontSize = '14px';
      spanElement.textContent = item.textContent;
      // Mover el contenido del enlace original a los nuevos elementos
      nuevoStrong.appendChild(spanElement);
      // Reemplazar el contenido del enlace <a> con los nuevos elementos
      item.innerHTML = ''; // Eliminar contenido existente dentro del <a>
      item.appendChild(nuevoStrong);
      // Mantener el enlace funcional al establecer el href nuevamente
      item.href = item.getAttribute('href');
    });
}
function video(){
	  //var enlacesYoutube = document.querySelectorAll('div.center p a[href^="https://www.youtube.com/v/"]');
	  var enlacesYoutube = document.querySelectorAll('div.center p a[href^="https://www.youtube.com/watch?v="]');
	  enlacesYoutube.forEach(function (elemento) {
		      var url = elemento.getAttribute('href');
		      var descripcion = elemento.textContent;
		      var spaceElement1 = document.createElement('p');
		      spaceElement1.innerHTML = '&nbsp;';
		      var descripcionElemento = document.createElement('p');
		      descripcionElemento.style.textAlign = 'center';
		      descripcionElemento.innerHTML = '<strong><span style="color:#16a085; font-family:Arial,Helvetica,sans-serif; font-size:14px">' + descripcion + '</span></strong>';
		      var videoContainer = document.createElement('div');
		      videoContainer.style.paddingTop = '56.25%';
		      videoContainer.style.position = 'relative';
		      videoContainer.style.margin = '0 auto';
		      var iframe = document.createElement('iframe');
		      //iframe.src = 'https://www.youtube.com/embed/' + url.split('/').pop();
		      iframe.src = 'https://www.youtube.com/embed/' + url.split('=').pop();
		      iframe.style.border = 'none';
		      iframe.style.position = 'absolute';
		      iframe.style.top = '0';
		      iframe.style.height = '100%';
		      iframe.style.width = '100%';
		      var spaceElement2 = document.createElement('p');
		      spaceElement2.innerHTML = '&nbsp;';
		      var parent = elemento.parentElement.parentElement; // Adjust this based on your HTML structure
		      parent.insertBefore(spaceElement1, parent.childNodes[0]);
		      parent.insertBefore(descripcionElemento, parent.childNodes[1]);
		      parent.insertBefore(videoContainer, parent.childNodes[2]);
		      videoContainer.appendChild(iframe);
		      parent.insertBefore(spaceElement2, parent.childNodes[3]);
			  //eliminar <p><a>
			   elemento.parentElement.remove();
			});
}
function descargar(){
  // Clonar el elemento raíz (documento) para evitar modificar el DOM actual
  var clonedDocument = document.cloneNode(true);
  // Eliminar la etiqueta <script> con src="script.js" del clon
  var scriptTag = clonedDocument.querySelector('script[src="convertirFormato.js"]');
  if (scriptTag) {scriptTag.remove();}
  // Obtener el contenido modificado del clon (sin la etiqueta <script>)
  var modifiedHTML = clonedDocument.documentElement.outerHTML;
  // Crear el Blob y generar el archivo descargable
  var blob = new Blob([modifiedHTML], { type: "text/html" });
  var url = URL.createObjectURL(blob);
  var downloadLink = document.createElement("a");
  downloadLink.href = url;
  downloadLink.download = "paginaModificada.html"; // Nombre del archivo descargado
  downloadLink.style.display = "none";
  // Agregar el enlace al cuerpo del documento y hacer clic automáticamente para descargar
  document.body.appendChild(downloadLink);
  downloadLink.click();
  // Liberar recursos
  URL.revokeObjectURL(url);
  document.body.removeChild(downloadLink);
}
//Hecho por: LILBERICK
// llamar a las funciones cuando el DOM este completamente cargado
document.addEventListener("DOMContentLoaded", lineaSeparadora);
document.addEventListener("DOMContentLoaded", parrafo);
document.addEventListener("DOMContentLoaded", titulo);
document.addEventListener("DOMContentLoaded", subtitulo);
document.addEventListener("DOMContentLoaded", transformarFiguras);
document.addEventListener("DOMContentLoaded", transformarTabla);
document.addEventListener("DOMContentLoaded", transformarCodigo);
document.addEventListener("DOMContentLoaded", transformarTituloSinEnumerar);
document.addEventListener("DOMContentLoaded", transformarListaReferencias);
document.addEventListener('DOMContentLoaded', video);
document.addEventListener("DOMContentLoaded", descargar);
