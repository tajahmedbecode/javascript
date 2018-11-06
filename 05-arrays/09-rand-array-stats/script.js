/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    var i,
    	min,
    	max,
    	sum,
    	avg,
    	ar = [] ;

    document.getElementById("run").onclick =  function() {
    	min = 101;
    	max = 0;
    	sum = 0;
// initiatio of the ARRAY
	for( i=0; i < 10; i++ ) {
		ar[i] = Math.floor(Math.random() * 100) + 1;
		document.getElementById("n"+"-"+(i+1)).innerHTML = ar[i];}/*
		//alert(ar[i]);
		if(min > ar[i]) 
			min = ar[i];
		if(max < ar[i]) 
			max = ar[i];
		sum += ar[i];
		avg = sum / ar.length;
	}*/
	min = Math.min.apply(null, ar);//Math.min(...ar);
	max = Math.max.apply(null, ar);//Math.max(...ar);
	sum = ar.reduce((a,b) => a + b);//ar.reduce((a,b) => a + b, 0)
	avg = sum / ar.length;
	document.getElementById("min").innerHTML = min;
	document.getElementById("max").innerHTML = max;
	document.getElementById("sum").innerHTML = sum;
	document.getElementById("average").innerHTML = avg;


//(numbers.find(x => x % 2 == 0));
	
    };
})();