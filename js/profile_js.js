    
function validateemail() {  
  var x=document.myform.email.value;  
  var atposition=x.indexOf("@");  
  var dotposition=x.lastIndexOf(".");  
          
  if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
    alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
    return false; 
    }
  } 

function validate(){  
  var name=document.f1.name.value;  
  var passwordlength=document.f1.password.value.length;
  var status=false;  
          
  if(name=="") {  
  document.getElementById("namelocation").innerHTML= "Please enter your First and Last Name";  
  status=false;
  }
  else {  
  document.getElementById("namelocation").innerHTML=" OK ";  
  status=true;
  }  
  
  if(passwordlength<8) {  
  document.getElementById("passwordlocation").innerHTML="Password must be greater than 8";  
  status=false; 
  }
  else { 
  document.getElementById("passwordlocation").innerHTML=" OK ";  
  }  
  return status;  
}    
  