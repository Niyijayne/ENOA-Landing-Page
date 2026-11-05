console.log("ENOA JavaScript is running!");
const menuToggle = document.querySelector(".menu-toggle");
const menuClose = document.querySelector(".menu-close");
const mainNav = document.querySelector(".main-nav");
const navOverlay = document.querySelector(".nav-overlay");
const navLinks = mainNav.querySelectorAll("a");

function openMenu() {
  mainNav.classList.add("active");
  navOverlay.classList.add("active");
  document.body.classList.add("nav-open");

  menuToggle.setAttribute("aria-expanded", "true");
}

function closeMenu() {
  mainNav.classList.remove("active");
  navOverlay.classList.remove("active");
  document.body.classList.remove("nav-open");

  menuToggle.setAttribute("aria-expanded", "false");
}

menuToggle.addEventListener("click", openMenu);

menuClose.addEventListener("click", closeMenu);

navOverlay.addEventListener("click", closeMenu);

navLinks.forEach(link => {
  link.addEventListener("click", closeMenu);
});

// Close menu with Escape key
document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeMenu();
  }
});


const currentYear = document.querySelector('#current-year');

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", function () {
  const serviceSelect = document.getElementById("service-required");
  const quoteForm = document.getElementById("quote-form");
  const formStatus = document.getElementById("form-status");

  const serviceMap = {
    "residential-solar": "residential-solar",
    "commercial-solar": "commercial-solar",
    "solar-streetlights": "solar-streetlights",
    "mounting-structures": "mounting-structures",
    "air-conditioning": "air-conditioning",
    "cctv": "cctv",
    "remote-monitoring-maintenance": "remote-monitoring-maintenance",
    "internet-installation": "internet-installation",
    "other-not-sure": "other-not-sure"
  };

  function preselectServiceFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const requestedService = params.get("service");

    if (!requestedService || !serviceSelect) {
      return;
    }

    const normalisedService = requestedService.toLowerCase().trim();
    const matchingValue = serviceMap[normalisedService];

    if (matchingValue) {
      serviceSelect.value = matchingValue;
    }
  }

  function handleFormSubmission(event) {
    event.preventDefault();

    if (!quoteForm.checkValidity()) {
      formStatus.textContent =
        "Please complete the required fields before submitting your request.";
      quoteForm.reportValidity();
      return;
    }

    formStatus.textContent =
      "Thank you. Online submission is not yet connected; please use the phone, WhatsApp or email details above for now.";
  }

  preselectServiceFromUrl();

  if (quoteForm && formStatus) {
    quoteForm.addEventListener("submit", handleFormSubmission);
  }
});

const testimonialTrack = document.getElementById("testimonial-track");
const previousButton = document.querySelector("[data-carousel-prev]");
const nextButton = document.querySelector("[data-carousel-next]");

if (testimonialTrack && previousButton && nextButton) {
  const scrollByCard = (direction) => {
    const card = testimonialTrack.querySelector(".testimonial-card");

    if (!card) return;

    const gap = 24;
    const amount = card.offsetWidth + gap;

    testimonialTrack.scrollBy({
      left: amount * direction,
      behavior: "smooth"
    });
  };

  previousButton.addEventListener("click", () => scrollByCard(-1));
  nextButton.addEventListener("click", () => scrollByCard(1));
}

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}