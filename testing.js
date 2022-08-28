$(document).ready(function() {
  console.log("The page is ready");

  var controller = new ScrollMagic.Controller();

  setTimeout(function(){
    console.log("Timeout finished");
    var openingScene = new ScrollMagic.Scene({
      triggerElement: ".wrapper"
    })
    .setClassToggle("#text", "greetFader")
    .addTo(controller);

    var openingScene = new ScrollMagic.Scene({
      triggerElement: ".wrapper"
    })
    .setClassToggle("#text2", "greetFader")
    .addTo(controller);

    var moonControl = new ScrollMagic.Scene({
      triggerElement: ".wrapper"
    })
    .setClassToggle("#moon", "greetFader")
    .addTo(controller);

    var skyControl = new ScrollMagic.Scene({
      triggerElement: ".wrapper"
    })
    .setClassToggle("#sky", "greetFader")
    .addTo(controller);
  }, 500);

  /////////////////////////////////////////////////////////////////////////////// Second Page

  var myText = new ScrollMagic.Scene({
    triggerElement: "#wrap2",
    triggerHook: 0.2
  })
  .setClassToggle("#scroller", "fade-in")
  .addTo(controller)
  .setPin();

  var darkScene = new ScrollMagic.Scene({
    triggerElement: "#wrap2"
  })
  .setClassToggle("#wrap2", "dark")
  .addTo(controller);

  let path = [
    {x: 0, y:0},
    {x: -100, y:-100},
    {x: -200, y:-120},
    {x: -500, y:-150},
    {x: -1400, y:-150},
    // Hits turn Mark
    {x: -1400, y: 0},
    {x: -1400, y: 100},
    {x: -1400, y: 230},
    {x: -1400, y: 400},
    {x: -1400, y: 550},
    // Turn back mark
    {x: -1000, y: 550},
    {x: -500, y: 530},
    {x: -250, y: 500},
    {x: 0, y: 300},
    {x: 250, y: 200}
  ];

  let rawPath = MotionPathPlugin.arrayToRawPath(path, {curviness: 0.5});

  var tl = gsap.timeline();
  tl.to("#plane", {duration: 5, motionPath: {path}});
  tl.to("#socialLinks", {duration: .5, opacity: 1, bottom: 20});
  tl.to("#cloud1", {duration: .5, opacity: 1, right: -80, delay: -4});
  tl.to("#cloud2", {duration: .5, opacity: 1, right: 90, delay: -3.9});
  tl.to("#cloud3", {duration: .5, opacity: 1, right: -40, delay: -3.8});
  tl.to("#rocket", {duration: 3, top: -700, delay: -4});
  tl.to("#codingTable", {duration: .5, opacity: 1, right: 50, delay: -2.5});

  var flight = new ScrollMagic.Scene({
    triggerElement: "#wrap2",
    duration: 2000,
    triggerHook: 0
  })
  .setPin("#wrap2")
  .setTween(tl)
  .addTo(controller);

  var screenMode = new ScrollMagic.Scene({
    triggerElement: "#wrap3",
    duration: 1000,
    triggerHook: 1
  })
  .setClassToggle("#screenPanel", "smallScreen")
  .addTo(controller);

  var color3Scene = new ScrollMagic.Scene({
    triggerElement: "#wrap3",
    triggerHook: 0.4
  })
  .setClassToggle("#wrap3", "wrap3Color")
  .addTo(controller);

});
