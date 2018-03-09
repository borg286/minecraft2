function dynamicallyLoadsMyStuff() {
    var css = document.createElement("link"); // Make a script DOM node
    css.rel = 'stylesheet';
    css.href = "/minecraft2/assets/css/jquery.tocible.css";
    document.head.appendChild(css);

    var script = document.createElement("script");
    script.type = "javascript";
    script.src="https://ajax.cloudflare.com/cdn-cgi/scripts/935cb224/cloudflare-static/rocket.min.js"
    document.head.appendChild(script);

    var script = document.createElement("script");
    script.type = "text/rocketscript";
    script.data-rocketsrc="minecraft2/assets/js/jquery.tocible.js"
    document.head.appendChild(script);
    
}

dynamicallyLoadsMyStuff();

