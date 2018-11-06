/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to get the value of an input: document.getElementById("element-id").value
    
    var i = 0;
    var j = 0;
    var temp = 0;

    document.getElementById("run").addEventListener("click", function() {

	
        // your code here
         
var str = (document.getElementById("numbers").value).split(", ");

	for(j = 1; j < (str.length-1); j++) {
         for( i = 0 ; i < (str.length-j) ; i++) {
         		if(parseInt(str[i]) > parseInt(str[i+1])) {
         			temp = parseInt(str[i]);
         			str[i] = parseInt(str[i+1]);
         			str[i+1] = temp;
         		}
         }
         
}

     	for(j = 0; j < str.length; j++) {
     			document.getElementById("print").innerHTML += "<br>"+ str[j];
     	}

    });

})();
