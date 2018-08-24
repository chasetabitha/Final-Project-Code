var templogin = {};


//change login button to logout if a user is logged in

if($.isEmptyObject(templogin) == false) {
  $("#login").text("Log Out")
};

$("#login").click(function(e){
  e.preventDefault()
  document.location.href = "loginfinal.html"
})

var reviews = [

  {

    "name": "Dragan Perković",

    "rating": 2,

    "reviewDate": "03/12/2018",

    "comments": "They didn't have enough bear gifs. What's the point if they don't have enough bears?!?!"

  },

  {

    "name": "Frank Metzger",

    "rating": 3,

    "reviewDate": "03/02/2018",

    "comments": "Does exactly what it says it will do so good job!"

  },

  {

    "name": "Corinne Quessy",

    "rating": 5,

    "reviewDate": "05/21/2018",

    "comments": "All the cats I could ever want best site EVER!!!!!!"

  },

  {

    "name": "Hannah Harvey",

    "rating": 3,

    "reviewDate": "05/30/2018",

    "comments": "Highly reccomended if you need a ton of gifs."

  },

  {

    "name": "Kayla Bannan",

    "rating": 5,

    "reviewDate": "06/21/18",

    "comments": "What are you waiting for!?!? Sign up now!!!"

  },

  {

    "name": "Tyrone H. Singleton",

    "rating": 3,

    "reviewDate": "04/01/18",

    "comments": "It's ok I guess if this is your thing."

  },

  {

    "name": "Nazario Esposito",

    "rating": 1,

    "reviewDate": "06/30/2018",

    "comments": "I signed up without reading the terms and conditions and didn't realize I would have to pay for this. What the heck!?!"

  },

  {

    "name": "Edvin Nordström",

    "rating": 4,

    "reviewDate": "07/15/2018",

    "comments": "Easy to use, highly reccomended."

  },

  {

    "name": "Anisa Lind",

    "rating": 2,

    "reviewDate": "04/15/18",

    "comments": "Dumb...."

  },

  {

    "name": "Linda Genovesi",

    "rating": 5,

    "reviewDate": "01/12/18",

    "comments": "Great site. Perfect 5/7"

  },

  {

    "name": "Gail S. Brown",

    "rating": 4,

    "reviewDate": "02/25/18",

    "comments": "4/5 stars"

  },

  {

    "name": "Lauren Hayes",

    "rating": 4,

    "reviewDate": "06/06/18",

    "comments": "Just renewed my membership, tots worth it!"

  },

  {

    "name": "Hanne Madsen",

    "rating": 4,

    "reviewDate": "08/01/18",

    "comments": "Love this site!"

  },

  {

    "name": "Steve Grabowski",

    "rating": 5,

    "reviewDate": "02/02/18",

    "comments": "It's a library for gifs just like the advertisement. I mean what else did you want from it?"

  },

  {

    "name": "Reginald J. Farnsworth",

    "rating": 1,

    "reviewDate": "06/18/18",

    "comments": "This isn't the XBOX remote I ordered! What the frick?"

  }

]

console.log(reviews);

//replace full name with first Name
var firstName = reviews.map(function(first){
  first.name = first.name.split(" ")[0];
  return firstName;
  console.log(firstName);
})

//remove ratings less than 3
var reviews = $.grep(reviews, function(e){
  return e.rating > 3;
})
console.log(reviews);


for (var i in reviews){
  appendReviews(reviews[i])
}

//create cards for reviews
function appendReviews(review){
  var reviewCards = $(`<div class="col-sm-3">
    <div class="card h-100 text-center text-white bg-success">
    <div class="card-body -10">
      <h5 class="card-title">${review.name}</h5>
      <h6 class="card-subtitle mb-2">${review.rating}</h6>
      <h6 class="card-subtitle mb-2">${review.reviewDate}</h6>
      <p class="card-text">${review.comments}</p>
      </div>
    </div>
  </div>`);
  $("#reviewCard").append(reviewCards)
}

//console log on submit
$(".submit").click(function(){
  console.log($(".name").val() + "," +  $(".comments").val())
  $("#myModal").modal('hide')

})
