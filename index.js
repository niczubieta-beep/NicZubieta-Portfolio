
const themeToggleImg = document.getElementById("theme-toggle-img");
const themeToggle = document.querySelector(".theme-toggle");
const sectionHeaders = document.getElementsByTagName("h2");
const projectHeaders = document.getElementsByTagName("h3");
const computerLink = document.getElementsByClassName("computer-link");
const pictureOfNic = document.getElementsByClassName("picture_of_nic")[0];
const navBarCollection = Array.from(document.getElementsByTagName("nav"));
const footer = document.querySelector("footer");
const projectImages = document.getElementsByClassName("project-image");

const aboutSection = document.querySelector("#about");
const projectsSection = document.querySelector("#projects");
const hobbiesSection = document.querySelector("#hobbies");


navBarCollection.push(pictureOfNic);

const scrollReveal = ScrollReveal();

scrollReveal.reveal(navBarCollection, {
	distance: "80%",
	duration: 1000,
	origin: "top",
});

scrollReveal.reveal(footer, {
	distance: "80%",
	duration: 1000,
	origin: "bottom",
});

scrollReveal.reveal(aboutSection, {
	distance: "80%",
	duration: 1000,
	origin: "left",
});

scrollReveal.reveal(projectsSection, {
	distance: "80%",
	duration: 1000,
	origin: "bottom",
});

scrollReveal.reveal(hobbiesSection, {
	distance: "80%",
	duration: 1000,
	origin: "right",
});

themeToggle.addEventListener("click", () => {
	const isDarkMode = document.documentElement.classList.toggle("dark-mode");
	themeToggleImg.src = isDarkMode
		? "images/moon.svg"
		: "images/sun.svg";

	for (const sectionHeader of sectionHeaders) {
		sectionHeader.classList.toggle("section-dark-mode");
	}

	for (const projectHeader of projectHeaders) {
		projectHeader.classList.toggle("project-dark-mode");
	}

	for (const link of computerLink) {
		link.classList.toggle("computer-link-dark-mode");
	}

	for (const projectImage of projectImages) {
		projectImage.classList.toggle("project-image-dark-mode");
	}

	pictureOfNic.classList.toggle("picture_of_nic-dark-mode");
	themeToggle.classList.toggle("theme-toggle-dark-mode");

});