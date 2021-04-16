
var 
not_valid = new Array(),
path =  document.getElementById ("sub"),
fname = document.getElementById ("fn"),
dv1 = document.getElementById ("div1"),
lnam = document.getElementById ("ln"),
dv2 = document.getElementById ("div2"),
bdate = lname=document.getElementById ("dt"),
dv3 = document.getElementById ("div3"),
email = document.getElementById ("Email"),
dv4 = document.getElementById ("div4"),
passw = document.getElementById ("pass"),
dv5 = document.getElementById ("div5"),
cpassw = document.getElementById ("cpass"),
dv6 = document.getElementById ("div6");
fdiv =  document.getElementById ("md");

for (let i = 0; i <= 7; i++)
{
not_valid[i] = 5;
}  

function fnVa(containr,dn)
{
if(emptyVa(containr,dn))
  { 
   return 1;
  }
   else if(containr.value.search(/[0-9]/)>=0)
  {
    dn.innerHTML="contain letters only";
    return 1;
  }
 
  else
  return 0;
}

function emptyVa(containr,dn)
{
if(containr.value =="")
{ 
dn.innerHTML="Can't be empty";
return 1;
}
else
return 0;
}
function emailVa()
{
if(email.value=="")
div4.innerHTML="Can't be empty";
else if(email.value.search(/...@+...+.com/)<0)
 {
     div4.innerHTML="not valid";
     return 1;
 } 
 else 
 return 0;
}

function Similarity(cont1,cont2,dn)
{
if(cont1.value != cont2.value)
{
    dn.innerHTML="they are not same";
    return 1;
}
else 
return 0;
}
var nz=0;

path.onmouseup = function ()
{
"use strict";

if ( fnVa(fname,div1) )  { not_valid[0] = 1 ;} else not_valid[0] = 0;
if ( fnVa(lnam,div2) )   { not_valid[1] = 1 ;} else not_valid[1] = 0;
if ( emailVa()) { not_valid[2] = 1 ;}  else not_valid[2] = 0;
if ( emptyVa(email,div4))   { not_valid[3] = 1 ;} else not_valid[3] = 0;
if ( emptyVa(passw,div5))   { not_valid[4] = 1 ;} else not_valid[4] = 0;
if ( emptyVa(cpassw,div6))  { not_valid[5] = 1 ;} else not_valid[5] = 0;
if ( Similarity(passw,cpassw,dv6) )  { not_valid[6] = 1 ;} else  not_valid[6] = 0 ;

for (let i = 0; i < 7; i++)
{    
   if(not_valid[i]==0)
      {
          nz++;
      }
}

if(nz==7)
location.replace("../admin/manageAdmin.html");
else 
{
 document.getElementById("form").style.height="750px" 

 setTimeout (' window.location.reload()',2000);
 
}

}


