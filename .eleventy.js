module.exports = function(eleventyConfig) {
    eleventyConfig.addFilter("dateDisplay", (dateObj) => {
      return dateObj.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    });
  
    return {
      dir: {
        input: "src",
        output: "_site",
        includes: "_includes"
      }
    };
  };