gsap.registerPlugin(ScrollTrigger);

const easeTopElements = document.querySelectorAll(".ease-top");
// Loop setiap elemen
easeTopElements.forEach((element) => {
  // Ambil nilai delay dari atribut data-delay
  const delay = element.getAttribute("data-delay") || 0; // Jika tidak ada delay, default ke 0

  // GSAP fromTo animation dengan delay dari HTML
  gsap.fromTo(
    element,
    {
      y: 100,
      opacity: 0,
    },
    {
      duration: 1,
      y: 0,
      opacity: 1,
      delay: parseFloat(delay), // Gunakan nilai delay yang diambil dari HTML
      ease: "power3.out",
      scrollTrigger: {
        trigger: element, // Trigger animasi ketika elemen ini masuk viewport
        start: "top 100%", // Mulai animasi ketika 80% dari elemen berada di viewport
        toggleActions: "play none none none", // Hanya mainkan animasi sekali
      },
    }
  );
});

const easeBottomElements = document.querySelectorAll(".ease-bottom");

// Loop setiap elemen
easeBottomElements.forEach((element) => {
  // Ambil nilai delay dari atribut data-delay
  const delay = element.getAttribute("data-delay") || 0; // Jika tidak ada delay, default ke 0

  // GSAP fromTo animation dengan delay dari HTML
  gsap.fromTo(
    element,
    {
      y: -100,
      opacity: 0,
    },
    {
      duration: 1,
      y: 0,
      opacity: 1,
      delay: parseFloat(delay), // Gunakan nilai delay yang diambil dari HTML
      ease: "power3.out",
      scrollTrigger: {
        trigger: element, // Trigger animasi ketika elemen ini masuk viewport
        start: "top 80%", // Mulai animasi ketika 80% dari elemen berada di viewport
        toggleActions: "play none none none", // Hanya mainkan animasi sekali
      },
    }
  );
});

const openBottoms = document.querySelectorAll(".open-bottom");

openBottoms.forEach((openBottom) => {
  const fullHeight = openBottom.scrollHeight;
  const element = openBottom.querySelector("div");
  const delay = openBottom.getAttribute("data-delay") || 0; // Jika tidak ada delay, default ke 0
  //   alert(fullHeight);

  openBottom.style.height = `${fullHeight}px`;
  openBottom.style.overflow = `hidden`;

  gsap.fromTo(
    element,
    {
      y: `-${fullHeight}px`,
    },
    {
      duration: 1,
      y: 0,
      delay: parseFloat(delay), // Gunakan nilai delay yang diambil dari HTML
      onComplete: () => {
        // Set height menjadi auto setelah animasi selesai
        openBottom.style.height = "auto";
      },
      scrollTrigger: {
        trigger: openBottom, // Trigger animasi ketika elemen ini masuk viewport
        start: "top 80%", // Mulai animasi ketika 80% dari elemen berada di viewport
        toggleActions: "play none none none", // Hanya mainkan animasi sekali
      },
    }
  );
});

const openRights = document.querySelectorAll(".open-right");

openRights.forEach((openRight) => {
  const fullHeight = openRight.scrollWidth;
  const element = openRight.querySelector("div");
  const delay = openRight.getAttribute("data-delay") || 0; // Jika tidak ada delay, default ke 0
  //   alert(fullHeight);

  openRight.style.width = `${fullHeight}px`;
  openRight.style.overflow = `hidden`;

  gsap.fromTo(
    element,
    {
      x: `-${fullHeight}px`,
    },
    {
      duration: 1,
      x: 0,
      delay: parseFloat(delay), // Gunakan nilai delay yang diambil dari HTML
      onComplete: () => {
        // Set height menjadi auto setelah animasi selesai
        openRight.style.width = "auto";
      },
      scrollTrigger: {
        trigger: openRight, // Trigger animasi ketika elemen ini masuk viewport
        start: "top 80%", // Mulai animasi ketika 80% dari elemen berada di viewport
        toggleActions: "play none none none", // Hanya mainkan animasi sekali
      },
    }
  );
});
