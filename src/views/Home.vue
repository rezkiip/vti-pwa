<template>
  <div class="home">
    <Header />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <VueLoading
      color="#48B0FC"
      lock-scroll
      :active="true"
      :can-cancel="false"
      :is-full-page="true"
      :width="60"
      loader="spinner"
      transition="none"
      id="application-loader"
      style="display: none"
    />
  </div>
</template>

<script>
import Header from "@/components/Header";
import VueLoading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  name: "Home",
  components: {
    Header,
    VueLoading,
  },
};
</script>

<style lang="scss">
@import "../assets/css/tabler-icons.css";
@import "../assets/css/tabler.min.css";
@import "../assets/css/demo.css";
@import "../assets/css/tabler-vendors.min.css";
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
