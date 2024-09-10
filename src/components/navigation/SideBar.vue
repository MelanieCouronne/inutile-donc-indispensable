<template>
  <div id="view" class="h-screen flex flex-col">
    <div id="sidebar" class="relative">
      <button
        @click="toggleNavigation"
        class="z-50 p-2 border-2 bg-white dark:bg-slate-800 rounded-md border-gray-200 shadow-lg text-gray-500 dark:text-white focus:bg-teal-500 dark:focus:bg-emerald-400 focus:outline-none focus:text-white absolute top-3 left-3 md:hidden"
      >
        <svg
          class="w-5 h-5 fill-current"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div
        v-if="showNavigation"
        class="relative bg-white dark:bg-slate-800 h-screen w-screen md:w-60 lg:w-60 md:block shadow-xl px-3 pt-20 md:pt-4 w-30 overflow-x-hidden transition-transform duration-300 ease-in-out space-y-6 md:space-y-10"
      >
        <!-- Dark / Light mode -->
        <button
          class="relative cursor-pointer p-2"
          id="light-switch"
          @click="toggleTheme"
        >
          <svg
            class="dark:hidden"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="fill-gray-300"
              d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z"
            />
            <path
              class="fill-gray-400"
              d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z"
            />
          </svg>
          <svg
            class="hidden dark:block"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="fill-slate-400"
              d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z"
            />
            <path
              class="fill-slate-500"
              d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z"
            />
          </svg>
          <span class="sr-only">Switch to light / dark version</span>
        </button>

        <!-- Profile -->
        <h1 class="font-bold text-4xl text-center md:hidden dark:text-white">
          C<span class="text-teal-600 dark:text-emerald-400">.</span>
        </h1>
        <h1
          class="hidden md:block font-bold text-sm md:text-xl text-center dark:text-white"
        >
          Couronne<span class="text-teal-600 dark:text-emerald-400">.</span>
        </h1>

        <div id="profile" class="space-y-3">
          <img
            src="/baf30a1701736c9d20c8214fbc31cb84.png"
            alt="Avatar user"
            class="w-12 md:w-14 rounded-full mx-auto"
          />
          <div>
            <h2
              class="font-medium text-xs md:text-sm text-center text-teal-500 dark:text-emerald-400"
            >
              Mélanie Couronne
            </h2>
            <p class="text-xs text-gray-500 dark:text-gray-400 text-center">
              Développeuse Fullstack
            </p>

            <div class="text-center mt-2">
              <a
                class="cursor-pointer"
                href="https://github.com/MelanieCouronne"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-6 inline-block fill-gray-400 hover:fill-gray-800 dark:fill-gray-400 dark:hover:fill-emerald-400"
                  fill="#9CA3AF"
                  viewBox="-74.4 -120.90175 644.8 725.4105"
                >
                  <path
                    d="M165.9 389.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2 .6-2-1.3-4.3-4.3-5.2-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 0C106.1 0 0 105.3 0 244c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5 21.3 0 42.8 2.9 62.8 8.5 0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 449.8 496 354.9 496 244 496 105.3 383.5 0 244.8 0zM97.2 344.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                  />
                </svg> </a
              >&nbsp;
              <a
                href="https://www.linkedin.com/in/melanie-couronne/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-6 inline-block fill-gray-400 hover:fill-gray-800 dark:fill-gray-400 dark:hover:fill-emerald-400"
                  fill="#9CA3AF"
                  viewBox="-11.493675 -16.3118 99.61185 97.8708"
                >
                  <path
                    d="M72.865 61.1094a1.2 1.2 0 001.21-1.269c0-.9-.543-1.33-1.657-1.33h-1.8v4.712h.677v-2.054h.832l.019.025 1.291 2.029h.724l-1.389-2.1zm-.783-.472h-.785v-1.593h.995c.514 0 1.1.084 1.1.757 0 .774-.593.836-1.314.836m-16.873-5.433h-9.6v-15.034c0-3.585-.064-8.2-4.993-8.2-5 0-5.765 3.906-5.765 7.939v15.294h-9.6v-30.916h9.216v4.225h.129a10.1 10.1 0 019.093-4.994c9.73 0 11.524 6.4 11.524 14.726zm-40.79-35.143a5.571 5.571 0 115.57-5.572 5.571 5.571 0 01-5.57 5.572m4.8 35.143h-9.61v-30.917h9.61zm40.776-55.2H4.781A4.728 4.728 0 000 4.6744v55.439a4.731 4.731 0 004.781 4.675h55.21a4.741 4.741 0 004.8-4.675V4.6704a4.738 4.738 0 00-4.8-4.67"
                  />
                  <path
                    d="M72.164 56.4114a4.418 4.418 0 10.085 0h-.085m0 8.33a3.874 3.874 0 113.809-3.938v.065a3.791 3.791 0 01-3.708 3.871h-.1"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Search -->
        <div id="search">
          <div
            class="flex border-2 dark:border border-gray-200 rounded-md focus-within:ring-2 ring-teal-500 dark:ring-teal-400"
          >
            <input
              v-model="searchQuery"
              id="search"
              type="text"
              class="w-full rounded-tl-md rounded-bl-md px-2 py-3 text-sm text-gray-600 focus:outline-none"
              placeholder="Recherche"
              @keyup.enter="handleSearchClick"
            />
            <button
              @click="handleSearchClick"
              class="rounded-tr-md rounded-br-md px-2 py-3 md:block dark:bg-white"
            >
              <svg
                class="w-4 h-4 fill-current"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Menu -->
        <div id="menu" class="flex flex-col items-start space-y-2 text-left">
          <ButtonSideBar
            @buttonClicked="selectComponent"
            @toggleSideBar="toggleNavigation"
            svgPath="M8.543 2.232a.75.75 0 0 0-1.085 0l-5.25 5.5A.75.75 0 0 0 2.75 9H4v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V9h1.25a.75.75 0 0 0 .543-1.268l-5.25-5.5Z"
            title="Accueil"
            componentName="PresentationView"
          />

          <ButtonSideBar
            @buttonClicked="selectComponent"
            @toggleSideBar="toggleNavigation"
            svgPath="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            title="Composant inutile n°1"
            componentName="GitHubActivity"
          />

          <ButtonSideBar
            @buttonClicked="selectComponent"
            @toggleSideBar="toggleNavigation"
            svgPath="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            title="Composant inutile n°2"
            componentName="ColorfulRods"
          />

          <ButtonSideBar
            @buttonClicked="selectComponent"
            @toggleSideBar="toggleNavigation"
            svgPath="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            title="Composant inutile n°3"
            componentName="ElusiveView"
          />

          <ButtonSideBar
            @buttonClicked="selectComponent"
            @toggleSideBar="toggleNavigation"
            svgPath="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            title="Composant inutile n°4"
            componentName="MondrianFrames"
          />

          <button
            :disabled="remainingMessages <= 0"
            @click="emitMessageOnClick()"
            class="relative w-full text-left text-sm font-medium text-gray-700 dark:text-gray-600 py-2 px-2 hover:bg-teal-500 dark:hover:bg-emerald-400 hover:text-white dark:hover:text-slate-800 rounded-md transition duration-150 ease-in-out cursor-pointer disabled:bg-slate-50 dark:disabled:bg-slate-900 disabled:text-slate-500 dark:disabled:text-slate-800 disabled:border-slate-200 dark:disabled:border-slate-800"
          >
            <svg
              class="w-6 h-6 fill-current inline-block"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"
              ></path>
              <path
                d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"
              ></path>
            </svg>
            <span
              v-if="remainingMessages > 0"
              class="absolute -top-1 left-4 rounded-full bg-red-500 dark:bg-rose-700 p-0.5 px-1.5 text-xs text-red-50 dark:text-rose-300"
              >{{ remainingMessages }}</span
            >
            <span
              >&nbsp; Message{{ remainingMessages <= 1 ? "" : "s" }} de
              JCVD</span
            >
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { computed, inject, onMounted, onUnmounted, ref } from "vue";
  import ButtonSideBar from "@/components/commun/buttons/ButtonSideBar.vue";
  import eventBus from "@/utils/directives/eventBus.js";
  import { getRandomItem, getViewportDimensions } from "@/utils/toolsBox";

  import citations from "@/datas/sagesse_jcvd.json";

  const searchQuery = ref("");
  const isDarkMode = ref(false);

  /*****************************************
   *           Dark mode toggle             *
   ******************************************/

  const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value;
    if (isDarkMode.value) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  /*****************************************
   *       Activation des composants       *
   ******************************************/
  const activeComponentKey = inject("activeComponentKey");

  const selectComponent = (componentName) => {
    activeComponentKey.value = componentName;
  };

  /*****************************************
   *              Notification              *
   ******************************************/

  const emit = defineEmits(["displayNotification"]);

  let messagesViewedId = [];

  /**
   * @param {Array} datas les données à parcourir
   */

  const datas = citations.datas; // import du fichier JSON
  const remainingMessages = ref(datas.length);

  const emitMessageOnClick = () => {
    let randomItem = getRandomItem(datas);

    while (
      messagesViewedId.includes(randomItem.id) &&
      messagesViewedId.length < datas.length
    ) {
      // console.log("🚀 ~ Deja vu ~ ");

      randomItem = getRandomItem(datas);
    }

    console.log(messagesViewedId);

    const message = randomItem.citation;

    messagesViewedId.push(randomItem.id);

    remainingMessages.value -= 1;
    emit("displayNotification", { display: true, message });
  };

  /*****************************************
   *             SideBar Mobile             *
   ******************************************/

  const showNavigation = ref(true);

  const viewportDimensions = ref({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const toggleNavigation = () => {
    showNavigation.value = !showNavigation.value;
    eventBus.sidebarToggled = !eventBus.sidebarToggled;
  };

  const updateViewportDimensions = () => {
    viewportDimensions.value = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  };

  /*****************************************
   *                Search                  *
   ******************************************/

  const handleSearchClick = () => {
    selectComponent("ConferenceGallery");
    if (isMobile.value) {
      toggleNavigation();
    }
    searchQuery.value = "";
  };

  const isMobile = computed(() => getViewportDimensions().viewportWidth < 768);

  onMounted(() => {
    if (localStorage.getItem("theme") === "dark") {
      isDarkMode.value = true;
      document.documentElement.classList.add("dark");
    }
    updateViewportDimensions();
    window.addEventListener("resize", updateViewportDimensions);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", updateViewportDimensions);
  });
</script>
