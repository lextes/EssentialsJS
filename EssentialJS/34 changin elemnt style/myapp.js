var el = document.getElementById('style');


el.style.background = "red";

/*el.style.color = "white";

el.style.width = "200px";

el.style.cssText = "background: grey; color:yellow; width:200px";

el.style.cssText += " height:200px;";*/

console.log( getComputedStyle( el ) ); 