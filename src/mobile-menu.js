import {
  mobileDropdownEvent,
  data,
  productLinks,
  companyLinks,
  connectLinks,
} from "./utils.js";

const mobileMenuItems = data
  .map((item) => {
    const { mainLinks, buttons } = item;
    return `
    <div class="mobile-links-container">
    ${mainLinks
      .map((item) => {
        const { link, arrowDark } = item;
        return `
      <ul>
        <li class="mobile-nav-link">
          <a class="link-btn" href="#">${link}</a>
          <img class="mobile-nav-link-arrow" src="${arrowDark}" alt="arrow">
          <ul class="mobile-dropdown-menu">
            <li class="mobile-dropdown-link">
              ${
                link === "product" && link !== "connect"
                  ? productLinks
                      .map((item) => {
                        const { link } = item;
                        return `<a href="#">${link}</a>`;
                      })
                      .join("")
                  : link === "company"
                  ? companyLinks
                      .map((item) => {
                        const { link } = item;
                        return `<a href="">${link}</a>`;
                      })
                      .join("")
                  : connectLinks
                      .map((item) => {
                        const { link } = item;
                        return `<a href="#">${link}</a>`;
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
    <div class="menu-line"></div>
    <div class="mobile-btn-container">
      <button class="btn mobile-btn mobile-btn-log-in">
        ${buttons.logIn}
      </button>
      <button class="btn mobile-btn mobile-btn-sign-in">
        ${buttons.signUp}
      </button>
      </div>
    `;
  })
  .join("");

window.addEventListener("DOMContentLoaded", () => {
  mobileDropdownEvent();
});

export default mobileMenuItems;
