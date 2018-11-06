/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
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

    		att = document.createAttribute("class"); 
			att.value = "error";  			                 
			p1.setAttributeNode(att);

			att1 = document.createAttribute("class"); 
			att1.value = "error";
			p2.setAttributeNode(att1);
    	}
    };

})();