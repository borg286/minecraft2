function dynamicallyLoadsMyStuff() {
    var css = document.createElement("link"); // Make a script DOM node
    css.rel = 'stylesheet';
    css.href = "/minecraft2/assets/css/jquery.tocible.css";
    var s = document.getElementsByTagName('link')[0]; s.parentNode.insertBefore(css, s);

    var script = document.createElement("script");
    script.type = "javascript";
    script.async = true;
    script.src="https://ajax.cloudflare.com/cdn-cgi/scripts/935cb224/cloudflare-static/rocket.min.js"
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(script, s);

    var script2 = document.createElement("script");
    script2.type = "text/rocketscript";
    script2.async = true;
    script2.setAttribute("data-rocketsrc","minecraft2/assets/js/jquery.tocible.js")
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(script2, s);

    var script3 = document.createElement("script");
    script3.type = "text/rocketscript";
    script3.async = true;
    script3.setAttribute("data-rocketsrc","minecraft2/assets/js/create.js")
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(script3, s);
    
}

dynamicallyLoadsMyStuff();
