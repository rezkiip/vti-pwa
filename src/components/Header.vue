<template>
  <nav class="navbar bg-body-tertiary sticky-top bg-white">
    <div class="container">
      <span
        class="navbar-brand mb-0 h1"
        @click="$func.back()"
        v-if="$route.path !== '/'"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-chevron-left"
          width="24"
          height="24"
          viewBox="0 0 20 20"
          stroke-width="2"
          stroke="#1B9DFB"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M15 6l-6 6l6 6"></path>
        </svg>
        <img src="@/assets/images/logo.svg" alt="" height="30px" />
      </span>
      <span class="navbar-brand mb-0 h1" v-else>
        <img src="@/assets/images/logo.svg" alt="" height="30px" />
      </span>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-search"
          width="24"
          height="24"
          viewBox="1 1 19 19"
          stroke-width="20"
          stroke="#1B9DFB"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
          <path d="M21 21l-6 -6"></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-scan"
          width="24"
          height="24"
          viewBox="1 1 19 19"
          stroke-width="50"
          stroke="#1B9DFB"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M4 7v-1a2 2 0 0 1 2 -2h2"></path>
          <path d="M4 17v1a2 2 0 0 0 2 2h2"></path>
          <path d="M16 4h2a2 2 0 0 1 2 2v1"></path>
          <path d="M16 20h2a2 2 0 0 0 2 -2v-1"></path>
          <path d="M5 12l14 0"></path>
        </svg>

        <a
          data-bs-toggle="offcanvas"
          href="#offcanvasBottom11"
          role="button"
          aria-controls="offcanvasBottom"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-list"
            width="24"
            height="24"
            viewBox="1 1 19 19"
            stroke-width="50"
            stroke="#1B9DFB"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M9 6l11 0"></path>
            <path d="M9 12l11 0"></path>
            <path d="M9 18l11 0"></path>
            <path d="M5 6l0 .01"></path>
            <path d="M5 12l0 .01"></path>
            <path d="M5 18l0 .01"></path>
          </svg>
        </a>
      </span>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
</style>