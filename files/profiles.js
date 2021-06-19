const leftContainer=document.querySelector(".leftContainer");
const ham_2=document.getElementById("ham_2");
const leftChildren=leftContainer.children;
const ham2img=document.getElementById("ham2img");

function toggle_profile_ham(){
    if(leftContainer.style.display==""||leftContainer.style.display=="none")
    {
        leftContainer.style.width="180px";
        leftContainer.style.maxWidth="50%";
        leftChildren[0].style.width="90%";
        leftContainer.style.transition="ease-in 1s";
        leftContainer.style.bottom="20px";
        leftContainer.style.display="flex";
        leftContainer.style.flexDirection="column";
        leftContainer.style.justifyItems="flex-end";
        leftContainer.style.position="fixed";
        leftContainer.style.backgroundColor="#f9e4e7";
        leftContainer.style.borderRadius="0 0 30px 0";
        ham2img.style.borderRadius="0 0 25px 25px";
        ham_2.style.borderRadius="0 0 25px 25px";
    }
    else
    {leftContainer.style.width="";
    leftChildren[0].style.width="";
    leftContainer.style.transition="";
    leftContainer.style.bottom="";
    leftContainer.style.display="";
    leftContainer.style.flexDirection="";
    leftContainer.style.justifyItems="";
    leftContainer.style.position="";
    leftContainer.style.backgroundColor="";
    leftContainer.style.borderRadius="";
    ham2img.style.borderRadius="";
    ham_2.style.borderRadius="";
    }
}

ham_2.addEventListener("click",(Event)=>{
    toggle_profile_ham();
})