// Sticky navbar
window.addEventListener("scroll", () => {
    document.querySelector("nav").classList.toggle("scrolled", window.scrollY > 50);
});

// Smooth scroll
document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(link.getAttribute("href"))
                .scrollIntoView({ behavior: 'smooth' });
    });
});

// Testimonials slider
let index = 0;
setInterval(() => {
    const slides = document.querySelectorAll(".review");
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index % slides.length].classList.add("active");
    index++;
}, 3000);

// Simple contact form validation
document.getElementById("contactForm").addEventListener("submit", e => {
    const phone = document.querySelector("input[name='phone']").value;
    if (!phone.match(/^[6-9]\d{9}$/)) {
        e.preventDefault();
        alert("Enter a valid 10‑digit Indian mobile number");
    }
});
