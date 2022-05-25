const submit = document.getElementById("submit-button");

const form = document.getElementById("form");
const ratingCardHolder = document.getElementById("rating-card-holder");
const thankCardHolder = document.getElementById("thank-card-holder");
const button1 = document.getElementById("rating1");
const button2 = document.getElementById("rating2");
const button3 = document.getElementById("rating3");
const button4 = document.getElementById("rating4");
const button5 = document.getElementById("rating5");
const buttons = [button1, button2, button3, button4, button5];

let selection = 0;

function submitRating() {
  if (selection == 0) {
    alert("rating was not selected");
  } else {
    ratingCardHolder.style.display = "none";
    thankCardHolder.style.display = "flex";
    document.getElementById("chosen-rating").innerHTML = selection;
  }
}

function selected(rating) {
  selection = rating;
  console.log(selection);
}
