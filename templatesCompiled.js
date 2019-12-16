(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['navbar'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "\n\n<nav class=\"navbar navbar-expand-lg navbar-light orange\">\n      <a class=\"navbar-brand\" href=\"listar_libros.html\">"
    + container.escapeExpression(((helper = (helper = helpers.biblioteca || (depth0 != null ? depth0.biblioteca : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"biblioteca","hash":{},"data":data,"loc":{"start":{"line":4,"column":56},"end":{"line":4,"column":72}}}) : helper)))
    + "</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n        aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n  \n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav mr-auto\">\n\n          <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"listar_libros.html\">Ver todos los Libros</a>\n              \n          </li>\n          <li class=\"nav-item\"></li>\n              <a class=\"nav-link\" href=\"libro_alta.html\">Agregar Libro</a>\n              </li>\n              <li class=\"nav-item\"></li>\n              <a class=\"nav-link\" href=\"libro_edit.html\">Editar Libro</a>\n              </li>\n          \n           <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"listar_usuarios.html\">Ver todos los usuarios</a>\n              </li>\n              <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"usuario-alta.html\">Agregar usuario</a>\n              </li>\n              <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"usuario_edit.html\">Editar usuario</a>\n            </li>\n          \n          <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"prestamo_listar.html\">Ver todos los Prestamos</a>\n              </li>\n              <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"prestamo_alta.html\">Agregar prestamo</a>\n             </li>\n             <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"prestamo_edit.html\">Editar prestamo</a>\n            </li>\n  <li class=\"nav-item avatar dropdown\">\n        <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdownMenuLink-55\" data-toggle=\"dropdown\"\n          aria-haspopup=\"true\" aria-expanded=\"false\">\n          <img src=\"http://cdn.onlinewebfonts.com/svg/img_311846.png\" style=\"width: 50px;\" class=\"rounded-circle z-depth-0\"\n            alt=\"avatar image\">\n        </a>\n        <div class=\"dropdown-menu dropdown-menu-lg-right dropdown-secondary\"\n          aria-labelledby=\"navbarDropdownMenuLink-55\">\n          <a class=\"dropdown-item\" onclick=\"alerta()\">Cerrar Sesion</a>\n        \n        </div>\n      </li>\n        </ul>\n        \n\n      </div>\n    </nav>\n  ";
},"useData":true});
})();


function alerta()
    {
    var mensaje;
    var opcion = confirm("Seguro que desea cerrar sesion");
    if (opcion == true) {
      localStorage.clear();
      document.location.href='index.html'
	} else {
	    
	}
}
if ( !window.localStorage.getItem('token')) {
  document.location.href="index.html";
}
var context = { "biblioteca" : "Bibliotec"}
var templateScript = Handlebars.templates.navbar(context); 
$(header).append(templateScript);