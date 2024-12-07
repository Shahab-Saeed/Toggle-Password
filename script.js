let password=document.getElementById("password")
let eyeicon=document.getElementById("eyeicon")



eyeicon.addEventListener("click",()=>{
    if(password.type=="password"){
        eyeicon.src="eye-open.png"
        password.type="text"
    }
    else{
        password.type="password"
        eyeicon.src="eye-close.png"

    }
})