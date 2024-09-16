import { ref } from "vue";

/**
 * Utilise un bus d'événements réactif pour gérer l'état de la sidebar et le chargement global.
 * @ref showNavigation - Un état réactif pour afficher ou masquer la sidebar.
 * @function toggleNavigation - Une fonction pour basculer l'état de la sidebar.
 * @returns {Object} - Un objet contenant les états réactifs et la fonction associée.
 */

export function useSideBarToggle() {
  const showNavigation = ref(true);

  const toggleNavigation = () => {
    // console.log("🚀 ~ showNavigation depart ~ : ", showNavigation.value);
    showNavigation.value = !showNavigation.value;
    // console.log("🚀 ~ showNavigation fin ~ : ", showNavigation.value);
  };

  return { showNavigation, toggleNavigation };
}
