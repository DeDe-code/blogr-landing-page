import data from "./data.js";

function navItemsEvents() {
  const hambMenuIcon = document.querySelector(".hamb-menu-icon");
  const closeMenuIcon = document.querySelector(".close-menu-icon");
  const mobileMenu = document.querySelector(".mobile-menu-container");

  hambMenuIcon.addEventListener("click", () => {
    hambMenuIcon.classList.add("remove-menu-icon");
    closeMenuIcon.classList.add("show-menu-icon");
    hambMenuIcon.classList.remove("show-menu-icon");
    mobileMenu.classList.add("show-mobile-menu-container");
  });
  closeMenuIcon.addEventListener("click", () => {
    hambMenuIcon.classList.add("show-menu-icon");
    closeMenuIcon.classList.add("remove-menu-icon");
    closeMenuIcon.classList.remove("show-menu-icon");
    mobileMenu.classList.remove("show-mobile-menu-container");
  });
}

const mobileDropdownEvent = () => {
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
  mobileNavLinks.forEach(function (link) {
    const linkBtn = link.querySelector(".link-btn");
    const linkArrow = link.querySelector(".mobile-nav-link-arrow");
    linkBtn.addEventListener("click", function (e) {
      mobileNavLinks.forEach(function (item) {
        if (item !== link) {
          item.classList.remove("show-dropdown");
        }
      });
      link.classList.toggle("show-dropdown");
    });
  });
};

const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error(
    `Please check "${selection}" selector, no such element exist`
  );
};

const logo = data[0].icons.logo;
const mainLinks = data[0].mainLinks;
const productLinks = data[0].dropdownLinks[0].productLinks;
const companyLinks = data[0].dropdownLinks[0].companyLinks;
const connectLinks = data[0].dropdownLinks[0].connectLinks;
const headerData = data[0].content[0].header;
const designData = data[0].content[0].firstArticle;
const infrastructureData = data[0].content[0].secondArticle;
const toolsData = data[0].content[0].thirdArticle;

export {
  navItemsEvents,
  getElement,
  mobileDropdownEvent,
  data,
  logo,
  mainLinks,
  productLinks,
  companyLinks,
  connectLinks,
  headerData,
  designData,
  infrastructureData,
  toolsData,
};
