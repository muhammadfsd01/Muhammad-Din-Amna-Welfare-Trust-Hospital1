// script.js

document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  const navToggle = document.querySelector('.mobile-nav-toggle');
  const navbarUl = document.querySelector('.navbar ul');

  navToggle.addEventListener('click', function () {
    navbarUl.classList.toggle('open');
    navToggle.classList.toggle('open');
  });

  // Close nav on link click (mobile)
  navbarUl.addEventListener('click', function (e) {
    if (e.target.tagName === "A" && window.innerWidth < 601) {
      navbarUl.classList.remove('open');
      navToggle.classList.remove('open');
    }
  });

  // Sticky header on scroll
  const header = document.getElementById('header');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 60) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }

    // Toggle scroll-to-top button
    if (window.scrollY > 200) {
      scrollTopBtn.style.display = 'block';
    } else {
      scrollTopBtn.style.display = 'none';
    }
  });

  // Smooth scrolling for anchor links (with keyboard accessibility)
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId.length > 1 && document.querySelector(targetId)) {
        e.preventDefault();
        document.querySelector(targetId).scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Scroll-to-top button
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  scrollTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Contact Form Handler (simple demonstration only - NOT for production!)
  const contactForm = document.querySelector('.contact-form');
  const formResponse = document.getElementById('form-response');

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Basic front-end validation
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const phone = contactForm.phone.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !email || !phone || !message) {
      formResponse.textContent = "Please fill all fields.";
      formResponse.style.color = "#ea5959";
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      formResponse.textContent = "Please enter a valid email address.";
      formResponse.style.color = "#ea5959";
      return;
    }

    // Simulate successful submission
    formResponse.textContent = "Thank you for contacting us! We will get in touch soon.";
    formResponse.style.color = "#19bb7c";
    contactForm.reset();

    // Optionally, here you would POST data to your server (via fetch/AJAX)
  });
}); 