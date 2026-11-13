
const themeToggleImg = document.getElementById("theme-toggle-img");
const sectionHeaders = document.getElementsByTagName("h2");
const projectHeaders = document.getElementsByTagName("h3");
const computerLink = document.getElementById("computer-link");

document.querySelector("#theme-toggle").addEventListener("click", () => {
	document.documentElement.classList.toggle("dark-mode");
	themeToggleImg.src = document.documentElement.classList.contains("dark-mode")
		? "images/moon.svg"
		: "images/sun.svg";

	for (const sectionHeader of sectionHeaders) {
		sectionHeader.style.backgroundColor = document.documentElement.classList.contains("dark-mode")
			? "var(--amethyst)"
			: "var(--baby-blue-ice)";
        sectionHeader.style.color = document.documentElement.classList.contains("dark-mode")
            ? "black"
            : "var(--gunmetal)";
	}

	for (const projectHeader of projectHeaders) {
		projectHeader.style.backgroundColor = document.documentElement.classList.contains("dark-mode")
			? "var(--lavender)"
			: "var(--dusty-mauve)";
        projectHeader.style.color = document.documentElement.classList.contains("dark-mode")
            ? "black"
            : "var(--gunmetal)";
	}

	computerLink.style.color = document.documentElement.classList.contains("dark-mode")
		? "white"
		: "black";
});