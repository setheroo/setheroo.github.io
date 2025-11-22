module.exports = function(eleventyConfig) {
    eleventyConfig.addFilter("dateDisplay", (dateObj) => {
      if (!dateObj) return "no date";
      const date = new Date(dateObj);
      if (isNaN(date)) return "no date";
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    });

    eleventyConfig.addPassthroughCopy("src/assets");
    
    eleventyConfig.addCollection("blog", function(collectionApi) {
      return collectionApi.getFilteredByGlob("src/blog/*.njk")
        .filter(p => p.data.permalink !== "/blog/")
        .filter(p => p.data.date)
        .sort((a, b) => new Date(b.date) - new Date(a.date));
    });
  
    return {
      dir: {
        input: "src",
        output: "_site",
        includes: "_includes"
      }
    };
  };