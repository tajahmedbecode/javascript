/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
	var i=0,
		 temp = "",
		 p1 = document.getElementById("pass-one");
    
    document.getElementById("pass-one").onkeypress =  function() {
		 
		 
		 if(i >= 10) {
		 	p1.value = temp;
		 	i--;
		 } 
		 temp = p1.value;
		 document.getElementById("counter").innerHTML = ""+(i+1)+"/10"
		 i++;
		
    };

    /*
var p1 = document.getElementById("pass-one");
var i = 0;
if(i<10) {
	if(p1.keyup()) {
		i++;
	}
 }*/
})();