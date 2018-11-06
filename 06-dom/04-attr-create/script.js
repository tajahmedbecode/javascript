/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
//var x = document.getElementsByTagName("H1")[0].getAttribute("class");
var att = document.getElementById("source").getAttribute("data-image");

var img = document.createElement("IMG");
    document.getElementById("target").appendChild(img);
    document.getElementsByTagName("img")[0].setAttribute("src", att);
    document.getElementById("source").removeAttribute("data-image");
   
})();