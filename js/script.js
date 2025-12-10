// Contact Form Validation
if (document.getElementById("contactForm")) {
  const form = document.getElementById("contactForm");
  const successMsg = document.getElementById("formSuccess");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      e.stopPropagation();
      form.classList.add("was-validated");
      return;
    }

    // Simulate form submission
    successMsg.classList.remove("d-none");
    form.reset();
    form.classList.remove("was-validated");

    // Hide success message after 5 seconds
    setTimeout(() => {
      successMsg.classList.add("d-none");
    }, 5000);
  });
}
