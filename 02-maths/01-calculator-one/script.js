/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value
        

    document.getElementById("addition").onclick =  function() {
        // perform an addition
        var result;
        var op1;
        var op1;

            op2 = parseInt(document.getElementById("op2").value);
            op1 = parseInt(document.getElementById("op1").value);
           result  = op1 + op2;  
           document.getElementById("result").innerHTML = result;        
    };

    document.getElementById("substraction").onclick = function() {
        // perform an substraction
        var result;
        var op1;
        var op1;

            op2 = parseInt(document.getElementById("op2").value);
            op1 = parseInt(document.getElementById("op1").value);
        result  = op1 - op2;
        document.getElementById("result").innerHTML = result; 
    };

    document.getElementById("multiplication").onclick = function() {
        // perform an multiplication
        var result;
        var op1;
        var op1;

            op2 = parseInt(document.getElementById("op2").value);
            op1 = parseInt(document.getElementById("op1").value);
        result  = op1 * op2;
        document.getElementById("result").innerHTML = result;
    };

    document.getElementById("division").onclick = function() {
        // perform an division
        var result;
        var op1;
        var op1;

            op2 = parseInt(document.getElementById("op2").value);
            op1 = parseInt(document.getElementById("op1").value);
        result  = op1 / op2;
        document.getElementById("result").innerHTML = result;
    };
    
})();

