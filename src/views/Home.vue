<template>
  <div class="home">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "Home",
  components: {
    Header,
  },
};
</script>

<style lang="scss">
// @import "../assets/css/tabler-icons.css";
// @import "../assets/css/tabler.min.css";
// @import "../assets/css/demo.css";
// @import "../assets/css/tabler-vendors.min.css";
@import "../assets/Styles/styles.css";

.sortable > .row > div:first-child,
.sortable > .row > div:last-child {
  visibility: hidden;
}

.sortable > .row:hover div:first-child,
.sortable > .row:hover div:last-child {
  visibility: visible;
}

.sortable-placeholder {
  height: 44px !important;
}

.fade-enter {
  opacity: 0;
  transform: translateX(10vw);
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(-10vw);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.1s ease-out;
}
</style>
