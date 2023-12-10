((d) => {
  "use strict";
  let toggler = d.querySelector(".toggler"),
    sidebar = d.querySelector(".side-bar"),
    openSideBar = false;
  toggler.addEventListener("click", () => {
    if (!openSideBar) {
      sidebar.style.right = "0px";
      openSideBar = true;
      return;
    }
    sidebar.style.right = "-300px";
    openSideBar = false;
  });
})(document);
