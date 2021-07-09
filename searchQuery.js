const filters = document.querySelector(".filters");
function toggleHam2() {
  if (filters.style.display == "none" || filters.style.display == "")
    filters.style.display = "initial";
  else {
    filters.style.display = "none";
  }
}
