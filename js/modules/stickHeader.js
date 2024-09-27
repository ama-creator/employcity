// sticky header
export const stickHeader = () => {
  const header = document.querySelector(".header");

  if (scrollY) header.classList = "header header--active";

  window.addEventListener("scroll", (e) => {
    if (!scrollY) header.classList = "header";
    else header.classList = "header header--active";
  });
};