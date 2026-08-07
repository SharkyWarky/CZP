const current = document.querySelector(".current");

function updatePage() {
    const hash = window.location.hash || "#home";
    const id = hash.substring(1);

    // Hide all sections
    document.querySelectorAll("section").forEach((section) => {
        section.style.display = "none";
    });

    // Show current section
    const page = document.getElementById(id);

    if (page) {
        page.style.display = "block";
    }

    // Remove active classes
    document.querySelectorAll(".active").forEach((element) => {
        element.classList.remove("active");
    });

    // Find matching link
    const activeLink = document.querySelector(`a[href="${hash}"]`);

    if (activeLink) {
        activeLink.classList.add("active");

        const dropdown = activeLink.closest(".dropdown");

        if (dropdown) {
            dropdown.querySelector(".dropbtn")?.classList.add("active");
        }

        current.textContent = activeLink.textContent;

        // Change browser title
        document.title = `CZP - ${activeLink.textContent}`;
    }
    updateVersions();
}

// When clicking a link, update URL hash
document.querySelectorAll('nav a[href^="#"], .dropdown-content a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.hash = link.getAttribute("href");
    });
});

// Run when URL changes
window.addEventListener("hashchange", updatePage);

// Run on initial load
window.addEventListener("DOMContentLoaded", updatePage);
