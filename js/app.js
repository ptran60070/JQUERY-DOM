$(document).ready(function() {
  $("#img_list img").each(function() {
    //storing DOM elements
    let imgURL = $(this).attr("src");
    let caption = $(this).attr("title");
    
    //preload images for the links so there isn't lag
    let galleryImg = new Image() ;
    galleryImg.src = imgURL;
    
    //event handler
    $(this).hover(function(e) {
      $("#image").attr("src", imgURL);
      $("#caption").text(caption);
    });
    //prevent default click event
    $(this).click(function(ev) {
      ev.preventDefault();
     });
    
  });
  $("li:first-child a").hover();
});



// Dom Manipulation

function updateHobby() {
  let hobbyCount = document.getElementById("hobbies").childElementCount;
  document.getElementById("total_hobbies").innerHTML = "Total Hobbies: " +         hobbyCount;
}

function userInput(){
  let userHobby = prompt("Enter a hobby you would like to add to the list: ");
  let newHobby = document.createElement('li');
  let newHobbyText = document.createTextNode(userHobby);
  newHobby.appendChild(newHobbyText);
  let positionH = document.getElementsByTagName('ul')[1];
  positionH.appendChild(newHobby);
  updateHobby();
}

updateHobby();