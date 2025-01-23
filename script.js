document.addEventListener('DOMContentLoaded', () => {
    const circles = document.querySelectorAll('.circle');
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');

    let activeIndex = 0;

    function updateButtons() {
        // Disable 'previous' button if on the first circle
        prevButton.disabled = activeIndex === 0;
        // Disable 'next' button if all circles are active
        nextButton.disabled = activeIndex === circles.length - 1;
    }

    function updateCircles() {
        // Remove 'active' class from all circles
        circles.forEach((circle, index) => {
            if (index <= activeIndex) {
                circle.classList.add('active');
            } else {
                circle.classList.remove('active');
            }
        });
    }

    nextButton.addEventListener('click', () => {
        if (activeIndex < circles.length - 1) {
            activeIndex++;
            updateCircles();
            updateButtons();
        }
    });

    prevButton.addEventListener('click', () => {
        if (activeIndex > 0) {
            activeIndex--;
            updateCircles();
            updateButtons();
        }
    });

    // Initialize the UI
    updateCircles();
    updateButtons();
});
