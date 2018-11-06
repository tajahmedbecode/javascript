/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here


var chif_sec = Math.floor(Math.random() * 100) + 1;
console.log(chif_sec);

	var btn = document.getElementById("run").onclick = function() {

			var guess = document.getElementById("in").value;

			if( guess > chif_sec ) {
				document.getElementById("msg").innerHTML = "plus petit";
			} else if ( guess < chif_sec ) {
				document.getElementById("msg").innerHTML = "plus grand";
			} else {
				document.getElementById("msg").innerHTML = "Bravo!";
			}

	};

})();