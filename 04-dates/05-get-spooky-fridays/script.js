/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    var annee; // chosen by user
    var m; // month of year ( 1 - 12 )
    document.getElementById("run").onclick =  function() {
    	annee = parseInt(document.getElementById("year").value);
    	
    	for(m=0; m<12 ; m++) {
    	d = new Date(annee, m, 13);
    	//alert(d);
    	if(d.getDay() == 5) {
    		document.getElementById("target").innerHTML += (d.getMonth()+1) + " / ";
    		
    	}
	}
	document.getElementById("target").innerHTML +="<br>";
	};
	
})();