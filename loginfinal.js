var templogin = {};


//change login button to logout if a user is logged in

if($.isEmptyObject(templogin) == false) {
  $("#login").text("Log Out")
};


var users = [
  {"email": "steveg@example.com",
     "password": "PaSsWoRd",
   "birthday": "2000-09-30 00:00:00",
   "role": "basic"},
  {"email": "hanneM@example.com",
   "password": "hanneRules!",
   "birthday": "1980-04-15 00:00:00",
   "role": "basic"},
  {"email": "lindaG@example.com",
   "password": "lg014589",
   "birthday": "2012-01-03 00:00:00",
   "role": "admin"},
  {"email": "nEsposito@example.it",
   "password": "pswd1234",
   "birthday": "1975-03-23 00:00:00",
   "role": "advanced"},
  {"email": "draganP@example.hr",
   "password": "volimbaku",
   "birthday": "1995-06-06 00:00:00",
   "role": "advanced"}];

   var emailenter = $("#exampleInputEmail1");
   var passwordenter = $("#exampleInputPassword1");
   var submitBtn = $("#submitBtn");
   var errors = $("#errorMessage")


   submitBtn.click(function(e){
     e.preventDefault();
     loginfctn()
   });

   function loginfctn(){
  if(userCheck() !== "WRONG"){
  if(passwordCheck() !=="WRONG") {
    //localstorage.setItem(emailenter.val(), passwordenter.val());
    document.location.href = "library.html"
  }

 else{
  errors.val("Username and/or Password are Incorect");
  emailenter.val("");
  passwordenter.val("");
}
}
}
   //check for Username
   function userCheck(){
   for (var i in users)
     if(users[i].email == emailenter.val()){
       return(emailenter.val())
     }
     else {
       return("WRONG")
   }
 }


 //check for password
 function passwordCheck(){
 for (var i in users)
   if(users[i].password == passwordenter.val()){
     return(passwordenter.val())
   }
   else {
     return("WRONG")
 }
}
