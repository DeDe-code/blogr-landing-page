import navItems from "./desktop-menu.js";
import mobileMenuItems from "./mobile-menu.js";
import designPartContent from "./design-part.js";
import headerContent from "./header_content.js";
import infrastructureContent from "./infrastructure_part.js";
import toolsPartContent from "./tools_part.js";
import footerContent from "./footer.js";
import { getElement } from "./utils.js";

const nav = getElement("nav");
const headerContentContainer = getElement(".header-content");
const mobileMenu = getElement(".mobile-menu-container");
const designPart = getElement(".design-part");
const infrastructurePart = getElement(".infrastructure-part");
const toolsPart = getElement(".tools-part");
const footer = getElement("footer");

nav.innerHTML = navItems;
headerContentContainer.innerHTML = headerContent;
mobileMenu.innerHTML = mobileMenuItems;
designPart.innerHTML = designPartContent;
infrastructurePart.innerHTML = infrastructureContent;
toolsPart.innerHTML = toolsPartContent;
footer.innerHTML = footerContent;
