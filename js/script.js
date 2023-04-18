    document.getElementById('filter').addEventListener('change', function() {
        var selectedCategory = this.value;
        var productItems = document.querySelectorAll('.product-grid .product-item');

        productItems.forEach(function(productItem) {
            if (selectedCategory === 'all' || productItem.getAttribute('data-category') === selectedCategory) {
                productItem.style.display = 'flex';
            } else {
                productItem.style.display = 'none';
            }
        });
    });
  

  const slider = document.getElementById("testimonial-slider");
const testimonials = slider.querySelectorAll(".testimonial");
let currentIndex = 0;

function scrollToTestimonial(index) {
  slider.style.transform = `translateX(-${index * 100}%)`;
}

function nextTestimonial() {
  currentIndex++;
  if (currentIndex >= testimonials.length) {
    currentIndex = 0;
  }
  scrollToTestimonial(currentIndex);
}

setInterval(nextTestimonial, 3000); // Change the number to adjust the duration between scrolls (in milliseconds)
