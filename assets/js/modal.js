// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Select all project items that open the modal
  const portfolioItems = document.querySelectorAll(".rn-portfolio");

  // Select the image inside the modal
  const modalImage = document.querySelector("#exampleModalCenter .portfolio-popup-thumbnail img");

  // Loop through each portfolio item
  portfolioItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Find the image inside the clicked portfolio item
      const img = item.querySelector(".thumbnail img");
      console.log("image", img);
      

      if (img && modalImage) {
        // Update the modal image src to match the clicked one
        modalImage.src = img.src;
        modalImage.alt = img.alt || "Portfolio image";
      }
    });
  });
});
