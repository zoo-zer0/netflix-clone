const main = document.querySelector("main");
const contentRow = document.createElement("section");
contentRow.classList.add("content-row");
main.appendChild(contentRow);

const body = document.querySelector("body");
const header = document.createElement("header");
const nav = document.createElement("nav");
body.appendChild(header);
header.appendChild(nav);

const logo = document.createElement("img");
logo.src = "./img/logo.png";
nav.appendChild(logo);
const navigation = document.createElement("div");
navigation.className.add("navigation");
nav.appendChild(navigation);
const primaryNavigation = document.createElement("ul");
primaryNavigation.className.add("primary-navigation");
nav.appendChild(primaryNavigation);

const navTab = document.createElement("li");
navTab.className.add("navigation-tab");

