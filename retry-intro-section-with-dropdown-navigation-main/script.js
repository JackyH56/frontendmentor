const features = document.querySelector(".header__link--features");
const featuresIcon = document.querySelector(
  ".header__link--features-dropdown-arrow"
);
const featureCard = document.querySelector(".features-card");

const company = document.querySelector(".header__link--company");
const companyIcon = document.querySelector(
  ".header__link--company-dropdown-arrow"
);
const companyCard = document.querySelector(".company-card");

function handleFeatureCard() {
  if (featureCard.style.display === "flex") {
    featureCard.style.display = "none";
    featuresIcon.src = "images/icon-arrow-down.svg";
  } else {
    featureCard.style.display = "flex";
    featuresIcon.src = "images/icon-arrow-up.svg";
  }
}

function handleCompanyCard() {
  if (companyCard.style.display === "flex") {
    companyCard.style.display = "none";
    companyIcon.src = "images/icon-arrow-down.svg";
  } else {
    companyCard.style.display = "flex";
    companyIcon.src = "images/icon-arrow-up.svg";
  }
}

features.addEventListener("click", handleFeatureCard);
company.addEventListener("click", handleCompanyCard);
