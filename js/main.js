// Sticky menu background
window.addEventListener("scroll", function () {
   if (window.scrollY > 150) {
      document.querySelector("#navbar").style.opacity = 0.7;
   } else {
      document.querySelector("#navbar").style.opacity = 1;
   }
});

// Smooth Scrolling
$("#navbar a, .btn").on("click", function (event) {
   if (this.hash !== "") {
      event.preventDefault();

      const hash = this.hash;

      $("html, body").animate(
         {
            scrollTop: $(hash).offset().top - 100,
         },
         800
      );
   }
});

const menu_btn = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".mobile-nav");
// const mobile_men = document.querySelector(".mobile-na");
mobile_menu.addEventListener("click", function () {
   menu_btn.classList.toggle("is-active");
   mobile_menu.classList.toggle("is-active");
   //  mobile_men.classList.toggle("is-active");
});

menu_btn.addEventListener("click", function () {
   menu_btn.classList.toggle("is-active");
   mobile_menu.classList.toggle("is-active");
   //  mobile_men.classList.toggle("is-active");
});

const resume = document.querySelector(".resume");
resume.addEventListener("click", () => {
   alert("Adding soon, Thank you!!");
});
