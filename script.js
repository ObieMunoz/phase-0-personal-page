const thisYear = new Date().getFullYear();
const footer = document.createElement("div");
const footerLink = document.createElement("a")

footer.className = "footer"

footerLink.href = "mailto:obiemunozjr@gmail.com"
footerLink.innerText = `Copyright © ${thisYear} Obie Munoz`

footer.append(footerLink)

document.body.append(footer)