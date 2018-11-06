/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    var p1 ="",
    	p2 ="";

    	
    document.getElementById("run").onclick =  function() {
    	p1 = document.getElementById("pass-one");
    	p2 = document.getElementById("pass-two");
    	
    	
    	if(p1.value !== p2.value) {
    		p1.style.border  = '1px solid red';
    		
    		p2.style.border = '1px solid red';
    	}
    };

})();
