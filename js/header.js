const modal = document.getElementById("main-modal");
const modalButton = document.getElementById("modal-button");

const searchBar = document.getElementById("search-bar");
const searchButton = document.getElementById("search-button");

modalButton.onclick = () => {
  if (modal.style.display === "none") {
    modal.style.display = "flex";
  } else {
    modal.style.display = "none";
  }
};

searchButton.onclick = () => {
  if (searchBar.style.opacity === "0") {
    searchBar.style.opacity = "1";
    searchBar.style.transform = "translateY(0px)";
  } else {
    searchBar.style.opacity = "0";
    searchBar.style.transform = "translateY(-150px)";
  }
};
