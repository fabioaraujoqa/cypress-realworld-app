const createProxyMiddleware = require("http-proxy-middleware");
require("dotenv").config();

module.exports = function (app) {
  app.use(
    createProxyMiddleware(["/login", "/callback", "/logout", "/checkAuth", "graphql"], {
      target: `https://cypress-realworld-app-puce.vercel.app`,
      changeOrigin: true,
      logLevel: "debug",
    })
  );
};
