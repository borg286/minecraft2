function dynamicallyLoadCss(url) {
    var css = document.createElement("link"); // Make a script DOM node
    css.rel = 'stylesheet';
    css.href = url; // Set it's src to the provided URL

    document.head.appendChild(css); // Add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
}

$.getScript( "/minecraft2/assets/js/jquery.tocible.min.js" )
  .done(function( script, textStatus ) {
    console.log( "Done loading" );
  })
  .fail(function( jqxhr, settings, exception ) {
    console.log( "Failure" );
});


function addScripts() {
  dynamicallyLoadCss("/minecraft2/assets/css/jquery.tocible.css");
}
addScripts();
$(document).ready(function(e) {
  var div = document.createElement("div");
  div.setAttribute("id", "ref");
  document.getElementsByTagName('body')[0].appendChild(div);
  	$('section').tocible({ 
    heading: 'h1', //[selector], the first level heading
    subheading: 'h2', //[selector], the second level heading
    reference:'.ref', title:'Contents'});
});
