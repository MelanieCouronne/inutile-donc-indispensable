// Random retour d'un array
const getRandomItem = (items) =>
  items[Math.floor(Math.random() * items.length)];

// Random number entre 2 valeurs
const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

/**
 * Helper function pour remplacer les caractères spéciaux
 * @param {String} string à modifier
 * @returns
 */
const htmlEntities = function (string) {
  if (!string) return;
  return (
    string
      .replaceAll("à", "&agrave;")
      .replaceAll("À", "&Agrave;")
      .replaceAll("â", "&acirc;")
      .replaceAll("Â", "&Acirc;")
      .replaceAll("ä", "&auml;")
      .replaceAll("Ä", "&Auml;")
      .replaceAll("è", "&egrave;")
      .replaceAll("È", "&Egrave;")
      .replaceAll("é", "&eacute;")
      .replaceAll("É", "&Eacute;")
      .replaceAll("ê", "&ecirc;")
      .replaceAll("Ê", "&Ecirc;")
      .replaceAll("ë", "&euml;")
      .replaceAll("Ë", "&Euml;")
      .replaceAll("î", "&icirc;")
      .replaceAll("Î", "&Icirc;")
      .replaceAll("ï", "&iuml;")
      .replaceAll("Ï", "&Iuml;")
      .replaceAll("ô", "&ocirc;")
      .replaceAll("Ô", "&Ocirc;")
      .replaceAll("ö", "&ouml;")
      .replaceAll("Ö", "&Ouml;")
      .replaceAll("ù", "&ugrave;")
      .replaceAll("Ù", "&Ugrave;")
      .replaceAll("û", "&ucirc;")
      .replaceAll("Û", "&Ucirc;")
      .replaceAll("ü", "&uuml;")
      .replaceAll("Ü", "&Uuml;")
      // Caractères spéciaux, quotes et apostrophes
      .replaceAll("&amp;nbsp;", "&nbsp;")
      .replaceAll("“", "&ldquo;")
      .replaceAll("”", "&rdquo;")
      .replaceAll("„", "&bdquo;")
      .replaceAll("‘", "'")
      .replaceAll("‘", "'")
      .replaceAll("’", "'")
      .replaceAll("‚", ",")
      .replaceAll("&rsquo;", "'")
      .replaceAll("&lsquo;", "'")
      .replaceAll("« ", "&laquo;&nbsp;")
      .replaceAll("« ", "&laquo;&nbsp;")
      .replaceAll(" »", "&nbsp;&raquo;")
      // Espacements insécables
      .replaceAll(" ?", "&nbsp;?")
      .replaceAll(" :", "&nbsp;:")
      .replaceAll(" !", "&nbsp;!")
      .replaceAll(" ;", "&nbsp;;")
      // Variations de tirets
      .replaceAll("-", "-")
      .replaceAll("-", "-")
      .replaceAll("–", "-")
      .replaceAll("—", "-")
      .replaceAll("²", "<sup>2</sup>")
      .replaceAll("</p>", "</p>\n")
      .replaceAll("</ul>", "</ul>\n")
      .replaceAll("<li>", "<li>\n")
      .replaceAll("</li>", "</li>\n")
  );
};

/***
 * Helper function pour récupérer les dimensions d'un container en ref dans le DOM
 * @param {Variable} refContainer nom du container en ref
 * @returns {Object} dimensions du container (width, height)
 */

const getContainerDimensions = (refContainer) => {
  const containerWidth = refContainer?.value.clientWidth || 0;
  const containerHeight = refContainer?.value.clientHeight || 0;
  // console.log(
  //   "🚀 ~ Container ~ w: " + containerWidth + " - h: " + containerHeight
  // );

  return { containerWidth, containerHeight };
};

// Viewport dimensions
const getViewportDimensions = () => {
  const viewportWidth = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  const viewportHeight = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );
  // console.log(
  //   "🚀 ~ Viewport ~ w: " + viewportWidth + " - h: " + viewportHeight
  // );

  return { viewportWidth, viewportHeight };
};

export {
  getRandomItem,
  getRandomNumber,
  htmlEntities,
  getContainerDimensions,
  getViewportDimensions,
};
