module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule("pdf")
      .test(/\.pdf$/)
      .use("file-loader")
      .loader("file-loader")
      .end();
  },
  publicPath: process.env.NODE_ENV === "production" ? "/rhdk-linktree/" : "/",
};
