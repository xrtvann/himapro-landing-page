// Script to validate SEO implementation
// Run with: node validate-seo.js

const fs = require("fs");
const path = require("path");

const colors = {
  reset: "\x1b[0m",
  green: "\x1b[32m",
  red: "\x1b[31m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
};

function log(message, color = "reset") {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function checkFileExists(filePath, description) {
  const fullPath = path.join(__dirname, filePath);
  if (fs.existsSync(fullPath)) {
    log(`✓ ${description}`, "green");
    return true;
  } else {
    log(`✗ ${description} - MISSING`, "red");
    return false;
  }
}

function checkFileContent(filePath, searchString, description) {
  const fullPath = path.join(__dirname, filePath);
  if (!fs.existsSync(fullPath)) {
    log(`✗ ${description} - FILE NOT FOUND`, "red");
    return false;
  }

  const content = fs.readFileSync(fullPath, "utf8");
  if (content.includes(searchString)) {
    log(`✓ ${description}`, "green");
    return true;
  } else {
    log(`✗ ${description} - NOT FOUND`, "yellow");
    return false;
  }
}

function validateSEO() {
  log("\n🔍 SEO VALIDATION REPORT\n", "blue");

  let score = 0;
  const maxScore = 20;

  // Check essential files
  log("📁 Essential Files:", "blue");
  if (checkFileExists("public/sitemap.xml", "Sitemap.xml exists")) score++;
  if (checkFileExists("public/robots.txt", "Robots.txt exists")) score++;
  if (checkFileExists("public/site.webmanifest", "PWA Manifest exists"))
    score++;
  if (checkFileExists("public/.htaccess", ".htaccess exists")) score++;

  // Check required images
  log("\n🖼️  Required Images:", "blue");
  if (checkFileExists("public/favicon-32x32.png", "Favicon 32x32")) score++;
  if (checkFileExists("public/og-image.jpg", "Open Graph image")) score++;
  if (
    checkFileExists("public/android-chrome-512x512.png", "Android icon 512x512")
  )
    score++;

  // Check meta tags in index.html
  log("\n📝 Meta Tags in index.html:", "blue");
  if (
    checkFileContent(
      "index.html",
      'meta name="description"',
      "Meta description",
    )
  )
    score++;
  if (checkFileContent("index.html", 'meta name="keywords"', "Meta keywords"))
    score++;
  if (checkFileContent("index.html", 'property="og:title"', "Open Graph title"))
    score++;
  if (checkFileContent("index.html", "twitter:card", "Twitter Card")) score++;
  if (
    checkFileContent(
      "index.html",
      "application/ld+json",
      "Structured Data (JSON-LD)",
    )
  )
    score++;

  // Check for placeholder URLs
  log("\n🌐 URL Configuration:", "blue");
  const indexContent = fs.readFileSync(
    path.join(__dirname, "index.html"),
    "utf8",
  );
  if (indexContent.includes("https://himapro.org/")) {
    log("⚠ Placeholder URL detected - Update with real domain!", "yellow");
  } else {
    log("✓ Custom domain configured", "green");
    score++;
  }

  // Check semantic HTML and accessibility
  log("\n♿ Accessibility & Semantic HTML:", "blue");
  if (
    checkFileContent(
      "src/components/layout/Navbar.jsx",
      "aria-label",
      "ARIA labels in Navbar",
    )
  )
    score++;
  if (
    checkFileContent(
      "src/components/sections/Hero.jsx",
      "aria-labelledby",
      "Semantic sections",
    )
  )
    score++;
  if (
    checkFileContent(
      "src/components/layout/Footer.jsx",
      'role="contentinfo"',
      "Semantic footer",
    )
  )
    score++;

  // Check component structure
  log("\n🧩 Component Optimization:", "blue");
  if (checkFileExists("src/components/common/SEO.jsx", "SEO Component"))
    score++;
  if (checkFileExists("src/utils/seo.js", "SEO Utilities")) score++;

  // Additional checks
  log("\n🔧 Additional Checks:", "blue");
  const sitemapContent = fs.readFileSync(
    path.join(__dirname, "public/sitemap.xml"),
    "utf8",
  );
  if (sitemapContent.includes("2026-02-10")) {
    log("⚠ Update sitemap lastmod dates!", "yellow");
  }

  if (
    checkFileContent(
      "public/robots.txt",
      "Sitemap:",
      "Robots.txt has sitemap reference",
    )
  )
    score++;

  // Final score
  log(`\n📊 SEO Score: ${score}/${maxScore}`, "blue");
  const percentage = Math.round((score / maxScore) * 100);

  if (percentage >= 90) {
    log(`\n🎉 Excellent! (${percentage}%)`, "green");
  } else if (percentage >= 70) {
    log(`\n✅ Good! (${percentage}%) - A few items need attention`, "yellow");
  } else if (percentage >= 50) {
    log(
      `\n⚠️  Fair (${percentage}%) - Several items need completion`,
      "yellow",
    );
  } else {
    log(`\n❌ Needs Work (${percentage}%) - Many items need completion`, "red");
  }

  log("\n📚 Next Steps:", "blue");
  log("1. Review SEO_CHECKLIST.md for action items");
  log("2. Update placeholder URLs with your real domain");
  log("3. Create missing images");
  log("4. Set up Google Search Console");
  log("5. Add Google Analytics tracking\n");
}

try {
  validateSEO();
} catch (error) {
  log(`\n❌ Error running validation: ${error.message}`, "red");
  log("Make sure you run this from the project root directory.\n");
}
