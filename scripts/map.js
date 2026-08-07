// ------------------------------
// Map Version Buttons (Top Bar)
// ------------------------------

const versionButtons = document.querySelectorAll(".map-version-button");

versionButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const game = button.dataset.game;

        // Example:
        // shangri-la-bo3.html
        window.location.href = `${game}.html`;
    });
});

// ------------------------------
// Map Information Tabs (Side Bar)
// ------------------------------

const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

function openTab(tabID, scrollTop = true) {
    // Remove active from everything
    tabButtons.forEach((button) => {
        button.classList.remove("active");
    });

    tabContents.forEach((tab) => {
        tab.classList.remove("active");
    });

    // Find selected tab
    const selectedButton = document.querySelector(`.tab-button[data-tab="${tabID}"]`);

    const selectedContent = document.getElementById(tabID);

    if (selectedButton && selectedContent) {
        selectedButton.classList.add("active");
        selectedContent.classList.add("active");

        // Move page back to the top of the map content
        if (scrollTop) {
            window.scrollTo({
                top: 0,
                behavior: "instant",
            });
        }
    }
}

// Clicking a tab
tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const tabID = button.dataset.tab;

        // Save tab in URL
        window.location.hash = tabID;

        openTab(tabID);
    });
});

window.addEventListener("DOMContentLoaded", () => {
    const hash = window.location.hash.substring(1);

    let tab = tabButtons[0].dataset.tab;
    let anchor = null;

    if (hash) {
        const parts = hash.split("/");

        if (parts.length === 1) {
            // #something
            tab = parts[0];
        } else {
            // #something/something
            tab = parts[0];
            anchor = parts[1];
        }
    }

    // Open the correct tab without moving page
    openTab(tab, false);

    // Only jump if a link caused the refresh
    const shouldJump = sessionStorage.getItem("anchorJump");

    if (shouldJump) {
        sessionStorage.removeItem("anchorJump");

        setTimeout(() => {
            const targetID = anchor || tab;

            const element = document.getElementById(targetID);

            if (element) {
                const y = element.getBoundingClientRect().top + window.pageYOffset - 90;

                window.scrollTo({
                    top: y,
                    behavior: "smooth",
                });

                const glow = element.querySelector(".anchor-glow");

                if (glow) {
                    glow.classList.remove("anchor-highlight");
                    void glow.offsetWidth;
                    glow.classList.add("anchor-highlight");

                    setTimeout(() => {
                        glow.classList.remove("anchor-highlight");
                    }, 2000);
                }
            }
        }, 100);
    }
});

// ------------------------------
// LightBox (Clicking on an Image)
// ------------------------------

const images = document.querySelectorAll(".image-container img");
const viewer = document.querySelector(".image-viewer");
const viewerImage = viewer.querySelector("img");
const viewerTitle = viewer.querySelector(".image-title");

images.forEach((image) => {
    image.addEventListener("click", () => {
        viewerImage.src = image.src;
        viewerTitle.textContent = image.alt;

        viewer.classList.add("active");
    });
});

viewer.addEventListener("click", () => {
    viewer.classList.remove("active");
});

window.addEventListener("hashchange", () => {
    if (window.location.hash.includes("/")) {
        location.reload();
    }
});

// ------------------------------
// Heading Jumping
// ------------------------------

/*document.querySelectorAll(".info-box h2").forEach((heading) => {
    if (!heading.querySelector("span")) {
        heading.innerHTML = `<span>${heading.innerHTML}</span>`;
    }
})*/

// ------------------------------
// Add highlight support to any ID element
// ------------------------------

document.querySelectorAll("[id]").forEach((element) => {
    element.classList.add("anchor-target");
});

// ------------------------------
// Add glow spans to ID elements
// ------------------------------

document.querySelectorAll("[id]").forEach((element) => {
    if (!element.querySelector(".anchor-glow")) {
        const span = document.createElement("span");

        span.classList.add("anchor-glow");

        while (element.firstChild) {
            span.appendChild(element.firstChild);
        }

        element.appendChild(span);
    }
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
        const hash = link.getAttribute("href");

        e.preventDefault();

        // Remember that this reload was caused by a link click
        sessionStorage.setItem("anchorJump", "true");

        // Change URL
        window.location.hash = hash;

        // Refresh page
        window.location.reload();
    });
});
