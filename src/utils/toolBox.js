// Met la première lettre en maj
const capitalise = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

// Retourne le %
const calcPourcentage = (value, total) => Math.round((value / total) * 100);

// Retourne le nb d'occurences d'une valeur dans un array
const countOccurrences = (arr, value) =>
  arr.reduce((a, v) => (v === value ? a + 1 : a), 0);

// Wait (à utiliser wait(2000).then(() => faireUnAutreTruc());)
const wait = async (milliseconds) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

/*  Filtre un obj et ne retourne que la clé indiquée
*   Ex : const invites = [{ nom: "Gino", age: 45 }, { nom: "Gina", age: 27 }];
    returnKey(invites, 'nom'); // ['Gino', 'Gina']
*/
const returnKey = (objs, key) => objs.map((obj) => obj[key]);

// Dédoublonner un array
const removeDoublons = (arr) => [...new Set(arr)];

// Insère un élément à une position donnée d'un array
const insertAtPos = (arr, index, newItem) => [
  ...arr.slice(0, index),
  newItem,
  ...arr.slice(index),
];

// Regroupe les éléments d'une liste par référence
const groupByKey = (list, key) =>
  list.reduce(
    (hash, obj) => ({
      ...hash,
      [obj[key]]: (hash[obj[key]] || []).concat(obj),
    }),
    {}
  );

// Random retour d'un array
const getRandomItem = (items) =>
  items[Math.floor(Math.random() * items.length)];

// Random number entre 2 valeurs
const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

/**
 * Helper function pour remplacer les caractères spéciaux
 * Pensé surtout pour gen des emails plus facilement
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
  return { viewportWidth, viewportHeight };
};

// Copie le texte dans le clipboard
const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text);
};

export {
  capitalise,
  calcPourcentage,
  countOccurrences,
  wait,
  returnKey,
  removeDoublons,
  insertAtPos,
  groupByKey,
  getRandomItem,
  getRandomNumber,
  htmlEntities,
  getViewportDimensions,
  copyToClipboard,
};
