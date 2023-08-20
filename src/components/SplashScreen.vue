<template>
  <div class="splash-screen">
    <img
      src="@/assets/images/logo.svg"
      alt="VTI"
      class="navbar-splash-screen"
    />
  </div>
</template>

<script>
export default {
  name: "SplashScreen",
};
</script>

<style lang="scss" scoped>
.splash-screen {
  z-index: 99999999;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: calc(100vh - 56px);
  background-color: #f5f7fb;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .navbar-splash-screen {
    margin: 10px auto;
    width: 100px;
  }
}
</style>