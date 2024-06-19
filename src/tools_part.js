import { toolsData } from "./utils.js";

const toolsPartContent = toolsData
  .map((item) => {
    const {
      firstTitle,
      firstText,
      secondTitle,
      secondText,
      imgMobile,
      imgDesktop,
    } = item;
    return `
    <div class="tools-content">
      <div class="tools-text-content">
        <article class="tools-first-text-content">
          <div class="tools-first-title-container">
            <h3>${firstTitle}</h3>
          </div>
          <div class="tools-first-content-container">
            <p>${firstText}</p>
          </div>
        </article>
        <article class="tools-second-text-content">
          <div class="tools-second-title-container">
            <h3>${secondTitle}</h3>
          </div>
          <div class="tools-second-content-container">
            <p>${secondText}</p>
          </div>
        </article>
      </div>
      
        <img class="tools-img-mobile" src="${imgMobile}" alt="">
        <img class="tools-img-desktop" src="${imgDesktop}" alt="">

      
      </div>
      `;
  })
  .join("");
export default toolsPartContent;
