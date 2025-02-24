



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



