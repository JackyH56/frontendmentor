const submit = document.querySelector(".submit-button");

const form = document.querySelector(".form");
const ratingCardHolder = document.querySelector(".rating-card");
const thankCardHolder = document.querySelector(".thank-card");

let selection = 0;

function submitRating() {
  if (selection == 0) {
    alert("rating was not selected");
  } else {
    ratingCardHolder.style.display = "none";
    thankCardHolder.style.display = "flex";
    document.querySelector(".chosen-rating").innerHTML = selection;
  }
}

function selected(rating) {
  selection = rating;
  console.log(selection);
}
