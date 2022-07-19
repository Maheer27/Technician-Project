var servicename;
function showservices(number,element)
{
    servicename=element.childNodes[3].innerHTML;
     window.location.href=`/selectServices.html?number=${number}&name=${servicename}`; 
}
function Logout()
{
    
      localStorage.removeItem("servicesCart");
      localStorage.removeItem("selectedTech");
      localStorage.removeItem("Type");
      localStorage.removeItem("Logedin");

      window.location.replace("login form.html");
    
}

