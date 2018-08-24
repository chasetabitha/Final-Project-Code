
var templogin = {};


//change login button to logout if a user is logged in

if($.isEmptyObject(templogin) == false) {
  $("#login").text("Log Out")
}
//else{
  //document.location.href = "loginfinal.html"
//};

//hide fields
$(".search").hide();
$(".translate").hide();
$(".random").hide();
//show fields when clicked
$("#endpoint").change(function(){
  $(".search").hide();
  $(".translate").hide();
  $(".random").hide();
//if search is the val
if($("#endpoint").val() == "search"){
  $(".search").show();}

// else if translate is the val
else{ if($("#endpoint").val() == "translate")
  {$(".translate").show();
}
// else if random is the val
else{
  $(".random").show();
}
}
})


$("#submit").click(function(e){
  e.preventDefault()
  var endpoints = {search: `https://api.giphy.com/v1/gifs/search?api_key=udRWVuWx7AqvQWKUVyKiOUQgCAwOnZ5Q&q=${$(searchBox).val()}&limit=${$(limit).val()}&offset=${$(offset).val()}&rating=${$(ratingMenu).val()}&lang=${$(language).val()}`,
  translate: `https://api.giphy.com/v1/gifs/translate?api_key=udRWVuWx7AqvQWKUVyKiOUQgCAwOnZ5Q&s=${$(searchBox).val()}`,
  random: `https://api.giphy.com/v1/gifs/random?api_key=udRWVuWx7AqvQWKUVyKiOUQgCAwOnZ5Q&tag=${$(searchBox).val()}&rating=${$(ratingMenu).val()}`}
console.log(endpoints[$("#endpoint").val()])
  $.getJSON(`${endpoints[$("#endpoint").val()]}`, function(json){
  var gifReturn = json.data
  var metaCheck = json.meta
if(metaCheck.status !== 200){
  $("#errorSection").text("An Error has Occured.  Please try again later.")
}
console.log(json)
createGifGrid(gifReturn)
})
})


//create GIF grid
function createGifGrid(gifReturn){
  if(Array.isArray(gifReturn)){
for (var i in gifReturn){
  appendGif(gifReturn[i])
}
}
  else{
    appendGif(gifReturn)
  }
}
//create gif cards
function appendGif(gif){
var gifCards = $(`<div class="card">
  <div class="card-body">
  <img class="col-4" style: src= ${gif.images.downsized.url}></img>
    <h5 class="card-title">${gif.title}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${gif.import_datetime}</h6>
    <h6 class="card-subtitle mb-2 text-muted">${gif.images.downsized.url}</h6>
  </div>
</div>`);
$("#gifGrid").append(gifCards)
}
