var templogin = {};


//change login button to logout if a user is logged in

if($.isEmptyObject(templogin) == false) {
  $("#login").text("Log Out")
};

$("#login").click(function(e){
  e.preventDefault()
  document.location.href = "loginfinal.html"
})
