/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

     var row,
    	tbl,
    	cell,
    	i,
    	j,
    	k;

    tbl = document.createElement("TABLE");
    document.getElementById("target").appendChild(tbl);


for ( k = 0; k < 10; k++) {

    	for ( j= 0; j < 1; j++) {
  			
  				    for ( i = 0; i < 10; i++) {
				    
					    row = tbl.insertRow(j);
					    tbl.appendChild(row);

					    cell = row.insertCell(j);
					    //cell.style.width = "10%";
					    row.appendChild(cell);
					    cell.innerHTML = (k+1);
					     
					    cell = row.insertCell(j+1);
					    //cell.style.width = "10%";
						row.appendChild(cell);
						cell.innerHTML =  (i+1);

						cell = row.insertCell(j+2);
						//cell.style.width = "10%";
						row.appendChild(cell);
						cell.innerHTML =  (i+1)*(k+1);
					}

		}
	}	


/*
for ( k = 0; k < 10; k++) {

    	for ( j= 0; j < 1; j++) {
  			
  				    for ( i = 0; i < 10; i++) {
				    
					    row = tbl.insertRow(j);
					    tbl.appendChild(row);

					    cell = row.insertCell(j);
					    //cell.style.width = "10%";
					    row.appendChild(cell);
					    cell.innerHTML = (k+1);
					     
					    cell = row.insertCell(j+1);
					    //cell.style.width = "10%";
						row.appendChild(cell);
						cell.innerHTML =  (i+1);

						cell = row.insertCell(j+2);
						//cell.style.width = "10%";
						row.appendChild(cell);
						cell.innerHTML =  (i+1)*(k+1);
					}

		}
	}*/	

})();