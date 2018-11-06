/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    var i=0;
    var p = document.getElementById("target");
    var txt = (p.innerHTML).split("");
    document.getElementById("target").innerHTML = "";
console.log(txt.length);

	var typeWriter = setInterval(function(){
			
		
			document.getElementById("target").innerHTML += txt[i];
			i++;
			if (i > (txt.length-1)) {
				clearInterval(typeWriter);
			}

	}, 100); 
    


		

})();