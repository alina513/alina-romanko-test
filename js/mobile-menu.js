// (() => {
//     const menuBtnRef = document.querySelector('[data-menu-button]');
//     const mobileMenuRef = document.querySelector('[data-menu]');

//     menuBtnRef.addEventListener('click', () => {
//       const expanded =
//         menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

//       menuBtnRef.classList.toggle('is-open');
//       menuBtnRef.setAttribute('aria-expanded', !expanded);

//       mobileMenuRef.classList.toggle('is-open');
//       document.body.classList.toggle("no-scroll");
//     });
//   })();

(() => {
  const body = document.body;
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const navLinksItems = document.querySelectorAll(".nav-links a");
  console.dir(navLinksItems);

  hamburger.addEventListener("click", () => {
    const isOpen = hamburger.classList.toggle("is-open");
    navLinks.classList.toggle("is-open", isOpen);
    body.classList.toggle("no-scroll", isOpen);
  });

  navLinksItems.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("is-open");
      navLinks.classList.remove("is-open");
      body.classList.remove("no-scroll");
    });
  });
})();
