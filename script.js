// CREATE NAVIGATION BARS FOR ALL OF OUR PAGES
const newNavbar = document.createElement("nav");
const githLink = document.createElement("a");
const twitLink = document.createElement("a");
const linkLink = document.createElement("a");
const homeLink = document.createElement("a");
const projectLink = document.createElement("a");
newNavbar.className = "navbar";
githLink.href = "https://github.com/obiemunoz";
githLink.innerText = "Github";
githLink.target = "_blank";
twitLink.href = "https://www.twitter.com/obiemunoz";
twitLink.innerText = "Twitter";
twitLink.target = "_blank";
linkLink.href = "https://www.linkedin.com/in/obedmunozjr";
linkLink.innerText = "LinkedIn";
linkLink.target = "_blank";
homeLink.href = "./index.html";
homeLink.innerText = "Home";
homeLink.target = "_blank";
projectLink.href = "./projects.html";
projectLink.innerText = "Projects";
projectLink.target = "_blank";

if (document.title === "Obie Munoz | Home") {
    newNavbar.append(projectLink)
} else {
    newNavbar.append(homeLink)
}

newNavbar.append(githLink)
newNavbar.append(twitLink)
newNavbar.append(linkLink)
document.body.querySelector(".container").prepend(newNavbar)

// CREATE A FOOTER FOR OUR PAGES
const thisYear = new Date().getFullYear();
const footer = document.createElement("div");
const footerLink = document.createElement("a")
footer.className = "footer"
footerLink.href = "mailto:obiemunozjr@gmail.com"
footerLink.innerText = `Copyright © ${thisYear} Obie Munoz`
footer.append(footerLink)
document.body.querySelector(".container").append(footer)
