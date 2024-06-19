import { headerData } from "./utils.js";

const headerContent = headerData
  .map((item) => {
    const { title, text, startBtn, moreBtn } = item;
    return `
    <div class="header-title-container">
      <h2>${title}</h2>
    </div>
    <div class="header-text-container">
      <h4>${text}</h4>
    </div>
    <div class="header-btn-container">
      <button class="btn header-btn">${startBtn}</button>
      <button class="btn header-btn">${moreBtn}</button>
    </div>
  `;
  })
  .join("");

export default headerContent;
