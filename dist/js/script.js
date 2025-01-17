// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const toTop = document.querySelector("#toTop");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.add("flex");
    toTop.classList.remove("hidden");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// klik di luar humberger
window.addEventListener("click", function (event) {
  if (
    !event.target.matches("#hamburger") &&
    !event.target.matches("#nav-menu a")
  ) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// darkmode toggle
const darkModeToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkModeToggle.addEventListener("click", function () {
  if (darkModeToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// pindahkan posisi toggle sesuai mode
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkModeToggle.checked = true;
} else {
  darkModeToggle.checked = false;
}

// Carousel
