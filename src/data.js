const data = [
  {
    mainLinks: [
      {
        link: "product",
        arrowLight: "./images/icon-arrow-light.svg",
        arrowDark: "./images/icon-arrow-dark.svg",
      },
      {
        link: "company",
        arrowLight: "./images/icon-arrow-light.svg",
        arrowDark: "./images/icon-arrow-dark.svg",
      },
      {
        link: "connect",
        arrowLight: "./images/icon-arrow-light.svg",
        arrowDark: "./images/icon-arrow-dark.svg",
      },
    ],
    dropdownLinks: [
      {
        productLinks: [
          { link: "overview" },
          { link: "pricing" },
          { link: "marketplace" },
          { link: "features" },
          { link: "integrations" },
        ],
        companyLinks: [
          { link: "about" },
          { link: "team" },
          { link: "blog" },
          { link: "careers" },
        ],
        connectLinks: [
          { link: "contact" },
          { link: "newsletter" },
          { link: "linkedin" },
        ],
      },
    ],
    icons: {
      logo: "./images/logo.svg",
      hamburgerIcon: "./images/icon-hamburger.svg",
      closeIcon: "./images/icon-close.svg",
    },
    buttons: {
      logIn: "login",
      signUp: "sign up",
    },
    content: [
      {
        header: [
          {
            title: "A modern publishing platform",
            text: "Grow your audience and build your online brand",
            startBtn: "start for free",
            moreBtn: "learn more",
          },
        ],

        firstArticle: [
          {
            title: "Designed for the future",
            firstSubTitle: "Introducing an extensible editor",
            firstText:
              "Blogr features an exceedingly intuitive interface which lets you focus on one thing:creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.",
            secondSubTitle: "Robust content management",
            secondText:
              "Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you're in full control",
            imgMobile: "./images/illustration-editor-mobile.svg",
            imgDesktop: "./images/illustration-editor-desktop.svg",
          },
        ],
        secondArticle: [
          {
            title: "state of the art infrastructure",
            text: "With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive",
            imgPhones: "./images/illustration-phones.svg",
            background: "bg-pattern-circles.svg",
          },
        ],
        thirdArticle: [
          {
            firstTitle: "free, open, simple",
            secondTitle: "powerful tooling",
            firstText:
              "Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting. RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean an is relatively easy to learn ",
            secondText:
              "Batteries included. we built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites",
            imgMobile: "./images/illustration-laptop-mobile.svg",
            imgDesktop: "images/illustration-laptop-desktop.svg",
          },
        ],
      },
    ],
  },
];

export default data;
