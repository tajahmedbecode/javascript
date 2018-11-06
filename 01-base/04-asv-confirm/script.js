/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    var age = prompt("Enter your age : ");
    var sexe = prompt("Enter your sexe : ");
    var ville = prompt("Enter your ville : ");

    var confirmation = prompt("Your age is " + age + 
    	" and your sexe is " + sexe +
    	 " and your ville is " + ville + " . Do you confirm ? (oui/non");

    if(confirmation == "oui" || confirmation == "Oui") {
    	alert(" Super !");
    } else {
    	//recall function();
    	age = prompt("Enter your age : ");
    	sexe = prompt("Enter your sexe : ");
    	ville = prompt("Enter your ville : ");
    	confirmation = prompt("Your age is " + age + 
    	" and your sexe is " + sexe +
    	 " and your ville is " + ville + " . Do you confirm ? (oui/non");
    }
})();
