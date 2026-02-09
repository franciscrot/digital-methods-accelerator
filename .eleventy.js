const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItAttrs = require("markdown-it-attrs");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "content/assets": "assets" });

  const markdownLibrary = markdownIt({
    html: true,
    linkify: true,
  })
    .use(markdownItAnchor, {
      permalink: markdownItAnchor.permalink.headerLink(),
    })
    .use(markdownItAttrs);

  eleventyConfig.setLibrary("md", markdownLibrary);

  eleventyConfig.addFilter("startsWith", (value, prefix) => {
    if (typeof value !== "string") {
      return false;
    }
    return value.startsWith(prefix);
  });

  eleventyConfig.addCollection("toolkit", (collectionApi) => {
    return collectionApi
      .getFilteredByGlob("./content/toolkit/*.md")
      .sort((a, b) => (a.data.weight || 0) - (b.data.weight || 0));
  });

  return {
    dir: {
      input: "content",
      includes: "_includes",
      layouts: "_includes/layouts",
      output: "dist",
    },
  };
};
