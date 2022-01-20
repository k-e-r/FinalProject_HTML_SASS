const modal = document.querySelector(".menu-mobile-container");
const modalButton = document.querySelector(".menu-toggle");

const searchBar = document.querySelector(".search-container");
const searchButton = document.querySelector(".site-search");

modalButton.onclick = () => {
  modal.style.display === "none"
    ? (modal.style.display = "block")
    : (modal.style.display = "none");
};

searchButton.onclick = () => {
  searchBar.classList.toggle("active");
};
