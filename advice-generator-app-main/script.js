const url = "https://api.adviceslip.com/advice";

function getQuote() {
  console.log("hello");
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.send();

  xhr.onreadystatechange = (e) => {
    var json = JSON.parse(xhr.responseText);
    console.log(json);

    document.querySelector(".card__eyebrow-number").innerHTML = json.slip.id;
    document.querySelector(".card__advice-text").innerHTML =
      '"' + json.slip.advice + '"';
  };
}
