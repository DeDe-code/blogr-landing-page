import { infrastructureData } from "./utils.js";

const infrastructureContent = infrastructureData.map((item) => {
  const { title, text, imgPhones } = item;
  return `
    <article class="infrastructure-content">
        <img src="${imgPhones}" alt="title">
        <div class="infrastructure-text-content">
          <h3 class="infrastructure-title">${title}</h3>
          <p class="infrastructure-text">${text}</p>
        </div>
      </article>

  `;
});
export default infrastructureContent;
