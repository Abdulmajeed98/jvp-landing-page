document.addEventListener("DOMContentLoaded", () => {
  const navBar = document.getElementById("nav-bar");
  console.log(navBar);

  document.addEventListener("scroll", () => {
    if (window.pageYOffset >= 200) {
      navBar.classList.add("sticky");
    } else {
      navBar.classList.remove("sticky");
    }
  });
});
