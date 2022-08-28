// window.addEventListener("load", function(){
//   setTimeout(function(){
//     document.getElementById("preloader").style.display = none;
//   }, 100000000)
// });

function endLoad(){
  var loader = document.getElementById("loader");
  loader.style.display = "none";
  // Scrolling is disabled by default while loading
  document.body.style.overflow = "scroll";
  document.html.style.overflow = "scroll";
};

window.onload = function loadFrame() {
    setTimeout(endLoad, 2000);
};
