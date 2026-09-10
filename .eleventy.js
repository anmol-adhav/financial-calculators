module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/CNAME": "CNAME" });
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "robots.txt" });

  // ISO date for sitemap / "last updated" labels
  eleventyConfig.addFilter("isoDate", (d) => {
    const date = d instanceof Date ? d : new Date(d);
    return date.toISOString().split("T")[0];
  });

  eleventyConfig.addFilter("readableDate", (d) => {
    const date = d instanceof Date ? d : new Date(d);
    return date.toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" });
  });

  // Look up calculator metadata by slug (for related-calculator cards)
  eleventyConfig.addFilter("calcBySlug", (calcs, slug) =>
    calcs.find((c) => c.slug === slug)
  );

  // --- Finance helpers: used to render real numbers at build time so the
  // --- long-tail goal pages ship indexable content, not just a JS widget.
  const inr = (n) => "₹" + Math.round(n).toLocaleString("en-IN");
  eleventyConfig.addFilter("inr", inr);

  eleventyConfig.addFilter("compactInr", (n) => {
    const v = Math.abs(n);
    if (v >= 1e7) return "₹" + +(v / 1e7).toFixed(2) + " Cr";
    if (v >= 1e5) return "₹" + +(v / 1e5).toFixed(2) + " L";
    if (v >= 1e3) return "₹" + +(v / 1e3).toFixed(1) + "k";
    return inr(v);
  });

  // Monthly SIP required to reach `target` in `years` at `rate`% p.a.
  const sipFor = (target, years, rate) => {
    const i = rate / 1200, n = Math.round(years * 12);
    if (i === 0) return target / n;
    return target / (((Math.pow(1 + i, n) - 1) / i) * (1 + i));
  };
  eleventyConfig.addFilter("sipFor", sipFor);
  eleventyConfig.addFilter("sipForInr", (t, y, r) => inr(sipFor(t, y, r)));

  // Total invested across the SIP tenure
  eleventyConfig.addFilter("sipInvested", (target, years, rate) =>
    sipFor(target, years, rate) * Math.round(years * 12)
  );

  // Loan EMI (reducing balance)
  const emiFor = (p, rate, years) => {
    const r = rate / 1200, n = Math.round(years * 12);
    if (r === 0) return p / n;
    return (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  };
  eleventyConfig.addFilter("emiFor", emiFor);
  eleventyConfig.addFilter("emiForInr", (p, r, y) => inr(emiFor(p, r, y)));
  eleventyConfig.addFilter("emiTotalInterest", (p, rate, years) =>
    emiFor(p, rate, years) * Math.round(years * 12) - p
  );

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
