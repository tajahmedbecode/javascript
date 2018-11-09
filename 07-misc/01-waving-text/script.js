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

	var x,spn,i,j,k;
	var temp = document.getElementById("target");
	temp = temp.innerHTML.split("");
	document.getElementById("target").innerHTML = "";
//console.log(temp.length);

				/*for( i = 0 ; i < temp.length ; i++ ) {
						spn = document.createElement("span");
						(document.getElementById("target")).appendChild(spn);
						x = document.getElementsByTagName("span");
						(x[x.length-1]).innerHTML = temp[i];
						(x[i]).style.fontSize = i+20+"px";
					}*/

					/*	k = 10;//setInterval and change the value of 'k"
							{
									j = k;
								
										for( i = 0 ; i < temp.length ; i++ ) {
											spn = document.createElement("span");
											(document.getElementById("target")).appendChild(spn);
											x = document.getElementsByTagName("span");
											(x[x.length-1]).innerHTML = temp[i];

													if (j < - k + 1) {
															j = k;
														} else if (j >= 0) {
															(x[i]).style.fontSize = 40 - j*2 + "px";
															j--;
														} else if (j < 0) {
															(x[i]).style.fontSize = 40 + j*2 + "px";
															j--;
														}														
									}	
										

							}	*/

							k = 10; 
							
							
							var t = setInterval(move, 50);

							function move() {
							  if(k >= 50) {
							    clearInterval(t);
							  }
							  else {
							    k += 1;
							    //setInterval and change the value of 'k"
							{
									j = k;
										for( i = 1 ; i < temp.length ; i++ ) {
											spn = document.createElement("span");
											(document.getElementById("target")).appendChild(spn);
											x = document.getElementsByTagName("span");
											(x[x.length-1]).innerHTML = temp[i-1];

													if (j < - k + 1) {
															j = k;
														} else if (j >= 0) {
															(x[i]).style.fontSize = 40 - j*2 + "px";
															j--;
														} else if (j < 0) {
															(x[i]).style.fontSize = 40 + j*2 + "px";
															j--;
														}														
									}

							}
							for( i = x.length-1 ; i > 89  ; i-- ) {
									x = document.getElementsByTagName("span");
									(x[i]).innerHTML = " ";
								}	
						}
					}

})();