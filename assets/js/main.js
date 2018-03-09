function dynamicallyLoadsMyStuff() {
    var css = document.createElement("link"); // Make a script DOM node
    css.rel = 'stylesheet';
    css.href = "/minecraft2/assets/css/jquery.tocible.css";
    document.head.appendChild(css);

    var script = document.createElement("script");
    script.type = "javascript";
    script.src="https://ajax.cloudflare.com/cdn-cgi/scripts/935cb224/cloudflare-static/rocket.min.js"
    document.footer.appendChild(script);

    var script2 = document.createElement("script");
    script2.type = "text/rocketscript";
    script2.setAttribute("data-rocketsrc","minecraft2/assets/js/jquery.tocible.js")
    document.footer.appendChild(script2);

    var script3 = document.createElement("script");
    script3.type = "text/rocketscript";
    script3.setAttribute("data-rocketsrc","minecraft2/assets/js/create.js")
    document.footer.appendChild(script3);
    
}

dynamicallyLoadsMyStuff();

