var 
     not_valid = new Array(),
     test = document.getElementById ("ch"),
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
     fdiv =  document.getElementById ("md"),
     male = document.getElementById("ma"),
     fem = document.getElementById("fe"),
     dv7 = document.getElementById("div7");

for (let i = 0; i <9; i++)
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

 function radio()
 {
   if(!male.checked && !fem.checked)
   {
   dv7.innerHTML="Can't be empty";
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
 var 
   n5 = 9,
   nz = 0;

test.onclick = function ()
{
    "use strict";

    if ( fnVa(fname,div1) )  { not_valid[0] = 1 ;} else not_valid[0] = 0;
    if ( fnVa(lnam,div2) )   { not_valid[1] = 1 ;} else not_valid[1] = 0;
    if ( emptyVa(bdate,div3)) { not_valid[2] = 1 ;}  else not_valid[2] = 0;
    if ( emptyVa(email,div4))   { not_valid[3] = 1 ;} else not_valid[3] = 0;
    if ( emptyVa(passw,div5))   { not_valid[4] = 1 ;} else not_valid[4] = 0;
    if ( emptyVa(cpassw,div6))  { not_valid[5] = 1 ;} else not_valid[5] = 0;
    if ( Similarity(passw,cpassw,dv6) )  { not_valid[6] = 1 ;} else  not_valid[6] = 0 ;
    if ( emailVa()) { not_valid[7] = 1 ;}  else not_valid[7] = 0;
    if ( radio()) { not_valid[8] = 1 ;}  else not_valid[8] = 0;

    for (let i = 0; i < 9; i++)
     {    
        if(not_valid[i]==0)
           {
               nz++;
           }
     }
    
     if(nz==9)
     md.innerHTML='<a href="../homeout.html"><input type="button" id="submit" value="submit"></a><br>';
    else 
    {
        path.style.marginTop="7px";   
        setTimeout('window.location.reload()',4000);
    }
}
  
path.onclick = function ()
{
    if(n5==9)
    alert("Complite the form first");
}
