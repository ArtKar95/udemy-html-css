//Current year
currentYear = new Date().getFullYear();
const year = document.querySelector(".year");
year.textContent = currentYear;

//Burger navigation

const navBtn = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

navBtn.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

//scroll smooth for all browsers
const links = document.querySelectorAll("a:link");

links.forEach((l) => {
  l.addEventListener("click", (e) => {
    e.preventDefault();
    const href = l.getAttribute("href");
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    if (href !== "#" && href.startsWith("#")) {
      const section = document.querySelector(href);
      section.scrollIntoView({ behavior: "smooth" });
    }
    if (l.classList.contains("nav-link")) {
      header.classList.toggle("nav-open");
    }
  });
});

//sticky
const sectionHero = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHero);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);

  //It is for old versions
  // if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
