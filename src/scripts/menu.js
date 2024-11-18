document.addEventListener("astro:page-load", () => {
  document.querySelectorAll(".navigation-menu-button").forEach((element) =>
    element.addEventListener("click", () => {
      document
        .querySelector(".navigation")
        .classList.toggle("show-navigation-menu");
      document
        .querySelector(".navigation-fixed")
        .classList.toggle("show-navigation-menu");
    }),
  );
});
