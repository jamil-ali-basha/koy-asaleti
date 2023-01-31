window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
function toggle() {
  var header = document.querySelector("header");
  header.classList.toggle("active");
}

// toggle

let toggler = document.querySelector(".toggle");
let nav = document.querySelector("nav");
let navAs = document.querySelectorAll(".a");
let close = document.querySelector(".close");

toggler.onclick = function () {
  nav.classList.add("open");
};

close.onclick = function () {
  this.parentElement.classList.remove("open");
};

for (let i = 0; i <= navAs.length; i++) {
  setTimeout(
    (navAs[i].onclick = function () {
      nav.classList.remove("open");
    }),
    500
  );
}

