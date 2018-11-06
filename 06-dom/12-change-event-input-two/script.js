/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here


var chif=[],
	 crctr=[],
	 res=[],
	 p1 = "";
	// p1 = document.getElementById("pass-one");
	//var patt = new RegExp(/[0-9]/g);

document.getElementById("pass-one").onkeydown =  function() {
		
	
		
 	p1 = document.getElementById("pass-one");
 	//chif.push("1");
    chif = p1.value.match(/[0-9]/g)+1;	//patt.test(p1.value);
    
	//console.log("chif/2   "+(chif.length)/2 + "  crctr/2  "+(crctr.length)/2);
	//crctr.push("1");
	crctr = p1.value.match(/[a-z]/g)+1;
	
	//console.log("chif/2   "+(chif.length)/2 + "  crctr/2  "+(crctr.length)/2);
	//console.log("crctr/2  "+(crctr.length)/2);
		/*if (((p1.value.match(/[0-9]/g))).length == 0) {
				chif.push(1);
		} else  {
				chif = p1.value.match(/[0-9]/g);
		}

		if (((p1.value.match(/[a-z]/g))).length == 0) {
				crctr.push(1);
		} else {
				crctr = p1.value.match(/[a-z]/g)
		}*/

		if ((((crctr.length)/2) >= 6) && (((chif.length)/2) >= 2)) {
			document.getElementById("validity").innerHTML = "ok";
		} else  {
			document.getElementById("validity").innerHTML = "pas ok";
		}

		
	};
//ar.pop();
	//ar = (p1.value).split("");	
		//chif=0;
     /*if (res.length > 1) { //test is not the correct method !!
			console.log(res+""+chif);
			chif++;
		} 
		  if ((chif >0) && (!res)){
				
				console.log(res+""+chif);
				chif--;
		}*/

})();