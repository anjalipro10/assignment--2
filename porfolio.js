function validation(){
    if(document.FormFill.Name.value==""){
        document.getElementById("result").innerHTML = "Enter your name*";
        return false;
    }

     else if(document.FormFill.Name.value.length<6){
         document.getElementById("result").innerHTML = "At least 6 letter*";
         return false;
     }

     else if(document.FormFill.Email.value==""){
         document.getElementById("result").innerHTML = "Enter Email*";
         return false;
     }

     else if(document.FormFill.Password.value==""){
         document.getElementById("result").innerHTML = "Enter Password*";
         return false;
     }

    
     else if(document.FormFill.cpassword.value==""){
         document.getElementById("result").innerHTML="Enter conform Password*";
         return false;
     }

     else if(document.FormFill.Password.value!==document.FormFill.cpassword.value){
        document.getElementById("result").innerHTML = "Password doesn't match*";
        return false;
    }

     else if(document.FormFill.Password.value.length<6){
         document.getElementById("result").innerHTML = "Password must be 6 letter*";
         return false;
    }

     else if(document.FormFill.Password.value.length<6){
            popup.classList.add("open-slide")
            return false;
    }

    var popup=document.getElementById('popup')
    

}
