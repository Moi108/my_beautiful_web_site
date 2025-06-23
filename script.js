const imageListContainer = document.querySelector(".image-list-container");
const imageList = document.querySelector(".image-list");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

const scrollStep = 300;

leftArrow.addEventListener("click", () => {
    imageListContainer.scrollBy({ left: -scrollStep, behavior: "smooth" });
});

rightArrow.addEventListener("click", () => {
    imageListContainer.scrollBy({ left: scrollStep, behavior: "smooth" });
});

// Show or hide arrows based on scroll position
imageList.addEventListener("scroll", () => {
  const scrollPosition = imageListContainer.scrollLeft;
  const maxScroll = imageListContainer.scrollWidth - imageListContainer.clientWidth;

  leftArrow.style.display = scrollPosition === 0 ? "none" : "block";
  rightArrow.style.display = scrollPosition >= maxScroll ? "none" : "block";
});