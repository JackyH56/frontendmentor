let featuresMenuOpen = false;
let companyMenuOpen = false;

function handleFeaturesDropdown() {
  let dropdownIcon = document.querySelector(".topnav__features-dropdown-icon");
  let dropdownContent = document.querySelector(
    ".topnav__features-dropdown-content"
  );

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
  let dropdownIcon = document.querySelector(".sidenav__features-dropdown-icon");
  let dropdownContent = document.querySelector(
    ".sidenav__features-dropdown-content"
  );

  if (featuresMenuOpen) {
    dropdownIcon.src = "images/icon-arrow-down.svg";
    featuresMenuOpen = false;
    dropdownContent.style.display = "none";
  } else {
    dropdownIcon.src = "images/icon-arrow-up.svg";
    featuresMenuOpen = true;
    dropdownContent.style.display = "block";
  }
}

function handleCompanyDropdown() {
  let dropdownIcon = document.querySelector(".topnav__company-dropdown-icon");
  let dropdownContent = document.querySelector(
    ".topnav__company-dropdown-content"
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
    dropdownContent.style.display = "flex";
  }
}

function handleCompanyDropdownSideNav() {
  let dropdownIcon = document.querySelector(".sidenav__company-dropdown-icon");
  let dropdownContent = document.querySelector(
    ".sidenav__company-dropdown-content"
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
  document.querySelector(".sidenav").style.width = "15rem";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.querySelector(".sidenav").style.width = "0";
}
