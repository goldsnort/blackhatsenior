let bannerStatus =1;
let bannerStatusPrev=1;
let bannerTimer =4500;
window.onload = function(){
    bannerLoop();
}
var start = setInterval(function(){
    bannerLoop();
}, bannerTimer);
document.getElementById("banContainer").onmouseenter = function(){
   clearInterval(start);
}
document.getElementById("banContainer").onmouseleave = function(){
   start = setInterval(function(){
      bannerLoop();
   },bannerTimer);
}
document.getElementById("imgbanbtn-prev").onclick = function(){
bannerLoopPrev();
}
document.getElementById("imgbanbtn-next").onclick = function(){
   bannerLoop();
}
function bannerLoop(){
if(bannerStatus===1){
    document.getElementById("banner2").style.opacity="0";
 setTimeout(function(){
    document.getElementById("banner1").style.right="0px";
    document.getElementById("banner1").style.zIndex="1000";
    
    document.getElementById("banner2").style.right="-100vw";
    document.getElementById("banner2").style.zIndex="1500";
    
    document.getElementById("banner3").style.right="100vw";
    document.getElementById("banner3").style.zIndex="500";
 }, 500);
 setTimeout(function(){
    document.getElementById("banner2").style.opacity="1";
 },1000);
bannerStatus =2;
bannerStatusPrev=3;
}
else if(bannerStatus===2){
    document.getElementById("banner3").style.opacity="0";
 setTimeout(function(){
    document.getElementById("banner2").style.right="0px";
    document.getElementById("banner2").style.zIndex="1000";
    
    document.getElementById("banner3").style.right="-100vw";
    document.getElementById("banner3").style.zIndex="1200";
    
    document.getElementById("banner1").style.right="100vw";
    document.getElementById("banner1").style.zIndex="500";
 }, 500);
 setTimeout(function(){
    document.getElementById("banner3").style.opacity="1";
 },1000);
bannerStatus =3;
bannerStatusPrev=1;
}
else if(bannerStatus===3){
    document.getElementById("banner1").style.opacity="0";
 setTimeout(function(){
    document.getElementById("banner3").style.right="0px";
    document.getElementById("banner3").style.zIndex="1000";
    
    document.getElementById("banner1").style.right="-100vw";
    document.getElementById("banner1").style.zIndex="1200";
    
    document.getElementById("banner2").style.right="100vw";
    document.getElementById("banner2").style.zIndex="500";
 }, 500);
 setTimeout(function(){
    document.getElementById("banner1").style.opacity="1";
 },1000);
bannerStatus =1;
bannerStatusPrev=2;
}
}
function bannerLoopPrev(){
   if(bannerStatusPrev===1){
      document.getElementById("banner3").style.opacity="0";
      setTimeout(function(){
         document.getElementById("banner1").style.right="0px";
         document.getElementById("banner1").style.zIndex="1000";
         
         document.getElementById("banner3").style.right="100vw";
         document.getElementById("banner3").style.zIndex="1500";
         
         document.getElementById("banner2").style.right="-100vw";
         document.getElementById("banner2").style.zIndex="500";
      }, 500);
      setTimeout(function(){
         document.getElementById("banner3").style.opacity="1";
      },1000);
     bannerStatusPrev =3;
     bannerStatus=2;
   }
   else if(bannerStatusPrev===3){
      document.getElementById("banner2").style.opacity="0";
      setTimeout(function(){
         document.getElementById("banner3").style.right="0px";
         document.getElementById("banner3").style.zIndex="1000";
         
         document.getElementById("banner2").style.right="100vw";
         document.getElementById("banner2").style.zIndex="1500";
         
         document.getElementById("banner1").style.right="-100vw";
         document.getElementById("banner1").style.zIndex="500";
      }, 500);
      setTimeout(function(){
         document.getElementById("banner2").style.opacity="1";
      },1000);
     bannerStatusPrev =2;
     bannerStatus=1;
   }else if(bannerStatusPrev===2){
      document.getElementById("banner1").style.opacity="0";
      setTimeout(function(){
         document.getElementById("banner2").style.right="0px";
         document.getElementById("banner2").style.zIndex="1000";
         
         document.getElementById("banner1").style.right="100vw";
         document.getElementById("banner1").style.zIndex="1500";
         
         document.getElementById("banner3").style.right="-100vw";
         document.getElementById("banner3").style.zIndex="500";
      }, 500);
      setTimeout(function(){
         document.getElementById("banner1").style.opacity="1";
      },1000);
     bannerStatusPrev =1;
     bannerStatus=3;
   }
}
