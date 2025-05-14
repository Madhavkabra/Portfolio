module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::cors',
    config: {
    origin: ['https://your-frontend.vercel.app', 'https://portfolio-a65yqzkxq-madys-projects-35fcb676.vercel.app'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
      credentials: true,
    },
  },
  'strapi::security',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
