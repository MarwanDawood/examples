/** Copyright 2018 The MathWorks, Inc. *///>>built//>>built
require({cache:{"equationrenderer/MathRenderer":function(){(function(){var l=function(){var e=document.getElementsByTagName("math"),a,d,b,c,f;for(a=e.length-1;0<=a;a-=1)if(d=e[a],b=d.altimg||""){c=document.createElement("img");c.src=b;if(b=d["altimg-width"]||0)c.width=b;if(b=d["altimg-height"]||0)c.height=b;if(b=d.alttext||"")c.alt=b;b=d["altimg-valign"]||"";f=document.createElement("span");f.appendChild(c);b&&(f.style.cssText="vertical-align: "+b+"; ");d.parentNode.replaceChild(f,d)}else d.parentNode.removeChild(d)};
if(document.addEventListener){var h={flavor:"MathType",equationFormat:"mathml",equationEncoding:"element",equationRootElement:"math",cacheFontMetrics:!1};this.dojoConfig={isDebug:!0,async:!0,cacheBust:!1,packages:[{name:"dojo",location:"./"},{name:"MW",location:"./MW"}]};(function(){var e=this.equationrendererConfig||{},a;for(a in e)e.hasOwnProperty(a)&&(h[a]=e[a]);e=document.getElementsByTagName("head")[0];"element"===h.equationEncoding&&(a=document.createElement("style"),a.type="text/css",a.textContent=
h.equationRootElement+" { visibility: hidden; }",e.appendChild(a));a=document.createElement("script");var d=function(){require(["MW/equations/renderer/StandaloneEqnRenderer","dojo/domReady!"],function(a){var b=new a(h);setTimeout(function(){b.render()},0)})};a.type="text/javascript";a.onreadystatechange=function(){"complete"===this.readyState&&d()};a.onload=d;var b="",c=(document.documentElement||document).getElementsByTagName("script"),f=/(^.*)enderer.js$/,g,k;for(g=c.length-1;0<=g;g-=1)if(k=c[g].getAttribute("src")||
"",k.match(f)){b=k.slice(0,-15);break}c=document.createElement("link");c.type="text/css";c.rel="stylesheet";c.href=b+"css/main.css";e.appendChild(c);a.src=b+"dojo/dojo.js";e.appendChild(a)})()}else window.onload=l})()}}});define("equationrenderer/equationrenderer",[],1);
//# sourceMappingURL=equationrenderer.js.map