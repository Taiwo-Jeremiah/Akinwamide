const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Update active button
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filterValue = button.getAttribute("data-filter");

    portfolioItems.forEach(item => {
      if (filterValue === "all" || item.classList.contains(filterValue)) {
        item.classList.remove("hide");
      } else {
        item.classList.add("hide");
      }
    });
  });
});



