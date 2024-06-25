import {
  navItemsEvents,
  data,
  productLinks,
  companyLinks,
  connectLinks,
} from "./utils.js";

const navItems = data
  .map((item) => {
    const { mainLinks, icons, buttons } = item;
    return `
  <div class="logo-container">
    <a href="/">
      <img src="${icons.logo}">
    </a>  
    </div>
    <div class="menu-icon-container">
      <img class="hamb-menu-icon" src="${icons.hamburgerIcon}">
      <img class="close-menu-icon"src="${icons.closeIcon}">     
    </div>
    <div class="desktop-links-container">
    ${mainLinks
      .map((item) => {
        const { link, arrowLight } = item;
        return `
        <ul>
        <li class = "desktop-nav-link">
            <a class="desktop-link" href="">${link}</a>
            <img class="desktop-nav-link-arrow" src="${arrowLight}" alt="arrow">
            <ul class="desktop-dropdown-menu">
              <li class="desktop-dropdown-link ">
              ${
                link === "product" && link !== "connect"
                  ? productLinks
                      .map((item) => {
                        const { link } = item;
                        return `
                          <a href="#">${link}</a>`;
                      })
                      .join("")
                  : link === "company"
                  ? companyLinks
                      .map((item) => {
                        const { link } = item;
                        return `<a href="#">${link}</a>`;
                      })
                      .join("")
                  : connectLinks
                      .map((item) => {
                        const { link } = item;
                        return `<a href="#">${link}</a>
                          `;
                      })
                      .join("")
              } 


              </li>
              </ul>
              </li>
              </ul>
              `;
      })
      .join("")}
            </div>
            <div class="desktop-btn-container">
            <button class="btn desktop-nav-btn nav-login-btn">${
              buttons.logIn
            }</button>
            <button class="btn desktop-nav-btn nav-signup-btn">${
              buttons.signUp
            }</button>
            </div>
            `;
  })
  .join("");

window.addEventListener("DOMContentLoaded", () => {
  navItemsEvents();
});

export default navItems;
