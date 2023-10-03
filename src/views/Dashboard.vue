<template>
  <div class="dashboard">
    <splash-screen v-if="isBusyAll" />
    <div class="container">
      <div class="carousel-container row">
        <div
          class="card button-inline-block col-lg-6"
          style="margin-top: 5px"
          v-if="upcomingEvents.length > 0"
        >
          <a href="#" style="text-decoration: none; color: black">
            <div class="card-header">
              <h3 class="card-title">Akan Datang</h3>
              <div class="card-actions">
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  height="20px"
                  viewBox="0 0 512 512"
                  enable-background="new 0 0 512 512"
                  xml:space="preserve"
                >
                  <g id="_x23_000000ff">
                    <path
                      d="M166.857,138.602c1.705-11.971,10.614-22.479,22.049-26.318c8.308-2.877,17.875-2.149,25.477,2.34
                                c4.102,2.292,7.262,5.847,10.557,9.115c29.006,29.005,58.004,58.004,87.004,87.002c44.227,44.227,45.256,45.256,0,90.512
                                c-30.165,30.164-60.345,60.328-90.496,90.509c-3.705,3.832-8.272,6.887-13.413,8.363c-13.28,4.131-28.547-1.889-36.035-13.463
                                c-8.011-11.52-7.275-28.589,2.766-38.687c30.582-30.709,61.292-61.305,91.924-91.979c-30.406-30.419-60.832-60.817-91.231-91.245
                                C168.554,158.104,165.373,148.034,166.857,138.602z"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </a>

          <div class="carousel-container">
            <div
              class="card-body-content"
              v-for="(upcoming, i) in upcomingEvents"
              :key="i"
            >
              <a
                @click.prevent="getEventInsight(upcoming)"
                style="text-decoration: none; color: black"
              >
                <div class="card-body">
                  <div class="carousel-container text-center">
                    <img :src="upcoming.banners[0].banner" />
                    <!--- harusnya image-->
                  </div>

                  <div class="row" style="margin-top: 10px">
                    <div class="col-3">
                      <img
                        :src="upcoming.avatar"
                        alt=""
                        style="margin: 4px 0 0 7px; height: 3rem"
                      />
                    </div>
                    <div class="col-8 home-card-title">
                      <h3>
                        {{ upcoming.title }}
                      </h3>
                      <p
                        style="
                          line-height: 0.5;
                          font-size: 13px;
                          color: rgb(109, 109, 109);
                        "
                      >
                        status:
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          version="1.1"
                          id="Layer_1"
                          x="0px"
                          y="0px"
                          height="7px"
                          viewBox="0 0 512 512"
                          enable-background="new 0 0 512 512"
                          xml:space="preserve"
                        >
                          <circle
                            fill="rgb(255, 160, 55)"
                            cx="256"
                            cy="256"
                            r="250"
                          />
                        </svg>
                        dijadwalkan
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div
          class="card button-inline-block col-lg-6"
          style="margin-top: 5px"
          v-if="startingEvents.length > 0"
        >
          <a href="#" style="text-decoration: none; color: black">
            <div class="card-header">
              <h3 class="card-title">Daftar Sekarang</h3>
              <div class="card-actions">
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  height="20px"
                  viewBox="0 0 512 512"
                  enable-background="new 0 0 512 512"
                  xml:space="preserve"
                >
                  <g id="_x23_000000ff">
                    <path
                      d="M166.857,138.602c1.705-11.971,10.614-22.479,22.049-26.318c8.308-2.877,17.875-2.149,25.477,2.34
                                c4.102,2.292,7.262,5.847,10.557,9.115c29.006,29.005,58.004,58.004,87.004,87.002c44.227,44.227,45.256,45.256,0,90.512
                                c-30.165,30.164-60.345,60.328-90.496,90.509c-3.705,3.832-8.272,6.887-13.413,8.363c-13.28,4.131-28.547-1.889-36.035-13.463
                                c-8.011-11.52-7.275-28.589,2.766-38.687c30.582-30.709,61.292-61.305,91.924-91.979c-30.406-30.419-60.832-60.817-91.231-91.245
                                C168.554,158.104,165.373,148.034,166.857,138.602z"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </a>

          <div class="carousel-container">
            <div
              class="card-body-content"
              v-for="(starting, j) in startingEvents"
              :key="j"
            >
              <a
                @click.prevent="getEventInsight(starting)"
                style="text-decoration: none; color: black"
              >
                <div class="card-body">
                  <div class="carousel-container text-center">
                    <img :src="starting.banners[0].banner" />
                    <!--- harusnya image-->
                  </div>

                  <div class="row" style="margin-top: 10px">
                    <div class="col-3">
                      <img
                        :src="starting.avatar"
                        alt=""
                        style="margin: 4px 0 0 7px; height: 3rem"
                      />
                    </div>
                    <div class="col-8 home-card-title">
                      <h3>
                        {{ starting.title }}
                      </h3>
                      <p
                        style="
                          line-height: 0.5;
                          font-size: 13px;
                          color: rgb(109, 109, 109);
                        "
                      >
                        status:
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          version="1.1"
                          id="Layer_1"
                          x="0px"
                          y="0px"
                          height="7px"
                          viewBox="0 0 512 512"
                          enable-background="new 0 0 512 512"
                          xml:space="preserve"
                        >
                          <circle
                            fill="rgb(255, 160, 55)"
                            cx="256"
                            cy="256"
                            r="250"
                          />
                        </svg>
                        dijadwalkan
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div
          class="card button-inline-block col-lg-6"
          style="margin-top: 5px"
          v-if="ongoingEvents.length > 0"
        >
          <a href="#" style="text-decoration: none; color: black">
            <div class="card-header">
              <h3 class="card-title">Sedang Berlangsung</h3>
              <div class="card-actions">
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  height="20px"
                  viewBox="0 0 512 512"
                  enable-background="new 0 0 512 512"
                  xml:space="preserve"
                >
                  <g id="_x23_000000ff">
                    <path
                      d="M166.857,138.602c1.705-11.971,10.614-22.479,22.049-26.318c8.308-2.877,17.875-2.149,25.477,2.34
                                c4.102,2.292,7.262,5.847,10.557,9.115c29.006,29.005,58.004,58.004,87.004,87.002c44.227,44.227,45.256,45.256,0,90.512
                                c-30.165,30.164-60.345,60.328-90.496,90.509c-3.705,3.832-8.272,6.887-13.413,8.363c-13.28,4.131-28.547-1.889-36.035-13.463
                                c-8.011-11.52-7.275-28.589,2.766-38.687c30.582-30.709,61.292-61.305,91.924-91.979c-30.406-30.419-60.832-60.817-91.231-91.245
                                C168.554,158.104,165.373,148.034,166.857,138.602z"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </a>

          <div class="carousel-container">
            <div
              class="card-body-content"
              v-for="(ongoing, k) in ongoingEvents"
              :key="k"
            >
              <a
                @click.prevent="getEventInsight(ongoing)"
                style="text-decoration: none; color: black"
              >
                <div class="card-body">
                  <div class="carousel-container text-center">
                    <img :src="ongoing.banners[0].banner" />
                    <!--- harusnya image-->
                  </div>

                  <div class="row" style="margin-top: 10px">
                    <div class="col-3">
                      <img
                        :src="ongoing.avatar"
                        alt=""
                        style="margin: 4px 0 0 7px; height: 3rem"
                      />
                    </div>
                    <div class="col-8 home-card-title">
                      <h3>
                        {{ ongoing.title }}
                      </h3>
                      <p
                        style="
                          line-height: 0.5;
                          font-size: 13px;
                          color: rgb(109, 109, 109);
                        "
                      >
                        status:
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          version="1.1"
                          id="Layer_1"
                          x="0px"
                          y="0px"
                          height="7px"
                          viewBox="0 0 512 512"
                          enable-background="new 0 0 512 512"
                          xml:space="preserve"
                        >
                          <circle
                            fill="rgb(255, 160, 55)"
                            cx="256"
                            cy="256"
                            r="250"
                          />
                        </svg>
                        dijadwalkan
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div
          class="card button-inline-block col-lg-6"
          style="margin-top: 5px"
          v-if="closedEvents.length > 0"
        >
          <a href="#" style="text-decoration: none; color: black">
            <div class="card-header">
              <h3 class="card-title">Selesai</h3>
              <div class="card-actions">
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  height="20px"
                  viewBox="0 0 512 512"
                  enable-background="new 0 0 512 512"
                  xml:space="preserve"
                >
                  <g id="_x23_000000ff">
                    <path
                      d="M166.857,138.602c1.705-11.971,10.614-22.479,22.049-26.318c8.308-2.877,17.875-2.149,25.477,2.34
                                c4.102,2.292,7.262,5.847,10.557,9.115c29.006,29.005,58.004,58.004,87.004,87.002c44.227,44.227,45.256,45.256,0,90.512
                                c-30.165,30.164-60.345,60.328-90.496,90.509c-3.705,3.832-8.272,6.887-13.413,8.363c-13.28,4.131-28.547-1.889-36.035-13.463
                                c-8.011-11.52-7.275-28.589,2.766-38.687c30.582-30.709,61.292-61.305,91.924-91.979c-30.406-30.419-60.832-60.817-91.231-91.245
                                C168.554,158.104,165.373,148.034,166.857,138.602z"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </a>

          <div class="carousel-container">
            <div
              class="card-body-content"
              v-for="(closed, l) in closedEvents"
              :key="l"
            >
              <a
                @click.prevent="getEventInsight(closed)"
                style="text-decoration: none; color: black"
              >
                <div class="card-body">
                  <div class="carousel-container text-center">
                    <img :src="closed.banners[0].banner" />
                    <!--- harusnya image-->
                  </div>

                  <div class="row" style="margin-top: 10px">
                    <div class="col-3">
                      <img
                        :src="closed.avatar"
                        alt=""
                        style="margin: 4px 0 0 7px; height: 3rem"
                      />
                    </div>
                    <div class="col-8 home-card-title">
                      <h3>
                        {{ closed.title }}
                      </h3>
                      <p
                        style="
                          line-height: 0.5;
                          font-size: 13px;
                          color: rgb(109, 109, 109);
                        "
                      >
                        status:
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          version="1.1"
                          id="Layer_1"
                          x="0px"
                          y="0px"
                          height="7px"
                          viewBox="0 0 512 512"
                          enable-background="new 0 0 512 512"
                          xml:space="preserve"
                        >
                          <circle
                            fill="rgb(255, 160, 55)"
                            cx="256"
                            cy="256"
                            r="250"
                          />
                        </svg>
                        dijadwalkan
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import eventService from "@/service/event";
import SplashScreen from "../components/SplashScreen.vue";

export default {
  name: "Dashboard",
  components: { SplashScreen },
  data() {
    return {
      isBusyAll: false,
      upcomingEvents: [],
      startingEvents: [],
      ongoingEvents: [],
      closedEvents: [],
    };
  },
  methods: {
    async getEventList() {
      const eventList = (await eventService.getEventList()).data.events;

      this.upcomingEvents = eventList.filter((evt) => evt.type === "UPCOMING");
      this.startingEvents = eventList.filter(
        (evt) => evt.type === "REGISTRATION"
      );
      this.ongoingEvents = eventList.filter((evt) => evt.type === "ONGOING");
      this.closedEvents = eventList.filter((evt) => evt.type === "CLOSED");
    },
    getEventInsight(evt) {
      this.$func.saveToLocalStorage("event", JSON.stringify(evt));
      this.$func.goTo("/event-insight");
    },
  },
  async mounted() {
    localStorage.setItem("from-permanent-link", "false");
    this.isBusyAll = true;
    await this.getEventList();
    this.isBusyAll = false;
  },
};
</script>