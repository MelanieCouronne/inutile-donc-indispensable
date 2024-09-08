<template>
  <div id="view" class="h-screen flex flex-col">
    <div id="clickZone" v-click-outside="hideNavigation">
      <button
        @click="toggleNavigation"
        class="p-2 m-4 border-2 bg-white dark:bg-slate-800 rounded-md border-gray-200 shadow-lg text-gray-500 dark:text-white focus:bg-teal-500 focus:outline-none focus:text-white absolute top-0 left-0 sm:hidden"
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
        id="sidebar"
        class="relative bg-white dark:bg-slate-800 h-screen md:block shadow-xl px-3 w-30 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300 ease-in-out"
        v-if="showNavigation"
      >
        <div class="space-y-6 md:space-y-10 mt-10">
          <h1 class="font-bold text-4xl text-center md:hidden">
            D<span class="text-teal-600">.</span>
          </h1>
          <h1
            class="hidden md:block font-bold text-sm md:text-xl text-center dark:text-white"
          >
            Couronne<span class="text-teal-600">.</span>
          </h1>

          <div id="profile" class="space-y-3">
            <img
              src="/baf30a1701736c9d20c8214fbc31cb84.png"
              alt="Avatar user"
              class="w-12 md:w-14 rounded-full mx-auto"
            />
            <div>
              <h2
                class="font-medium text-xs md:text-sm text-center text-teal-500"
              >
                Mélanie Couronne
              </h2>
              <p class="text-xs text-gray-500 dark:text-gray-400 text-center">
                Développeuse Fullstack
              </p>
            </div>
          </div>

          <div id="search">
            <div
              class="flex border-2 dark:border border-gray-200 rounded-md focus-within:ring-2 ring-teal-500 dark:ring-teal-400"
            >
              <input
                v-model="searchQuery"
                type="text"
                class="w-full rounded-tl-md rounded-bl-md px-2 py-3 text-sm text-gray-600 focus:outline-none"
                placeholder="Notification JCVD"
                @keyup.enter="emitMessageOnClick"
              />
              <button
                @click="emitMessageOnClick"
                class="rounded-tr-md rounded-br-md px-2 py-3 hidden md:block dark:bg-white"
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
          <div id="menu" class="flex flex-col items-start space-y-2 text-left">
            <ButtonSideBar
              @buttonClicked="selectComponent"
              svgPath="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              title="Composant inutile n°1"
              componentName="GitHubActivity"
            />

            <ButtonSideBar
              @buttonClicked="selectComponent"
              svgPath="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              title="Composant inutile n°2"
              componentName="ColorfulRods"
            />

            <ButtonSideBar
              @buttonClicked="selectComponent"
              svgPath="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              title="Composant inutile n°3"
              componentName="ElusiveView"
            />

            <ButtonSideBar
              @buttonClicked="selectComponent"
              svgPath="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              title="Composant inutile n°4"
              componentName="MondrianFrames"
            />

            <button
              :disabled="remainingMessages <= 0"
              @click="emitMessageOnClick()"
              class="relative w-full text-left text-sm font-medium text-gray-700 dark:text-gray-600 py-2 px-2 hover:bg-teal-500 hover:text-white rounded-md transition duration-150 ease-in-out cursor-pointer disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200"
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
  </div>
</template>

<script setup>
  import { computed, inject, onMounted, onUnmounted, ref } from "vue";
  import ButtonSideBar from "@/components/commun/buttons/ButtonSideBar.vue";
  import eventBus from "@/utils/directives/eventBus.js";
  import { getRandomItem } from "@/utils/toolsBox";

  import citations from "@/datas/sagesse_jcvd.json";

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

  const searchQuery = ref("");

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
      console.log("🚀 ~ Deja vu ~ ");

      randomItem = getRandomItem(datas);
    }

    console.log(messagesViewedId);

    const message = randomItem.citation;

    messagesViewedId.push(randomItem.id);

    remainingMessages.value -= 1;
    emit("displayNotification", { display: true, message });
    searchQuery.value = "";
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

  const hideNavigation = () => {
    if (isMobileViewport.value) {
      showNavigation.value = false;
      eventBus.sidebarToggled = !eventBus.sidebarToggled;
    }
  };

  const updateViewportDimensions = () => {
    viewportDimensions.value = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  };

  const isMobileViewport = computed(() => {
    return viewportDimensions.value.width <= 768;
  });

  onMounted(() => {
    updateViewportDimensions();
    window.addEventListener("resize", updateViewportDimensions);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", updateViewportDimensions);
  });
</script>

<script>
  import clickOutside from "@/utils/directives/clickOutside.js";

  export default {
    directives: {
      clickOutside,
    },
  };
</script>
