
 function myFunction() {
    var x = document.getElementById("hide");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

window.onresize = function(){window.location = window.location;}

function validates()								 
{ 
	var username = document.forms["RegForm"]["username"];			 
	var email = document.forms["RegForm"]["email"]; 
	var password = document.forms["RegForm"]["Password"]; 
	var gender = document.forms["RegForm"]["gender"]; 
	var checkbox = document.forms["RegForm"]["promotions"]; 
	var dropdown = document.forms["RegForm"]["dropdown"]; 

	if (username.value == "")								 
	{ 
		window.alert("Please enter your name."); 
		username.focus(); 
		return false; 
	} 

	if (email.value == "")							 
	{ 
		window.alert("Please enter your email address."); 
		email.focus(); 
		return false; 
	} 
	
	if (password.value == "")								 
	{ 
		window.alert("Please enter a valid e-mail password."); 
		password.focus(); 
		return false; 
	} 

	if (email.value.indexOf("@", 0) < 0)				 
	{ 
		window.alert("Please enter a valid e-mail address."); 
		email.focus(); 
		return false; 
	} 

	if (email.value.indexOf(".", 0) < 0)				 
	{ 
		window.alert("Please enter a valid e-mail address."); 
		email.focus(); 
		return false; 
	} 


	if (dropdown.selectedIndex < 1)				 
	{ 
		alert("Please select how frequent you want us to email you."); 
		dropdown.focus(); 
		return false; 
	} 

	return true; 
}
