document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for your message! I'll get back to you soon.");
});
// Smooth scrolling with animation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1); // Remove the '#' from the href
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Use smooth scroll behavior
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth' // This triggers a smooth scroll
            });
        }
    });
});
// Rotating titles
const titles = ["Programmer", "Developer", "YouTuber", "Game Developer"];
let titleIndex = 0;

function updateRotatingText() {
    const rotatingTextElement = document.querySelector(".rotating-text");
    rotatingTextElement.textContent = titles[titleIndex];

    // Move to the next title
    titleIndex = (titleIndex + 1) % titles.length;
}

// Start the rotation with an interval
setInterval(updateRotatingText, 2000); // Update every 2 seconds

// Initialize with the first title
updateRotatingText();
