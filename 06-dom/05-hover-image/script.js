
/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    var img = document.getElementsByTagName("img")[0]; 
    
    img.onmouseout = function () {
   this.src = '../../_shared/img/kiss.svg';
};

img.onmouseover = function () {
   this.src = '../../_shared/img/kiss-wink-heart.svg';
};



  /*  im.onhover = function () {
var att = document.getElementById("source").getAttribute("data-hover");

document.getElementsByTagName("img")[0].setAttribute("src", att);

};*/
})();