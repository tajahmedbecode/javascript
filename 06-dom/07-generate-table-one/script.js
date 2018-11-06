/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
   /* creat("TABLE")
    CREATE("ROW")
     var row = document.getElementById("myRow");
    var x = row.insertCell(0);
    x.innerHTML = "New cell";*/
    var row,
    	tbl,
    	cell,
    	i;
    tbl = document.createElement("TABLE");
    document.getElementById("target").appendChild(tbl);

    for (var i = 0; i < 10; i++) {
    
	    row = tbl.insertRow(0);
	    tbl.appendChild(row);

	    cell = row.insertCell(0);
	    row.appendChild(cell);
	    
	    cell.innerHTML = "row # " + (i+1);
	}	
    
   
})();