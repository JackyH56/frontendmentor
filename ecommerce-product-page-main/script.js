let cartOpen = false;
let itemsInCart = 0;
let itemsInCounter = 1;
let photoIndex = 1;

const cartBtn = document.querySelector(".nav__cart");
const addToCartBtn = document.querySelector(".text-content__add-to-cart");
const deleteBtn = document.querySelector(".cart-card__product-delete");
const badge = document.querySelector(".nav__cart-badge");
const cartCard = document.querySelector(".cart-card");
const counter = document.querySelector(".text-content__num-items");
const cardDescription = document.querySelector(".cart-card__empty");
const cardItem = document.querySelector(".cart-card__item");
const checkoutBtn = document.querySelector(".cart-card__checkout");
const productQty = document.querySelector(".cart-card__product-quantity");
const thumbnails = document.querySelectorAll(".product-content__thumbnail");
const carouselThumbnails = document.querySelectorAll(".carousel__thumbnail");
const dimmer = document.querySelector(".dimmer");
const total = document.querySelector(".cart-card__product-total");
const carousel = document.querySelector(".carousel");
const closeBtn = document.querySelector(".carousel__close");
const spotlightImage = document.querySelector(
  ".product-content__spotlight-image"
);
const carouselSpotlightImage = document.querySelector(
  ".carousel__spotlight-image"
);
const nextBtn = document.querySelector(".carousel__next");
const previousBtn = document.querySelector(".carousel__previous");
const hamburgerBtn = document.querySelector(".nav__hamburger-icon");
const menuCloseBtn = document.querySelector(".sidenav__close");

function openCartCard() {
  if (!cartOpen) {
    cartCard.style.display = "block";
    cartOpen = true;
  } else {
    closeCartCard();
  }
}

function closeCartCard() {
  cartCard.style.display = "none";
  cartOpen = false;
}

function incrementCart() {
  itemsInCounter++;
  counter.value = itemsInCounter;
}

function decrementCart() {
  if (itemsInCounter > 1) {
    itemsInCounter--;
    counter.value = itemsInCounter;
  }
}

function addToCart() {
  itemsInCart = itemsInCart + itemsInCounter;
  cardDescription.style.display = "none";
  cardItem.style.display = "flex";
  checkoutBtn.style.display = "block";
  productQty.innerHTML = itemsInCart;
  total.innerHTML = "$" + (itemsInCart * 125.0).toFixed(2);
  badge.style.display = "block";
  badge.innerHTML = itemsInCart;
}

function removeFromCart() {
  itemsInCart = 0;
  badge.style.display = "none";
  cardDescription.style.display = "block";
  cardItem.style.display = "none";
  checkoutBtn.style.display = "none";
}

function checkout() {
  alert("Item checked out!");
}

function changeMainPhoto(e) {
  thumbnails.forEach((thumbnail) => {
    thumbnail.classList.remove("product-content__thumbnail--active");
  });
  e.target.classList.add("product-content__thumbnail--active");
  const i = e.target.getAttribute("data-value");
  spotlightImage.src = `images/image-product-${i}.jpg`;
  spotlightImage.setAttribute(
    "data-value",
    e.target.getAttribute("data-value")
  );
}
function openSpotlight(e) {
  // Set spotlight photo
  const i = e.target.getAttribute("data-value");
  photoIndex = i;
  carouselSpotlightImage.src = `images/image-product-${i}.jpg`;
  // Add active state to thumbnail of active photo
  carouselThumbnails.forEach((thumbnail) => {
    if (thumbnail.getAttribute("data-value") == i) {
      thumbnail.classList.add("carousel__thumbnail--active");
    }
  });
  dimmer.style.display = "block";
  carousel.style.display = "block";
}

function changeCarouselPhoto(e) {
  // change active thumbnail
  carouselThumbnails.forEach((carouselThumbnail) => {
    carouselThumbnail.classList.remove("carousel__thumbnail--active");
  });
  e.target.classList.add("carousel__thumbnail--active");

  // change spotlight image src
  const i = e.target.getAttribute("data-value");
  photoIndex = i;
  carouselSpotlightImage.src = `images/image-product-${i}.jpg`;
  carouselSpotlightImage.setAttribute(
    "data-value",
    e.target.getAttribute("data-value")
  );
}

function closeSpotlight() {
  dimmer.style.display = "none";
  carousel.style.display = "none";
  carouselThumbnails.forEach((thumbnail) => {
    thumbnail.classList.remove("carousel__thumbnail--active");
  });
}

function nextPhoto() {
  photoIndex = (photoIndex % 4) + 1;
  console.log(photoIndex);
  carouselSpotlightImage.src = `images/image-product-${photoIndex}.jpg`;
  changeActiveCarouselThumbnail();
}

function previousPhoto() {
  if (photoIndex === 1) {
    photoIndex += 4;
  }
  photoIndex = photoIndex - 1;
  carouselSpotlightImage.src = `images/image-product-${photoIndex}.jpg`;
  changeActiveCarouselThumbnail();
}

function changeActiveCarouselThumbnail() {
  carouselThumbnails.forEach((thumbnail) => {
    if (thumbnail.getAttribute("data-value") == photoIndex) {
      thumbnail.classList.add("carousel__thumbnail--active");
    } else {
      thumbnail.classList.remove("carousel__thumbnail--active");
    }
  });
}

function openNav() {
  document.querySelector(".sidenav").style.width = "15rem";
  dimmer.style.display = "block";
}

function closeNav() {
  document.querySelector(".sidenav").style.width = "0";
  dimmer.style.display = "none";
}

cartBtn.addEventListener("click", openCartCard);
addToCartBtn.addEventListener("click", addToCart);
deleteBtn.addEventListener("click", removeFromCart);
thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", changeMainPhoto);
});
carouselThumbnails.forEach((carouselThumbnail) => {
  carouselThumbnail.addEventListener("click", changeCarouselPhoto);
});
closeBtn.addEventListener("click", closeSpotlight);
spotlightImage.addEventListener("click", openSpotlight);
nextBtn.addEventListener("click", nextPhoto);
previousBtn.addEventListener("click", previousPhoto);
checkoutBtn.addEventListener("click", checkout);
hamburgerBtn.addEventListener("click", openNav);
menuCloseBtn.addEventListener("click", closeNav);
