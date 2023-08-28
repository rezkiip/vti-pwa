<template>
  <div id="app">
    <router-view />
    <div id="snackbar-popup" class="snackbar-popup">
      Some text some message..
    </div>
    <div id="snackbar-popup-success" class="snackbar-popup">
      Some text some message..
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  created() {
    const tablerJs = document.createElement("script");
    const demoJs = document.createElement("script");
    const jqueryJs = document.createElement("script");

    tablerJs.setAttribute("src", "/js/tabler.min.js");
    tablerJs.setAttribute("id", "tabler-js");
    demoJs.setAttribute("src", "/js/demo.min.js");
    demoJs.setAttribute("id", "demo-js");
    jqueryJs.setAttribute("src", "https://code.jquery.com/jquery-3.6.0.min.js");
    jqueryJs.setAttribute("id", "jquery-js");

    if (!document.querySelector("#tabler-ui"))
      document.body.appendChild(tablerJs);
    if (!document.querySelector("#demo-js")) document.body.appendChild(demoJs);
    if (!document.querySelector("#jquery-js"))
      document.body.appendChild(jqueryJs);
  },
};
</script>

<style lang="scss">
#loading-data {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999999;
  background-color: #f5f7fb;

  > .loading-logo {
    margin: 35vh auto 0 auto;
    display: block;
    width: 200px;
    height: 200px;
    background-size: contain;
    background-repeat: no-repeat;
  }

  > .progress {
    width: 50vw;
    margin: 0 auto;
  }
}

.snackbar-popup {
  visibility: hidden;
  min-width: 250px;
  color: #fff;
  text-align: center;
  border-radius: 2px;
  padding: 16px;
  position: fixed;
  z-index: 999999999;
  left: 50%;
  bottom: 30px;
  font-size: 17px;
  transform: translate(-50%, 0);
}

.snackbar-popup.show {
  visibility: visible;
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

#snackbar-popup {
  background-color: red;
}

#snackbar-popup-success {
  background-color: green;
}

@-webkit-keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 30px;
    opacity: 1;
  }
}

@keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 30px;
    opacity: 1;
  }
}

@-webkit-keyframes fadeout {
  from {
    bottom: 30px;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
}

@keyframes fadeout {
  from {
    bottom: 30px;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
}
</style>