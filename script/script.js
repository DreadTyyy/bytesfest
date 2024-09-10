window.addEventListener("load", () => {
  const menu = document.querySelector("#menu");
  const navbarMenu =document.querySelector('.navbar-menu');
  const navLinks = document.querySelectorAll('.navbar-menu ul li a');

  menu.addEventListener("click", () => {
    menu.classList.toggle("active-nav");
    navbarMenu.classList.toggle('active-nav');
  });
  navLinks.forEach(navLink => {
    navLink.addEventListener('click', () => {
      menu.classList.remove("active-nav");
      navbarMenu.classList.remove('active-nav');
    })
  });

  const motifBatiks = document.querySelectorAll(".motif-batik");

  motifBatiks.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      motifBatiks.forEach((item) => item.classList.remove("collapse-active"));

      el.classList.add("collapse-active");
    });
  });

  function checkVisibility(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }

  function isVisible(el, className) {
    function onScroll() {
      if (checkVisibility(el)) {
        el.classList.add(className);
        window.removeEventListener("scroll", onScroll);
      }
    }

    onScroll();
    window.addEventListener("scroll", onScroll);
  }

  const kontenBatik = document.querySelector(".konten-batik");
  const kontenWayang = document.querySelector(".konten-wayang");

  isVisible(kontenBatik, "show");
  isVisible(kontenWayang, "show");

  const batasFotoContainers = document.querySelectorAll(".batas-foto");
  let maxHeight = 0;

  batasFotoContainers.forEach((container) => {
    const rect = container.getBoundingClientRect();
    if (rect.height > maxHeight) {
      maxHeight = rect.height;
    }
    console.log(rect.height);
  });

  batasFotoContainers.forEach((container) => {
    container.style.height = maxHeight + "px";
  });
});
