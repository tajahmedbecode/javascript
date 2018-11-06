/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value

    var performOperation = function(operation) {
        // perform the operation
        //switch is here

        switch(operation) {
        case'addition' : 
            document.getElementById("result").innerHTML = parseInt(document.getElementById('op-one').value) + 
            parseInt(document.getElementById('op-two').value);
        break;
        
        case'substraction' : 
            document.getElementById("result").innerHTML = parseInt(document.getElementById('op-one').value) - 
            parseInt(document.getElementById('op-two').value);
        break;
        
        case'multiplication' : 
            document.getElementById("result").innerHTML = parseInt(document.getElementById('op-one').value) * 
            parseInt(document.getElementById('op-two').value);
        break;

        case'division' : 
            document.getElementById("result").innerHTML = parseInt(document.getElementById('op-one').value) / 
            parseInt(document.getElementById('op-two').value);
        break;
        }

    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {

            performOperation($btn.id);
        });
    });
})();
/*
    myFunction = function(event) { 
                    var op = event.target.id;
                    //document.getElementById('op').
                    document.getElementById('op').innerHTML = op;
                //alert(event.target.id);
            }
    alert(event.target.id);
    var operation = document.getElementById("op").innerHTML;
    
    switch(operation) {
    	case'addition' : {
    		document.getElementById("result").innerHTML = parseInt(document.getElementById("op-one")) + 
    		parseInt(document.getElementById("op-two"));
    	break;
    	}

    	case'substraction' : {
    		document.getElementById("result") = parseInt(document.getElementById("op-one")) - 
    		parseInt(document.getElementById("op-two"));
    	break;
    	}
    }*



})();*/
