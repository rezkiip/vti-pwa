<template>
  <nav class="navbar bg-body-tertiary sticky-top bg-white">
    <div class="container">
      <span class="navbar-brand mb-0 h1" @click="back" v-if="backAvailable">
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
      <span v-if="$route.path !== '/'">
        <!-- <svg
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
        </svg> -->

        <a @click.prevent="handleOptionBtn" v-if="!participantStatus.loggedIn">
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
        <a
          data-bs-toggle="offcanvas"
          href="#offcanvasBottom11"
          role="button"
          aria-controls="offcanvasBottom"
          v-else
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

    <div
      class="offcanvas offcanvas-bottom"
      tabindex="-1"
      id="offcanvasBottom11"
      style="height: 35rem"
      aria-labelledby="offcanvasBottomLabel"
      data-bs-backdrop="static"
    >
      <div class="row justify-content-between mx-3 mt-3">
        <a
          @click.prevent="logout"
          class="btn"
          style="background-color: #e0240b; color: white; width: 30%"
          v-if="logoutAvailable"
        >
          Logout
        </a>
        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <hr style="margin: 20px 0" />
      <div class="row">
        <div class="col-3">
          <img
            src="@/assets/images/018m.jpg"
            alt=""
            style="margin-left: 1rem; height: 5rem; border-radius: 100%"
          />
        </div>
        <div class="col-8 home-card-title">
          <h3 class="overflow-text">
            {{ participantStatus.name }}
            <!-- <span>
              <img
                alt=""
                style="
                  position: relative;
                  left: 80px;
                  border-radius: 20%;
                  background-color: #1b9dfb;
                "
                src="@/assets/images/pencil.svg"
            /></span> -->
          </h3>
          <p style="color: gray; font-size: small">
            {{ participantStatus.phone }}
            <span>
              <img
                alt=""
                style="height: 10px"
                src="@/assets/images/shield-check.svg"
            /></span>
          </p>
          <p style="color: gray; font-size: small; line-height: 0">
            {{ participantStatus.email }}
            <span>
              <img
                style="height: 10px"
                src="@/assets/images/shield-check.svg"
                alt=""
            /></span>
          </p>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { Modal } from "bootstrap";

export default {
  name: "Header",
  data() {
    return {
      participantStatus: {
        loggedIn: false,
        name: "",
        email: "",
        phone: "",
      },
    };
  },
  computed: {
    logoutAvailable() {
      return (
        localStorage.getItem("event") && localStorage.getItem("login-data")
      );
    },
    backAvailable() {
      if (this.$route.path === "/") {
        return false;
      }

      if (
        this.$route.path === "/event-insight" &&
        localStorage.getItem("from-permanent-link") === "true"
      ) {
        return false;
      }

      return true;
    },
  },
  methods: {
    back() {
      if (
        this.$route.path === "/product-checkout" &&
        this.$func.getLoginData().submittedRegistrationForm
      ) {
        this.$func.goTo("/event-insight");
      } else {
        this.$func.back();
      }
    },
    handleOptionBtn() {
      // if (!this.participantStatus.loggedIn) {
      const modal = new Modal("#modal-registration");
      modal.show();
      // }
    },
    logout() {
      const currentEvent = JSON.parse(this.$func.getFromLocalStorage("event"));

      localStorage.clear();

      window.location.replace(currentEvent.permanent_link);
    },
  },
  mounted() {
    if (this.$func.getLoginData()) {
      this.participantStatus.loggedIn = true;
      this.participantStatus.name =
        this.$func.getLoginData().customer.name_customer;
      this.participantStatus.email = this.$func.getLoginData().customer.email;
      this.participantStatus.phone =
        this.$func.getLoginData().customer.phone_number;
    }
  },
};
</script>

<style>
</style>