export default {
  beforeMount(el, binding) {
    el.clickOutside = function (event) {
      // Vérifiez si le clic est en dehors de l'élément
      if (!(el === event.target || el.contains(event.target))) {
        // Appelez la méthode fournie dans l'argument de la directive
        binding.value(event);
      }
    };
    document.body.addEventListener("click", el.clickOutside);
  },
  unmounted(el) {
    document.body.removeEventListener("click", el.clickOutside);
  },
};
