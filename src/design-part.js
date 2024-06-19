import { designData } from "./utils.js";

const designPartContent = designData
  .map((item) => {
    const {
      title,
      firstSubTitle,
      firstText,
      secondSubTitle,
      secondText,
      imgMobile,
      imgDesktop,
    } = item;
    return `
  <div class="design-title-container">
      <h2>${title}</h2>
    </div>
    <div class="design-content">
      <div class="text-content">
        <article class="design-first-text-content">
          <div class="design-content-first-title-container">
            <h3>${firstSubTitle}</h3>
          </div>
          <div class="design-first-content-container">
            <p>${firstText}</p>
          </div>
        </article>
        <article class="design-second-text-content">
          <div class="design-content-second-title-container">
            <h3>${secondSubTitle}</h3>
          </div>
          <div class="design-second-content-container">
            <p>${secondText}</p>
          </div>
        </article>
      </div>
      
        <img class="design-img-mobile" src="${imgMobile}" alt="">
        <img class="design-img-desktop" src="${imgDesktop}" alt="">

      
      </div>
      `;
  })
  .join("");

export default designPartContent;
