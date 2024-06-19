import {
  logo,
  mainLinks,
  productLinks,
  companyLinks,
  connectLinks,
} from "./utils.js";

const footerContent = `
<div class="footer-logo-container">
  <img src="${logo}"> 
</div>
${mainLinks
  .map((item) => {
    const { link } = item;
    return `
     <ul class="footer-main-list">
        <li class="footer-main-links">${link}
          <ul>
            <li class="footer-sub-links">
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
  `;

export default footerContent;
