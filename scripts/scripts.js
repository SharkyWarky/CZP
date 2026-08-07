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
document.addEventListener("click", (event) => {
    const link = event.target.closest("a");

    if (!link) return;

    const href = link.getAttribute("href");

    if (href && href.startsWith("#")) {
        event.preventDefault();
        window.location.hash = href;
    }
});

// Run when URL changes
window.addEventListener("hashchange", updatePage);

// Run on initial load
window.addEventListener("DOMContentLoaded", updatePage);

const mapVersions = {
    nacht: ["waw", "bo1", "bo3"],
    verruckt: ["waw", "bo1", "bo3"],
    "shi-no-numa": ["waw", "bo1", "bo3", "vanguard"],
    "der-riese": ["waw", "bo1"],
    kino: ["bo1", "bo3"],
    ascension: ["bo1", "bo3"],
    "shangri-la": ["bo1", "bo3"],
    moon: ["bo1", "bo3"],
    origins: ["bo2", "bo3"],
    "the-giant": ["bo3"],
};

const versionNames = {
    waw: "WaW",
    bo1: "BO1",
    bo2: "BO2",
    bo3: "BO3",
    bo4: "BO4",
    bocw: "Cold War",
    bo6: "BO6",
    bo7: "BO7",
    adancedwarfare: "AW",
    infinitewarfare: "IW",
    ww2: "WWII",
    vanguard: "Vanguard",
    mw3: "MW3",
};

function updateVersions() {
    const container = document.querySelector(".map-versions");

    container.innerHTML = "";

    const currentID = window.location.hash.substring(1);

    // Split shangri-la-bo3 into:
    // shangri-la
    // bo3
    const parts = currentID.split("-");

    const version = parts.pop();
    const map = parts.join("-");

    if (!mapVersions[map]) {
        return;
    }

    mapVersions[map].forEach((mapVersion) => {
        const button = document.createElement("button");

        button.textContent = versionNames[mapVersion];

        if (mapVersion === version) {
            button.classList.add("active");
        }

        button.onclick = () => {
            window.location.hash = `${map}-${mapVersion}`;
        };

        container.appendChild(button);
    });
}
