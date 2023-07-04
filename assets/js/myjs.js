$("#burger").click(() => {
  console.log("clicked");
  $(".menulinks").toggleClass("active");
});
window.onscroll = function () {
  if (window.scrollY >= "30") {
    $(".nav_").css({ position: "fixed", background: "#550355c2" });
  } else {
    $(".nav_").css({ position: "absolute", background: "transparent" });
    $(".Topheader").css("display", "block");
  }
};
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Toggle active link
const links = document.querySelectorAll(".js-nav a");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    links.forEach((other) => other.classList.remove("is-active"));
    link.classList.add("is-active");
  });
});

// Init classes
new WOW().init();
