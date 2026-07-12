const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  // Static assets pass straight through to the output folder
  eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy({ "src/uploads": "uploads" });

  // Journal entries, newest first
  eleventyConfig.addCollection("journal", (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/posts/*.md").sort((a, b) => {
      return b.date - a.date;
    });
  });

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).setLocale("de").toFormat("d. MMMM yyyy");
  });

  eleventyConfig.addFilter("shortDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).setLocale("de").toFormat("dd.MM.yy");
  });

  eleventyConfig.addFilter("limit", (arr, n) => arr.slice(0, n));

  eleventyConfig.addFilter("excerpt", (content) => {
    const text = content.replace(/(<([^>]+)>)/gi, "");
    return text.length > 160 ? text.substring(0, 160).trim() + "…" : text;
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
