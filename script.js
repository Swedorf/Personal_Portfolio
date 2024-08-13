const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnim(){
  var tl=gsap.timeline();
   
  tl.from("#nav",{
    y:'-10',
    opacity:0,
    ease:Expo.easeInOut,
    duration:2
  })
  tl.to(".boundingelem",{
    y:0,
    ease:Expo.easeInOut,
    duration:2,
    stagger:0.2,
    delay:-1
    
  })
  tl.from("#footer",{
    y:-10,
    opacity:0,
    ease:Expo.easeInOut,
    duration:1.5,
    stagger:0.2,
    delay:-1
    
  })
}
function circleChaptaKaro(){
    var xscale=1;
    var yscale=1;

    var xprev=0;
    var yprev=0;

    window.addEventListener("mousemove",function(dets){
        var xdiff=dets.clientX - xprev;
        var ydiff=dets.clientY - xprev;

       
        xscale=gsap.utils.clamp(.8,1.2,xdiff);
        yscale=gsap.utils.clamp(.8,1.2,ydiff);
        
        xprev=dets.clientX;
        yprev=dets.clientY;

        circleMouseFollower(xscale,yscale);

    });
} 
function circleMouseFollower(xscale,yscale){
window.addEventListener("mousemove",function (dets){
document.querySelector("#minicircle").style.transform= `translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`;
})
}

document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
  
    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  
    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });
  });

  document.getElementById('elem1').addEventListener('click', function() {
    window.location.href = 'https://swedorf.github.io/Tindog/';
  });
  document.getElementById('elem2').addEventListener('click', function() {
    window.location.href = 'https://github.com/Swedorf/Chatbot';
  });
  document.getElementById('elem3').addEventListener('click', function() {
    window.location.href = 'sorry.html';
  });
    


circleMouseFollower();
firstPageAnim();
circleChaptaKaro();