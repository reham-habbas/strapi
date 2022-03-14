module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd3d9e842aae1d044a593cace99a4a3a8'),
  },
});
