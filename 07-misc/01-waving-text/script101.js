/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


    // your code here

	var i,spn,j,pos;
	var cntnr = document.getElementById("container");
    var temp = document.getElementById("target");
    var t,x;

    
    temp = temp.innerHTML.split("");
    
	document.getElementById("target").innerHTML = "";
    	x = document.getElementsByTagName("span");
    for(j=0; j < temp.length; j++) {
    	spn = document.createElement("span");
    	
		//(x[x.length]).innerHTML =  temp[j];
		
	}console.log((x[x.length]));
//console.log(spn.innerHTML);
	//t = setInterval(move, 100);
	i=0;
    pos = -22;
   /* function move() {
    	if (i<3) {
				  if(pos >= 22) {
				    pos = -22;
				    i++;
				    }  else {
				    	//console.log(pos);
						spn.style.fontSize = Math.abs(22-(pos))+"px";
						document.getElementById("target").parentElement.appendChild(spn);
				    	pos++;
		    		  }
				} else { 
					clearInterval(t);
			}
		}*/
})();