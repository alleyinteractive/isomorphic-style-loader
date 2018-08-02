// Manifest of rendered module ids
const renderedModules = {};

/**
 * Get CSS content from a module as a string
 */
function getCss(styles) {
  const stylesToRender = styles.filter((module) => {
    const [moduleId, css] = module;

    // Check if we've already rendered a module with this ID
    if (!renderedModules[moduleId]) {
      renderedModules[moduleId] = css;
      return module;
    }

    return false;
  });
  stylesToRender.toString = styles.toString;

  return stylesToRender.toString();
}

module.exports = getCss;
