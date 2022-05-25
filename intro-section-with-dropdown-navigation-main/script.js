let featuresMenuOpen = false;
let companyMenuOpen = false;

function handleFeaturesDropdown() {
  let dropdownIcon = document.querySelector(".features-dropdown-icon");
  let dropdownContent = document.querySelector(".features-dropdown-content");

  if (featuresMenuOpen) {
    dropdownIcon.src = "images/icon-arrow-down.svg";
    featuresMenuOpen = false;
    dropdownContent.style.display = "none";
  } else {
    dropdownIcon.src = "images/icon-arrow-up.svg";
    featuresMenuOpen = true;
    dropdownContent.style.display = "flex";
  }
}

function handleFeaturesDropdownSideNav() {
  let dropdownIcon = document.querySelector(".features-dropdown-icon-side");
  let dropdownContent = document.querySelector(
    ".features-dropdown-content-sidenav"
  );

  if (featuresMenuOpen) {
    dropdownIcon.src = ".images/icon-arrow-down.svg";
    featuresMenuOpen = false;
    dropdownContent.style.display = "none";
  } else {
    dropdownIcon.src = "images/icon-arrow-up.svg";
    featuresMenuOpen = true;
    dropdownContent.style.display = "block";
  }
}

function handleCompanyDropdown() {
  let dropdownIcon = document.querySelector(".company-dropdown-icon");
  let dropdownContent = document.querySelector(".company-dropdown-content");
  console.log(dropdownIcon);
  console.log(dropdownContent);
  if (companyMenuOpen) {
    dropdownIcon.src = "images/icon-arrow-down.svg";
    companyMenuOpen = false;
    dropdownContent.style.display = "none";
  } else {
    dropdownIcon.src = "images/icon-arrow-up.svg";
    companyMenuOpen = true;
    dropdownContent.style.display = "flex";
  }
}

function handleCompanyDropdownSideNav() {
  let dropdownIcon = document.querySelector(".company-dropdown-icon-sidenav");
  let dropdownContent = document.querySelector(
    "company-dropdown-content-sidenav"
  );
  console.log(dropdownIcon);
  console.log(dropdownContent);
  if (companyMenuOpen) {
    dropdownIcon.src = "images/icon-arrow-down.svg";
    companyMenuOpen = false;
    dropdownContent.style.display = "none";
  } else {
    dropdownIcon.src = "images/icon-arrow-up.svg";
    companyMenuOpen = true;
    dropdownContent.style.display = "block";
  }
}

/* Set the width of the side navigation to 250px */
function openNav() {
  document.querySelector(".sidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.querySelector(".sidenav").style.width = "0";
}
