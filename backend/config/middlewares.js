module.exports = [
  "strapi::logger",
  "strapi::errors",
  {
    name: "strapi::cors",
    config: {
      origin: [
        "https://mady.techsavvyfit.com",
        "https://portfolio-git-feature-strapi-madys-projects-35fcb676.vercel.app",
        "http://localhost:3000",
        "http://localhost:3001",
      ],
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    },
  },
  "strapi::security",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
