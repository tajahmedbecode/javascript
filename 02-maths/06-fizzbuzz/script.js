/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
var num;
for(num = 1; num < 101; num++){
	 if((!(num % 3)) && (!(num % 5))) {
    	console.log("fizzbuzz "+ num);
    } else if(!(num % 3)) {
    	console.log("fizz " + num);
    } else if(!(num % 5)) {
    	console.log("buzz " + num);
    }
    
}
})();