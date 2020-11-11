const searchButton = document.querySelector(".search-open-button");
const searchPopup = document.querySelector(".search-wrapper");
const searchForm = document.querySelector(".search-form");
const arrivalDate = searchPopup.querySelector(".arrival .date-input");
const departureDate = searchPopup.querySelector(".departure .date-input");
const adultAmount = searchPopup.querySelector(".adult-amount .amount-input");
const childrenAmount = searchPopup.querySelector(".children-amount .amount-input");

searchPopup.classList.remove(".wrapper-display-block");

searchButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  searchPopup.classList.toggle("search-show");
  searchPopup.classList.remove("modal-error");
});

searchForm.addEventListener("submit", function (evt) {
  if (!arrivalDate.value || !departureDate.value || !adultAmount || !childrenAmount) {
    evt.preventDefault();
    searchPopup.classList.remove("modal-error");
    searchPopup.offsetWidth = searchPopup.offsetWidth;
    searchPopup.classList.add("modal-error");
  }
});
