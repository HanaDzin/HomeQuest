/*=============== CHANGE BACKGROUND HEADER ===============*/

const scrollHeader = () => {
  const header = document.getElementById("header");
  // Add a class if the bottom offset is greater than 50 of the viewport
  this.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};
window.addEventListener("scroll", scrollHeader);

/*=============== SWIPER POPULAR ===============*/

var swiper = new Swiper(".popular-container", {
  spaceBetween: 32,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* =============== FAQ CLICK TOGGLE =============== */

const accordionItems = document.querySelectorAll(".faq-accordion-item");
accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector(".faq-accordion-header");
  accordionHeader.addEventListener("click", () => {
    const openItem = document.querySelector(".accordion-open");
    toggleItem(item);
    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});
const toggleItem = (item) => {
  const accordionContent = item.querySelector(".faq-accordion-content");

  if (item.classList.contains("accordion-open")) {
    accordionContent.removeAttribute("style");
    item.classList.remove("accordion-open");
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + "px";
    item.classList.add("accordion-open");
  }
};

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav-menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 350) scrollUp.classList.add("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

//previously selected theme (if user chose one)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// fetch the current theme (check if it has dark-theme class)
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun"; // toggle the icon

// validate if user previously chose a theme
if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

//activate / deactivate the theme manually via button
themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  //save the theme and icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
/*=============== SCROLL REVEAL ANIMATION ===============*/
