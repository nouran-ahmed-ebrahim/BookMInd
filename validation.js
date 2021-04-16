document.getElementById('log').onclick = function () {
	
	var email=document.getElementById("email");

	var valid=true;
    if(document.inputForm.email.value==""){
        alert("you don't enter the e-mail");
        document.inputForm.email.focus();
        valid=false;
    }
    else if(document.inputForm.email.value.indexOf("@")==-1||document.inputForm.email.value.indexOf(".com")==-1  ){
      alert("Please Enter valid email, e.g:info@yahoo.com");
      document.inputForm.email.focus();
      valid=false; 

    }
    else if (document.inputForm.username.value==""){
      alert("you don't enter the user name");

     document.inputForm.username.focus();
        valid=false;
    }
    else
    {
       if (document.inputForm.pasword.value ==""){
        alert("you don't enter the password");
        document.inputForm.pasword.focus();
        valid=false;
      }
     else if (document.inputForm.pasword.length<4){
          alert("password must at least 4 characters or 4 numbers");
          valid=false;
      }
    }
console.log(valid);


	if(valid)
	{
	if (email.value=="ahmed@gmail.com"  || email.value=="mohamed@gmail.com")
	{
		location.replace("../admin/dash/dashboard.html");
	}
	else
	{
		location.replace("../homeout.html");
	}
}
	
}
function openfunction()
{
	document.getElementById("sidebar").style.visibility="visible";
   
}
function closefunction()
{
	document.getElementById("sidebar").style.visibility="hidden";
}


