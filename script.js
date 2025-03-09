function locomotiveAnimation(){
   gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

function loaderAnimation(){
   



 var t1=gsap.timeline()

 t1.from(".line h1",{
     y:150,
     duration:0.5,
     delay:0.6,
     stagger:0.2
  })
 
  t1.from(".line-part1",{
    opacity:0,
    onStart:function(){   
  var loader= document.querySelector(".line-part1 h3");
  var count=0;
   var set=setInterval(function(){
      count++
      if(count<=100){
          loader.textContent=count;
      }
      else{
          clearInterval(set);   
      }
   },30);
  }
  })
  t1.to(".line h2",{
     animationName:"anime",
     opacity:1
  })
 
  t1.to(".loader",{
     opacity:0,
     duration:1,
     delay:3
  })
 
  t1.from(".page1",{
     y:1500,
     opacity:0,
     duration:0.5,
  })
 
  t1.to(".loader",{
     display:"none"
  })
 
 t1.from(".page1-text h1",{
   y:130,
   stagger:0.2
 })
 

 Shery.makeMagnet(".nav-part2 h3" /* Element to target.*/, {
   //Parameters are optional.
   ease: "cubic-bezier(0.23, 1, 0.320, 1)",
   
 });
 
};

function crsr(){
   document.addEventListener("mousemove",function(dets){
      gsap.to(".crsr",{
         left:dets.x,
         top:dets.y
   
      })
  
   })
};

function sheryAnimation(){
   Shery.imageEffect(".image-container", {
      style: 6,
      config:{"noiseDetail":{"value":7.44,"range":[0,100]},"distortionAmount":{"value":2.98,"range":[0,10]},"scale":{"value":36.64,"range":[0,100]},"speed":{"value":0.79,"range":[0,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.8068575756692982},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":0},"noise_speed":{"value":1.6,"range":[0,10]},"metaball":{"value":0.32,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
      gooey: true,
    });
    
}

function videoMove(){
   var videoCont=document.querySelector(".video-container");
   var vid=document.querySelector(".video-container video");
   var vidImg=document.querySelector(".video-container img");
   var vidCsr =document.querySelector(".video-crsr");
   videoCont.addEventListener("mouseenter",function(){
      gsap.to(".crsr",{
         display:"none"
      });
      videoCont.addEventListener("mousemove",function(dets){
         gsap.to(".video-crsr",{
            top:dets.y - 600,
            left:dets.x - 600
         
         })
         
         videoCont.addEventListener("click",function(){
               vidImg.style.opacity=0,
               vidCsr.style.opacity=0
         })
      })
   })
   videoCont.addEventListener("mouseleave",function(){
      vidImg.style.opacity=1,
      vidCsr.style.opacity=1
      gsap.to(".crsr",{
         display:"block"
      });

         gsap.to(".video-crsr",{
           top:-19 +"%",
           left:60 +"%"
         
         })
      })
   
}
crsr();
locomotiveAnimation();
loaderAnimation();
sheryAnimation();
videoMove();


