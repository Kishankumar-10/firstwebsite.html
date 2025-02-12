document.addEventListener("DOMContentLoaded", function () {
    // Form Validation
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent default form submission

            let name = document.getElementById("name").value.trim();
            let phone = document.getElementById("phone").value.trim();
            let address = document.getElementById("address").value.trim();

            if (name === "" || phone === "" || address === "") {
                alert("Please fill in all the fields.");
                return;
            }

            alert("Thank you! Your details have been submitted.");
            contactForm.reset();
        });
    }

    // Mobile Navigation Toggle
    const navToggle = document.createElement("button");
    navToggle.textContent = "☰ Menu";
    navToggle.id = "navToggle";
    document.querySelector("header").prepend(navToggle);

    const nav = document.querySelector("nav ul");
    navToggle.addEventListener("click", function () {
        nav.classList.toggle("show");
    });

    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            if (this.hash !== "") {
                event.preventDefault();
                let target = document.querySelector(this.hash);
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 60,
                        behavior: "smooth"
                    });
                }
            }
        });
    });
});
