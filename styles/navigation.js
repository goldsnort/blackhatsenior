const ham=document.getElementById("hamburger");
const body=document.querySelector(".body");
const navmenu=document.querySelector(".navmenu");
const navleft=document.querySelector(".navleft");
const navright=document.querySelector(".navright");
const search=document.getElementById("search");
const navbuffer=document.querySelector(".navbuffer");
const navstart=document.querySelector(".navstart");
const searchButton=document.getElementById("searchButton");
const imagePopup=document.getElementById("loginPopupImage");
const viewWidth=document.documentElement.clientWidth;
const viewHeight=document.documentElement.clientHeight;
const popupClass=document.querySelector(".loginPopup");
scrollTo(0,0);
function toggle_nav_ham()
{
    
    if(navleft.style.display==""||navleft.style.display=="none")
    {
        navmenu.style.display="flex";
        navmenu.style.width="50vw";
        navmenu.style.height="100vh";
        navmenu.style.flexDirection="column";
        navmenu.style.justifyContent="flex-start";
        navleft.style.display="flex";
        navright.style.display="flex";
        navbuffer.style.display="none";
        navstart.style.justifySelf="center";
        navleft.style.flexDirection="column";
        navright.style.flexDirection="column-reverse";
        navright.style.justifySelf="start";
        search.style.width="120px";
        
    }
    else 
    {
        navmenu.style.display="";
        navmenu.style.width="";
        navmenu.style.height="";
        navmenu.style.flexDirection="";
        navmenu.style.justifyContent="";
        navleft.style.display="";
        navright.style.display="";
        navbuffer.style.display="";
        navstart.style.justifySelf="";
        navleft.style.flexDirection="";
        navright.style.flexDirection="";
        navright.style.justifySelf="";
        search.style.width="";
    }
}   

ham.addEventListener("click",(event)=>{
    toggle_nav_ham();
}
);
searchButton.addEventListener("click",(event)=>{
    onClickSearch();
}
);
function onClickSearch(){
    searchButton.style.backgroundColor="rgba(0,0,0,0.3)";
}
let x=615-(4/10)*viewWidth;
imagePopup.style.right=x+'px';
function loginPopup(){
    popupClass.style.display="initial";
}
function closeLoginPopup(){
    popupClass.style.display="none";
}
