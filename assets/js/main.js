
function dynamicallyLoadScript(url) {
    var script = document.createElement("script"); // Make a script DOM node
    script.src = url; // Set it's src to the provided URL

    document.head.appendChild(script); // Add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
}
function dynamicallyLoadCss(url) {
    var script = document.createElement("link"); // Make a script DOM node
    css.rel = 'stylesheet';
    script.href = url; // Set it's src to the provided URL

    document.head.appendChild(script); // Add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
}
function addScripts() {
  dynamicallyLoadScript("/minecraft2/assets/js/jquery.tocible.min.js");
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
