// Random retour d'un array
const getRandomItem = (items) =>
  items[Math.floor(Math.random() * items.length)];

//Random index d'un array
const getRandomIndex = (array) => {
  return Math.floor(Math.random() * array.length);
};

// Random number entre 2 valeurs
const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

// Tronquer un texte trop long
const getTruncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;

  return text.slice(0, maxLength) + "...";
};

/**
 * Helper function pour récupérer l'url d'une image en fonction de l'environnement
 * @param {String} path
 * @returns String
 */

const getImgUrl = (path) => {
  const base =
    process.env.NODE_ENV === "production"
      ? import.meta.env.VITE_APP_BASE_URL
      : "/";
  return `${base}${path}`;
};

/***
 * Helper function pour récupérer les dimensions d'un container en ref dans le DOM
 * @param {Variable} refContainer nom du container en ref
 * @returns {Object} dimensions du container (containerWidth, containerHeight)
 */

const getContainerDimensions = (refContainer) => {
  if (!refContainer || !refContainer.value) {
    // console.error("La ref est null ou undefined");
    return { containerWidth: 0, containerHeight: 0 };
  }
  const containerWidth = refContainer.value.clientWidth || 0;
  const containerHeight = refContainer.value.clientHeight || 0;
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
  getRandomIndex,
  getRandomNumber,
  getTruncateText,
  getImgUrl,
  getContainerDimensions,
  getViewportDimensions,
};
