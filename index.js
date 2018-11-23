function ValidateForm(){
 var validUsername = false;
 var validUserPassword = false;
 var errorMessages ="";  // All the error messages are going to stay in this variable
 /*********** VALIDATES USERNAME ******** */
 //Required field
//This syntax is using name-of-form.name-of-field.value
// You can also use document.getElementById("id-of-field").value

/*********** VALIDATES USERNAME ******** */
  // Required. Maximum 12 characters.
 if (myContact.username.value.length > 0 &&
 myContact.username.value.length < 12|| 
      myContact.username.value===null||
      myContact.username.value==="") 
   errorMessages += "<p>The username must be less than 12 characters and it is required</p>";
  else 
  validUsername =true;
 console.log(validUsername);  
 /*********** VALIDATES FirstName  ******** */
 if (myContact.firstname.value==null ||
 myContact.firstname.value=== "" ||
 myContact.firstname.value.length >20)
 errorMessages += "<p>The firstname must be less than 20 characters and it is required</p>";
 else
 validFirstName = true; 
 document.getElementById("errorMessages").innerHTML = errorMessages;
// Make sure you return all the boolean variables that are checking each field
 return (validUsername && validUserPassword && validFirstName) ;
}
