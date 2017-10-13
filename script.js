function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
function validate()
      {
      
         if( document.myForm.name.value == "" )
         {
            document.getElementById("validation1").innerHTML = "Please provide your name" ;
            document.myForm.name.focus() ;
            return false;
         } else {
         	document.getElementById("validation1").innerHTML = "";
         }
         
         if( document.myForm.lname.value == "" )
         {
            document.getElementById("validation2").innerHTML = "Please provide your last name" ;
            document.myForm.lname.focus() ;
            return false;
         } else {
         	document.getElementById("validation2").innerHTML = "";
         }
         if( document.myForm.message.value == "" )
         {
            document.getElementById("validation3").innerHTML = "Enter some text" ;
            document.myForm.message.focus() ;
            return false;
         } else {
         	document.getElementById("validation3").innerHTML = "";
         }
         return( true );
      }