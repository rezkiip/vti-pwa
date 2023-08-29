<template>
  <div class="event-insight">
    <splash-screen v-if="isBusyAll" />
    <div class="card" style="margin-top: 5px">
      <div class="">
        <div class="card-body-content">
          <div class="card-body">
            <div class="carousel-container">
              <a
                data-fslightbox="gallery"
                v-for="(banner, i) in currentEvent.banners"
                :key="i"
                :href="banner.banner"
              >
                <img :src="banner.banner" alt="" />
              </a>
            </div>

            <div class="row" style="margin-top: 10px; margin-bottom: 20px">
              <a href="profilebrand.html" class="col-3">
                <img
                  :src="currentEvent.avatar"
                  alt=""
                  style="margin: 4px 0 0 7px; height: 4rem"
                />
              </a>
              <div class="col-8 home-card-title">
                <h3 class="overflow-text">
                  {{ currentEvent.title }}
                </h3>
                <p
                  style="
                    line-height: 0.5;
                    font-size: 13px;
                    color: rgb(109, 109, 109);
                  "
                >
                  {{ currentEvent.company_name }}
                </p>
              </div>
              <div
                class="col-1"
                style="position: relative; right: 1.3rem; top: 1.3rem"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-share"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="#1B9DFB"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                  <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                  <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                  <path d="M8.7 10.7l6.6 -3.4"></path>
                  <path d="M8.7 13.3l6.6 3.4"></path>
                </svg>
              </div>
            </div>

            <div class="carousel-container">
              <a
                data-bs-toggle="offcanvas"
                href="#offcanvasBottom"
                role="button"
                aria-controls="offcanvasBottom"
              >
                <div
                  class="button-inline-block text-center"
                  style="margin-right: 15px"
                >
                  <img
                    src="@/assets/images/calendar-event.svg"
                    alt=""
                    style="height: 1.5rem"
                  />
                  <p class="text-muted" style="font-size: 12px; color: black">
                    {{ getEventPeriod }}
                  </p>
                </div>
              </a>
              <a
                data-bs-toggle="offcanvas"
                href="#offcanvasBottom2"
                role="button"
                aria-controls="offcanvasBottom"
              >
                <div
                  class="button-inline-block text-center"
                  style="margin-right: 15px"
                >
                  <img
                    src="@/assets/images/users.svg"
                    alt=""
                    style="height: 1.5rem"
                  />
                  <p class="text-muted" style="font-size: 12px; color: black">
                    12/100
                  </p>
                </div>
              </a>
              <a
                data-bs-toggle="offcanvas"
                href="#offcanvasBottom3"
                role="button"
                aria-controls="offcanvasBottom"
              >
                <div
                  class="button-inline-block text-center"
                  style="margin-right: 15px"
                >
                  <img
                    src="@/assets/images/access-point.svg"
                    alt=""
                    style="height: 1.5rem"
                  />
                  <p class="text-muted" style="font-size: 12px; color: black">
                    Online
                  </p>
                </div>
              </a>
              <a
                data-bs-toggle="offcanvas"
                href="#offcanvasBottom4"
                role="button"
                aria-controls="offcanvasBottom"
              >
                <div
                  class="button-inline-block text-center"
                  style="margin-right: 15px"
                >
                  <img
                    src="@/assets/images/map-pin-svgrepo-com.svg"
                    alt=""
                    style="height: 1.5rem"
                  />
                  <p class="text-muted" style="font-size: 12px; color: black">
                    Lokasi
                  </p>
                </div>
              </a>

              <a
                data-bs-toggle="offcanvas"
                href="#offcanvasBottom5"
                role="button"
                aria-controls="offcanvasBottom"
              >
                <div
                  class="button-inline-block text-center"
                  style="margin-right: 15px"
                >
                  <img
                    src="@/assets/images/scan.svg"
                    alt=""
                    style="height: 1.5rem"
                  />
                  <p class="text-muted" style="font-size: 12px; color: black">
                    Check-In
                  </p>
                </div>
              </a>

              <a
                data-bs-toggle="offcanvas"
                href="#offcanvasBottom6"
                role="button"
                aria-controls="offcanvasBottom"
              >
                <div
                  class="button-inline-block text-center"
                  style="margin-right: 15px"
                >
                  <img
                    src="@/assets/images/tag.svg"
                    alt=""
                    style="height: 1.5rem"
                  />
                  <p class="text-muted" style="font-size: 12px; color: black">
                    {{
                      currentEvent.event_type === "paid" ? "Berbayar" : "Gratis"
                    }}
                  </p>
                </div>
              </a>

              <a
                data-bs-toggle="offcanvas"
                href="#offcanvasBottom7"
                role="button"
                aria-controls="offcanvasBottom"
              >
                <div
                  class="button-inline-block text-center"
                  style="margin-right: 15px"
                >
                  <img
                    src="@/assets/images/award.svg"
                    alt=""
                    style="height: 1.5rem"
                  />
                  <p class="text-muted" style="font-size: 12px; color: black">
                    Hadiah
                  </p>
                </div>
              </a>

              <a
                data-bs-toggle="offcanvas"
                href="#offcanvasBottom8"
                role="button"
                aria-controls="offcanvasBottom"
              >
                <div
                  class="button-inline-block text-center"
                  style="margin-right: 15px"
                >
                  <img
                    src="@/assets/images/list-check copy.svg"
                    alt=""
                    style="height: 1.5rem"
                  />
                  <p class="text-muted" style="font-size: 12px; color: black">
                    Pendaftaran
                  </p>
                </div>
              </a>

              <a
                data-bs-toggle="offcanvas"
                href="#offcanvasBottom9"
                role="button"
                aria-controls="offcanvasBottom"
              >
                <div
                  class="button-inline-block text-center"
                  style="margin-right: 15px"
                >
                  <img
                    src="@/assets/images/lock-open.svg"
                    alt=""
                    style="height: 1.5rem"
                  />
                  <p class="text-muted" style="font-size: 12px; color: black">
                    Verifikasi
                  </p>
                </div>
              </a>

              <a
                data-bs-toggle="offcanvas"
                href="#offcanvasBottom10"
                role="button"
                aria-controls="offcanvasBottom"
              >
                <div
                  class="button-inline-block text-center"
                  style="margin-right: 15px"
                >
                  <img
                    src="@/assets/images/upload copy.svg"
                    alt=""
                    style="height: 1.5rem"
                  />
                  <p class="text-muted" style="font-size: 12px; color: black">
                    Upload
                  </p>
                </div>
              </a>
            </div>

            <div
              class="offcanvas offcanvas-bottom"
              tabindex="-1"
              id="offcanvasBottom"
              style="height: 39rem"
              aria-labelledby="offcanvasBottomLabel"
            >
              <div class="offcanvas-header">
                <h2 class="offcanvas-title" id="offcanvasBottomLabel">
                  Jadwal
                </h2>
                <p
                  style="
                    padding: 0 1rem;
                    background-color: #1b9dfb;
                    border-radius: 10%;
                    font-weight: 700;
                    color: white;
                    margin-top: 15px;
                  "
                >
                  {{ freeData1.totD }} Hari
                </p>
              </div>
              <div class="offcanvas-body">
                <div class="list-group list-group-flush list-group-hoverable">
                  <div class="list-group-item">
                    <div class="row align-items-center">
                      <div
                        class="col-auto"
                        style="
                          background-color: #77d353;
                          padding: 1rem;
                          border-radius: 100%;
                        "
                      >
                        <img src="@/assets/images/list-check.svg" />
                      </div>
                      <div class="col text-truncate">
                        <p
                          style="
                            font-size: 18px;
                            font-weight: 700;
                            line-break: strict;
                          "
                        >
                          Pendaftaran
                        </p>
                        <p style="margin-left: 15px; line-height: 0.5">
                          {{ freeData2.regP }}
                        </p>
                      </div>
                      <div class="col text-truncate text-end">
                        <p>
                          <svg
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            height="5px"
                            viewBox="0 0 512 512"
                            enable-background="new 0 0 512 512"
                            xml:space="preserve"
                          >
                            <circle fill="#969FAA" cx="256" cy="256" r="250" />
                          </svg>
                          {{ freeData1.regD }} Hari
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="list-group list-group-flush list-group-hoverable">
                  <div class="list-group-item">
                    <div class="row align-items-center">
                      <div
                        class="col-auto"
                        style="
                          background-color: #1b9dfb;
                          padding: 1rem;
                          border-radius: 100%;
                        "
                      >
                        <img src="@/assets/images/upload.svg" />
                      </div>
                      <div class="col text-truncate">
                        <p
                          style="
                            font-size: 18px;
                            font-weight: 700;
                            line-break: strict;
                          "
                        >
                          Upload
                        </p>
                        <p style="margin-left: 15px; line-height: 0.5">
                          {{ freeData2.subP }}
                        </p>
                      </div>
                      <div class="col text-truncate text-end">
                        <p>
                          <svg
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            height="5px"
                            viewBox="0 0 512 512"
                            enable-background="new 0 0 512 512"
                            xml:space="preserve"
                          >
                            <circle fill="#969FAA" cx="256" cy="256" r="250" />
                          </svg>
                          {{ freeData1.subD }} Hari
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="list-group list-group-flush list-group-hoverable">
                    <div class="list-group-item">
                      <div class="row align-items-center">
                        <div
                          class="col-auto"
                          style="
                            background-color: #f95f62;
                            padding: 1rem;
                            border-radius: 100%;
                          "
                        >
                          <img src="@/assets/images/calendar-event copy.svg" />
                        </div>
                        <div class="col text-truncate">
                          <p
                            style="
                              font-size: 18px;
                              font-weight: 700;
                              line-break: strict;
                            "
                          >
                            Acara
                          </p>
                          <p style="margin-left: 15px; line-height: 0.5">
                            {{ freeData2.evtP }}
                          </p>
                        </div>
                        <div class="col text-truncate text-end">
                          <p v-if="freeData1.evtD > 1">
                            {{ freeData1.evtD }} Hari
                          </p>
                          <p
                            v-if="
                              currentEvent.first_time && currentEvent.last_time
                            "
                          >
                            {{ currentEvent.first_time }} -
                            {{ currentEvent.last_time }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="list-group list-group-flush list-group-hoverable">
                    <div class="list-group-item">
                      <div class="row align-items-center">
                        <div
                          class="col-auto"
                          style="
                            background-color: #ffd185;
                            padding: 1rem;
                            border-radius: 100%;
                          "
                        >
                          <img src="@/assets/images/checklist.svg" />
                        </div>
                        <div class="col text-truncate">
                          <p
                            style="
                              font-size: 18px;
                              font-weight: 700;
                              line-break: strict;
                            "
                          >
                            Evaluasi
                          </p>
                          <p style="margin-left: 15px; line-height: 0.5">
                            {{ freeData2.val2P }}
                          </p>
                        </div>
                        <div class="col text-truncate text-end">
                          <p v-if="freeData1.val2D > 1">
                            <svg
                              version="1.1"
                              id="Layer_1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              x="0px"
                              y="0px"
                              height="5px"
                              viewBox="0 0 512 512"
                              enable-background="new 0 0 512 512"
                              xml:space="preserve"
                            >
                              <circle
                                fill="#969FAA"
                                cx="256"
                                cy="256"
                                r="250"
                              />
                            </svg>
                            {{ freeData1.val2D }} Hari
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="list-group list-group-flush list-group-hoverable">
                    <div class="list-group-item">
                      <div class="row align-items-center">
                        <div
                          class="col-auto"
                          style="
                            background-color: #976dd0;
                            padding: 1rem;
                            border-radius: 100%;
                          "
                        >
                          <img src="@/assets/images/trophy.svg" />
                        </div>
                        <div class="col text-truncate">
                          <p
                            style="
                              font-size: 18px;
                              font-weight: 700;
                              line-break: strict;
                            "
                          >
                            Pengumuman
                          </p>
                          <p style="margin-left: 15px; line-height: 0.5">
                            {{ freeData2.winP }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="offcanvas offcanvas-bottom"
              tabindex="-1"
              id="offcanvasBottom4"
              style="height: 40rem"
              aria-labelledby="offcanvasBottomLabel"
            >
              <div class="offcanvas-header">
                <h2 class="offcanvas-title" id="offcanvasBottomLabel">
                  Lokasi / Acara Kegiatan
                </h2>
              </div>
              <div class="image-container">
                <img class="cropped-image" src="@/assets/images/png.png" />
              </div>
              <div class="corner-up-right-lokasi">
                <img src="@/assets/images/corner-up-right.svg" />
              </div>
              <div style="margin: 2rem 2rem">
                <p style="font-weight: 700; font-size: 20px; line-height: 0.3">
                  Ganesha Cultural Center
                </p>
                <p>
                  Jl. Tamansari No.73, Lb. Siliwangi, Kecamatan Coblong, Kota
                  Bandung, Jawa Barat 40132
                </p>
              </div>
            </div>

            <div
              class="offcanvas offcanvas-bottom"
              tabindex="-1"
              id="offcanvasBottom5"
              style="height: 30rem"
              aria-labelledby="offcanvasBottomLabel"
            >
              <div class="offcanvas-header">
                <h2 class="offcanvas-title" id="offcanvasBottomLabel">
                  QR Check-In
                </h2>
              </div>
              <div style="align-content: center; height: 14rem">
                <img
                  style="height: 200px; margin: 0 6rem"
                  src="@/assets/images/qr-code.svg"
                />
              </div>
              <div style="margin: 0 2rem">
                <p style="text-align: center">
                  Gunakan fitur Check-In pada tempat acara / kegiatan untuk
                  mendapatkan informasi seputar event yang sedang berlangsung
                </p>
              </div>
            </div>

            <div
              class="offcanvas offcanvas-bottom"
              tabindex="-1"
              id="offcanvasBottom6"
              style="height: 30rem"
              aria-labelledby="offcanvasBottomLabel"
            >
              <div class="offcanvas-header">
                <h2 class="offcanvas-title" id="offcanvasBottomLabel">
                  Item / Produk
                </h2>
              </div>

              <div
                class="row"
                style="margin-top: 10px"
                v-for="(product, j) in productList"
                :key="j"
              >
                <div class="col-3" style="width: 8rem">
                  <img :src="product.photo" alt="" style="margin: 0 1rem" />
                </div>
                <div class="col-8 home-card-title">
                  <h3 class="overflow-text">
                    {{ product.title }}
                  </h3>
                  <p style="font-weight: 600; font-size: 13px">
                    {{
                      product.free_giveaway === "Y"
                        ? "Gratis"
                        : `Rp ${$func.formatAmount(product.price)}`
                    }}
                    <span style="color: red" v-if="product.optional !== 'Y'"
                      >*</span
                    >
                  </p>
                </div>
              </div>

              <div class="item-wajib" style="color: red; margin: 0 0 0 1rem">
                <p style="font-size: 10px">* Item Wajiib</p>
              </div>
            </div>

            <div
              class="offcanvas offcanvas-bottom"
              tabindex="-1"
              id="offcanvasBottom7"
              style="height: 30rem"
              aria-labelledby="offcanvasBottomLabel"
            >
              <div class="offcanvas-header">
                <h2 class="offcanvas-title" id="offcanvasBottomLabel">
                  Kategori Pemenang
                </h2>
                <p
                  style="
                    padding: 0 1rem;
                    background-color: #1b9dfb;
                    border-radius: 4px;
                    font-weight: 700;
                    color: white;
                    margin-top: 15px;
                  "
                >
                  {{ JSON.parse(currentEvent.prize_category).length }} Kategori
                </p>
              </div>
              <div style="margin: 0 2rem" class="carousel-container">
                <img src="@/assets/images/banner_1.jpg" />
                <img src="@/assets/images/banner_2.jpg" />
              </div>

              <div class="card-header">
                <h3 class="card-title">Hadiah</h3>
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

              <div style="margin: 2rem">
                <p style="text-align: center">
                  {{ currentEvent.prize_description }}
                </p>
              </div>
            </div>

            <div
              class="offcanvas offcanvas-bottom"
              tabindex="-1"
              id="offcanvasBottom8"
              style="height: 35rem; overflow-y: auto"
              aria-labelledby="offcanvasBottomLabel"
            >
              <div class="offcanvas-header">
                <h2 class="offcanvas-title" id="offcanvasBottomLabel">
                  Form Pendaftaran
                </h2>
              </div>

              <div class="mb-3" v-for="(regForm, k) in regFormList" :key="k">
                <label
                  style="margin-left: 1rem"
                  class="form-label"
                  :class="{
                    required: regForm.required === 'Y',
                  }"
                >
                  {{ `${k + 1}. ${regForm.question}` }}
                </label>
                <input
                  style="margin-left: 2rem; width: 21rem"
                  :type="
                    JSON.parse(regForm.validation).number === 'Y'
                      ? 'number'
                      : 'text'
                  "
                  class="form-control"
                  v-if="regForm.question_type === 'Short Answer'"
                />
                <textarea
                  style="margin-left: 2rem; width: 21rem"
                  class="form-control"
                  data-bs-toggle="autosize"
                  v-else-if="regForm.question_type === 'Long Answer'"
                ></textarea>
                <div
                  style="margin-left: 2rem; width: 21rem"
                  v-else-if="regForm.question_type === 'Single Choice'"
                >
                  <div
                    v-for="(option, i) in JSON.parse(regForm.free_data1)"
                    class="d-inline-block me-3"
                    :key="i"
                  >
                    <label class="form-check">
                      <input
                        name="radio"
                        :data-option="i"
                        class="form-check-input"
                        type="radio"
                      />
                      <span class="form-check-label" v-text="option"></span>
                    </label>
                  </div>
                </div>
                <div
                  style="margin-left: 2rem; width: 21rem"
                  v-else-if="regForm.question_type === 'Multiple Choice'"
                >
                  <div
                    v-for="(option, i) in JSON.parse(regForm.free_data1)"
                    class="d-inline-block me-3"
                    :key="i"
                  >
                    <label class="form-check">
                      <input
                        name="checkbox"
                        :data-option="i"
                        class="form-check-input"
                        type="checkbox"
                      />
                      <span class="form-check-label" v-text="option"></span>
                    </label>
                  </div>
                </div>
                <div
                  style="margin-left: 2rem; width: 21rem"
                  v-else-if="regForm.question_type === 'Dropdown'"
                >
                  <select type="text" class="form-select">
                    <option
                      v-for="(option, i) in JSON.parse(regForm.free_data1)"
                      :key="i"
                      :data-option="i"
                    >
                      {{ option }}
                    </option>
                  </select>
                </div>
                <div
                  style="margin-left: 2rem; width: 21rem"
                  v-else-if="regForm.question_type === 'File Download'"
                >
                  <a ref="uploadedFile" download>Download file</a>
                </div>
                <input
                  type="file"
                  class="form-control"
                  style="margin-left: 2rem; width: 21rem"
                  v-else-if="regForm.question_type === 'File Upload'"
                />
                <div
                  style="margin-left: 2rem; width: 21rem"
                  v-else-if="regForm.question_type === 'Date'"
                >
                  <input
                    class="form-control w-50 input-registration-date"
                    placeholder="DD/MM/YYYY"
                    :data-first="
                      JSON.parse(regForm.validation).yearRangeValue[0]
                    "
                    :data-last="
                      JSON.parse(regForm.validation).yearRangeValue[1]
                    "
                  />
                </div>
                <div
                  style="margin-left: 2rem; width: 21rem"
                  v-else-if="regForm.question_type === 'Time'"
                >
                  <input
                    class="form-control w-25 input-registration-time"
                    placeholder="00:00"
                  />
                </div>
              </div>

              <div style="margin: 0 2rem">
                <p style="color: red; font-size: 10px">* item wajib</p>
              </div>
            </div>

            <div
              class="offcanvas offcanvas-bottom"
              tabindex="-1"
              id="offcanvasBottom10"
              style="height: 38rem"
              aria-labelledby="offcanvasBottomLabel"
            >
              <div class="offcanvas-header">
                <h2 class="offcanvas-title" id="offcanvasBottomLabel">
                  Form Upload
                </h2>
              </div>

              <div class="mb-3" v-for="(subForm, k) in subFormList" :key="k">
                <label
                  style="margin-left: 1rem"
                  class="form-label"
                  :class="{
                    required: subForm.required === 'Y',
                  }"
                >
                  {{ `${k + 1}. ${subForm.question}` }}
                </label>
                <input
                  style="margin-left: 2rem; width: 21rem"
                  :type="
                    JSON.parse(subForm.validation).number === 'Y'
                      ? 'number'
                      : 'text'
                  "
                  class="form-control"
                  v-if="subForm.question_type === 'Short Answer'"
                />
                <textarea
                  style="margin-left: 2rem; width: 21rem"
                  class="form-control"
                  data-bs-toggle="autosize"
                  v-else-if="subForm.question_type === 'textarea'"
                ></textarea>
                <div
                  style="margin-left: 2rem; width: 21rem"
                  v-else-if="subForm.question_type === 'Single Choice'"
                >
                  <div
                    v-for="(option, i) in JSON.parse(subForm.free_data1)"
                    class="d-inline-block me-3"
                    :key="i"
                  >
                    <label class="form-check">
                      <input
                        name="radio"
                        :data-option="i"
                        class="form-check-input"
                        type="radio"
                      />
                      <span class="form-check-label" v-text="option"></span>
                    </label>
                  </div>
                </div>
                <div
                  style="margin-left: 2rem; width: 21rem"
                  v-else-if="subForm.question_type === 'Multiple Choice'"
                >
                  <div
                    v-for="(option, i) in JSON.parse(subForm.free_data1)"
                    class="d-inline-block me-3"
                    :key="i"
                  >
                    <label class="form-check">
                      <input
                        name="checkbox"
                        :data-option="i"
                        class="form-check-input"
                        type="checkbox"
                      />
                      <span class="form-check-label" v-text="option"></span>
                    </label>
                  </div>
                </div>
                <div
                  style="margin-left: 2rem; width: 21rem"
                  v-else-if="subForm.question_type === 'Dropdown'"
                >
                  <select type="text" class="form-select">
                    <option
                      v-for="(option, i) in JSON.parse(subForm.free_data1)"
                      :key="i"
                      :data-option="i"
                    >
                      {{ option }}
                    </option>
                  </select>
                </div>
                <div
                  style="margin-left: 2rem; width: 21rem"
                  v-else-if="subForm.question_type === 'File Upload'"
                >
                  <p>
                    {{ subForm.description }}
                  </p>
                  <p
                    v-if="JSON.parse(subForm.validation).file_extension === 'Y'"
                  >
                    Berkas file :
                    <span style="margin-left: 0.5rem; color: #1b9dfb">
                      {{ JSON.parse(subForm.validation).extensions.join(", ") }}
                    </span>
                  </p>
                  <p>
                    Jumlah :
                    <span style="margin-left: 0.5rem; color: #1b9dfb">
                      {{ JSON.parse(subForm.validation).number_of_files }}
                    </span>
                  </p>
                  <input
                    type="file"
                    class="form-control"
                    style="margin: 20px 0"
                  />
                </div>
              </div>

              <!-- <div class="mb-3">
                <label
                  style="margin-left: 1rem; margin-top: 1rem"
                  class="form-label required"
                  >1. Proses Mewarnai</label
                >
                <p style="margin: 0 2rem">
                  Video harus memperlihatkan proses peserta ketika mewarnai
                  dengan durasi tidak lebih dari 90 menit
                </p>
                <p style="margin: 0 2rem; margin-top: 1rem">
                  Berkas file :
                  <span style="margin-left: 0.5rem; color: #1b9dfb"
                    >video/*</span
                  >
                </p>

                <p style="margin: 0 2rem">
                  Jumalah :
                  <span style="margin-left: 0.5rem; color: #1b9dfb">1</span>
                </p>

                <img
                  style="margin-left: 20rem; margin-bottom: 1rem"
                  src="@/assets/images/movie.svg"
                />

                <div style="margin: 0 2rem">
                  <input type="file" class="form-control" />
                </div>
              </div>

              <div class="mb-3">
                <label style="margin-left: 1rem" class="form-label required"
                  >2. Hasil Mewarnai</label
                >
                <p style="margin: 0 2rem">
                  Foto Kertas Mewarnai secara keseluruhan, dan pastikan
                  pencahayaan baik ketika mengambil gambar
                </p>
                <p style="margin: 0 2rem; margin-top: 1rem">
                  Berkas file :
                  <span style="margin-left: 0.5rem; color: #1b9dfb"
                    >image/*</span
                  >
                </p>

                <p style="margin: 0 2rem">
                  Jumalah :
                  <span style="margin-left: 0.5rem; color: #1b9dfb">3</span>
                </p>

                <img
                  style="margin-left: 20rem; margin-bottom: 1rem"
                  src="@/assets/images/photo.svg"
                />

                <div style="margin: 0 2rem">
                  <input type="file" class="form-control" />
                </div>
              </div> -->
              <div style="margin: 0 2rem">
                <p style="color: red">* item wajib</p>
              </div>
            </div>

            <a href="/profile.html" style="text-decoration: none; color: black">
              <div
                class="offcanvas offcanvas-bottom"
                tabindex="-1"
                id="offcanvasBottom11"
                style="height: 35rem"
                aria-labelledby="offcanvasBottomLabel"
              >
                <div class="row" style="margin-top: 10px">
                  <div class="col-3">
                    <img
                      src="@/assets/images/018m.jpg"
                      alt=""
                      style="
                        margin-left: 1rem;
                        height: 5rem;
                        border-radius: 100%;
                      "
                    />
                  </div>
                  <div class="col-8 home-card-title">
                    <h3 class="overflow-text">
                      Andika Nurtamin
                      <span>
                        <img
                          alt=""
                          style="
                            position: relative;
                            left: 80px;
                            border-radius: 20%;
                            background-color: #1b9dfb;
                          "
                          src="@/assets/images/pencil.svg"
                      /></span>
                    </h3>
                    <p style="color: gray; font-size: small">
                      08124653723
                      <span>
                        <img
                          alt=""
                          style="height: 10px"
                          src="@/assets/images/shield-check.svg"
                      /></span>
                    </p>
                    <p style="color: gray; font-size: small; line-height: 0">
                      cobaemail@gmail.com
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
            </a>

            <!-- <div class="mb-3">
              <div class="card" style="margin-top: 5px">
                <div class="card-header row">
                  <div class="col-4 text-center">
                    <h2 class="card-title active">Update</h2>
                  </div>
                  <div class="col-4 text-center">
                    <h2 class="card-title">Transaksi</h2>
                  </div>
                  <div class="col-4 text-center">
                    <h2 class="card-title">Event</h2>
                  </div>
                </div>

                <div class="list-group list-group-flush list-group-hoverable">
                  <div class="list-group-item">
                    <div class="col text-truncate">
                      <p style="margin: 0 2rem">
                        Diskusi
                        <span style="margin-left: 0.5rem; color: #1b9dfb"
                          ><svg
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            height="5px"
                            viewBox="0 0 512 512"
                            enable-background="new 0 0 512 512"
                            xml:space="preserve"
                          >
                            <circle fill="#969FAA" cx="256" cy="256" r="250" />
                          </svg>
                          3 jam lalu</span
                        >
                      </p>

                      <p
                        style="
                          margin: 0 2rem;
                          margin-top: 5px;
                          white-space: normal;
                          overflow: hidden;
                        "
                      >
                        Komentar baru acara Maped Coloring Contest: Learning
                        Style
                      </p>
                    </div>
                  </div>
                </div>

                <div class="list-group list-group-flush list-group-hoverable">
                  <div class="list-group-item">
                    <div class="col text-truncate">
                      <p style="margin: 0 2rem">
                        Event
                        <span style="margin-left: 0.5rem; color: #1b9dfb"
                          ><svg
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            height="5px"
                            viewBox="0 0 512 512"
                            enable-background="new 0 0 512 512"
                            xml:space="preserve"
                          >
                            <circle fill="#969FAA" cx="256" cy="256" r="250" />
                          </svg>
                          24 Feb</span
                        >
                      </p>

                      <p
                        style="
                          margin: 0 2rem;
                          margin-top: 5px;
                          white-space: normal;
                          overflow: hidden;
                        "
                      >
                        Batas waktu acara tinggal 1 hari lagi, segera upload
                        berkas yang dipersyaratkan
                      </p>
                    </div>
                  </div>
                </div>

                <div class="list-group list-group-flush list-group-hoverable">
                  <div class="list-group-item">
                    <div class="col text-truncate">
                      <p style="margin: 0 2rem">
                        Event
                        <span style="margin-left: 0.5rem; color: #1b9dfb"
                          ><svg
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            height="5px"
                            viewBox="0 0 512 512"
                            enable-background="new 0 0 512 512"
                            xml:space="preserve"
                          >
                            <circle fill="#969FAA" cx="256" cy="256" r="250" />
                          </svg>
                          22 Feb</span
                        >
                      </p>

                      <p
                        style="
                          margin: 0 2rem;
                          margin-top: 5px;
                          white-space: normal;
                          overflow: hidden;
                        "
                      >
                        Batas waktu acara tinggal 3 hari lagi, segera upload
                        berkas yang dipersyaratkan
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div> -->

            <div>
              <a
                href="#"
                class="btn"
                data-bs-toggle="modal"
                data-bs-target="#modal-registration"
                style="background-color: #1b9dfb; color: white; width: 100%"
              >
                REGISTRASI
              </a>
            </div>
            <br />

            <a @click.prevent="getEventAbout" style="text-decoration: none">
              <div
                class="tentang-event"
                style="text-decoration: none; color: black"
              >
                <div class="d-flex justify-content-between align-items-end">
                  <h3>Tentang Event Ini</h3>
                  <div>
                    <svg
                      style="position: relative; top: -0.8rem"
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
                          fill="#1B9DFB"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
                <div>
                  <p>
                    The Power of Learning Style : Kenali Gaya Belajarmu, Raih
                    Prestasimu !
                  </p>
                  <p class="text-muted" style="font-size: 11.5px">
                    Deskripsi
                    <span class="badge bg-grey" style="margin: 0 14px"></span>
                    Peraturan
                    <span class="badge bg-grey" style="margin: 0 14px"></span>
                    Hadiah
                    <span class="badge bg-grey" style="margin: 0 14px"></span>
                    Upload
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Register Modal  -->
    <div
      class="modal modal-blur fade"
      id="modal-registration"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      ref="modalRegistration"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header r">
            <h5 class="modal-title">
              {{ isRegistration ? "Daftar" : "Login" }}
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              ref="closeRegistrationModal"
            ></button>
          </div>
          <div class="modal-body text-center">
            <img
              src="@/assets/images/logo.svg"
              alt=""
              height="70rem"
              style="margin: 1rem 0 2rem 0"
            />
            <form
              @submit.prevent="register"
              ref="registrationForm"
              v-if="isRegistration"
            >
              <input
                type="text"
                autocomplete="off"
                class="form-control mb-2"
                name="example-text-input"
                placeholder="Nama"
                :disabled="confirmRegister"
                v-model="registration.name"
              />
              <input
                type="text"
                autocomplete="off"
                class="form-control mb-2"
                name="example-text-input"
                placeholder="Email/Username"
                :disabled="confirmRegister"
                v-model="registration.email"
              />
              <input
                type="text"
                autocomplete="off"
                class="form-control mb-2"
                name="example-text-input"
                placeholder="No Handphone"
                :disabled="confirmRegister"
                v-model="registration.phone"
              />
              <input
                type="password"
                class="form-control mb-2"
                name="example-text-input"
                placeholder="Password"
                :disabled="confirmRegister"
                v-model="registration.password"
              />
              <input
                v-if="confirmRegister"
                v-model="registration.confirmationPassword"
                type="password"
                class="form-control mb-2"
                name="example-text-input"
                placeholder="Ulangi Password"
              />
              <a href="#" class="d-inline-block mt-3">Lupa Password?</a>
              <br />
              Sudah punya akun? Silakan
              <a
                @click.prevent="isRegistration = !isRegistration"
                class="d-inline-block mt-3"
                >login</a
              >
              <br />
              <button
                type="submit"
                class="btn btn-primary"
                style="
                  margin: 5rem 0 0.5rem 0;
                  padding: 0.5rem 1rem;
                  background-color: #1b9dfb;
                "
              >
                DAFTAR
              </button>
            </form>
            <form @submit.prevent="login" ref="loginForm" v-else>
              <input
                type="text"
                autocomplete="off"
                class="form-control mb-2"
                name="example-text-input"
                placeholder="Email/Username"
                :disabled="confirmRegister"
                v-model="loginData.username"
              />
              <input
                type="password"
                class="form-control mb-2"
                name="example-text-input"
                placeholder="Password"
                :disabled="confirmRegister"
                v-model="loginData.password"
              />
              Belum punya akun? Silakan
              <a
                @click.prevent="isRegistration = !isRegistration"
                class="d-inline-block mt-3"
                >daftar</a
              >
              <br />
              <button
                type="submit"
                class="btn btn-primary"
                style="
                  margin: 5rem 0 0.5rem 0;
                  padding: 0.5rem 1rem;
                  background-color: #1b9dfb;
                "
              >
                MASUK
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import productService from "@/service/product";
import templateService from "@/service/template";
import IMask from "imask";
import Vue from "vue";
import SplashScreen from "../components/SplashScreen.vue";
import accountService from "@/service/account";

export default {
  name: "EventInsight",
  components: { SplashScreen },
  data() {
    return {
      isBusyAll: false,
      currentEvent: {},
      productList: [],
      regFormList: [],
      subFormList: [],
      confirmRegister: false,
      isRegistration: true,
      registration: {
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmationPassword: "",
      },
      loginData: {
        username: "",
        password: "",
      },
    };
  },
  computed: {
    freeData1() {
      try {
        return JSON.parse(this.currentEvent.free_data1);
      } catch {
        return {};
      }
    },
    freeData2() {
      try {
        return JSON.parse(this.currentEvent.free_data2);
      } catch {
        return {};
      }
    },
    getEventPeriod() {
      let startPeriod = (this.freeData2.evtP || "").split(" - ")[0];
      let endPeriod = this.freeData2.winP || "";

      if (startPeriod.toLowerCase() === "invalid date") startPeriod = "";
      if (endPeriod.toLowerCase() === "invalid date") endPeriod = "";

      return `${startPeriod} - ${endPeriod}`;
    },
  },
  methods: {
    getEventAbout() {
      this.$func.saveToLocalStorage(
        "submission-form-list",
        JSON.stringify(this.subFormList)
      );
      this.$func.goTo("/about-event");
    },
    async register() {
      this.$func.loading();
      try {
        if (!this.confirmRegister) {
          if (!this.registration.name) {
            throw new Error("Nama harus diisi");
          }

          if (!this.registration.email) {
            throw new Error("Email harus diisi");
          }

          if (!this.registration.phone) {
            throw new Error("No handphone harus diisi");
          }

          if (!this.registration.name) {
            throw new Error("Password harus diisi");
          }

          this.confirmRegister = true;
        } else {
          if (!this.registration.confirmationPassword) {
            throw new Error("Password konfirmasi harus diisi");
          }

          if (
            this.registration.confirmationPassword !==
            this.registration.password
          ) {
            throw new Error("Password konfirmasi salah");
          }

          const reqBody = {
            name_customer: this.registration.name,
            address: "",
            phone_number: this.registration.phone,
            gender: "",
            city: "",
            identity_type: "",
            nik: "",
            province: "",
            district: "",
            username: this.registration.email,
            password: this.$func.encryptSha256(this.registration.password),
            avatar: "",
            postal_code: "",
            email: this.registration.email,
          };

          const registrationResponse = await accountService.register(reqBody);

          if (!this.$func.isSuccessStatus(registrationResponse.status)) {
            throw new Error(registrationResponse.statusText);
          }

          // this.$refs.closeRegistrationModal.click();
          this.isRegistration = false;
          this.confirmRegister = false;
          this.$func.showSuccessSnackbar(
            "Registrasi berhasil, silakan login kembali"
          );
        }
      } catch (err) {
        this.$func.showErrorSnackbar(err.message);
      } finally {
        this.$func.finishLoading();
      }
    },
    async login() {
      this.$func.loading();
      try {
        if (!this.loginData.username) {
          throw new Error("Username harus diisi");
        }

        if (!this.loginData.password) {
          throw new Error("Password harus diisi");
        }

        const reqBody = {
          username: this.loginData.username,
          password: this.$func.encryptSha256(this.loginData.password),
        };

        const loginResponse = await accountService.login(reqBody);

        if (!this.$func.isSuccessStatus(loginResponse.status)) {
          throw new Error(loginResponse.statusText);
        }

        this.$refs.closeRegistrationModal.click();
        this.$func.showSuccessSnackbar("Login berhasil");
        this.$func.saveToLocalStorage(
          "login-data",
          JSON.stringify(loginResponse.data)
        );

        this.$func.saveToLocalStorage(
          "registration-form-list",
          JSON.stringify(this.regFormList)
        );
        this.$func.goTo("/registration-form");
      } catch (err) {
        this.$func.showErrorSnackbar(err.message);
      } finally {
        this.$func.finishLoading();
      }
    },
    async getBrandProducts() {
      const productList = (
        await productService.getBrandProducts(
          this.currentEvent.brand_id,
          this.currentEvent.company_id
        )
      ).data.products;

      this.productList = productList.filter((p) => {
        const selectedProducts = JSON.parse(this.currentEvent.select_product);

        return selectedProducts.indexOf(p.product_id) >= 0;
      });
    },
    async getCompanyRegistrationForms() {
      const regFormList = (
        await templateService.getCompanyTemplates(
          this.currentEvent.company_id,
          "REGISTRATION"
        )
      ).data.templates;

      this.regFormList = regFormList.filter((t) => {
        const selectedTemplates = JSON.parse(
          this.currentEvent.select_form_registration
        );

        return selectedTemplates.indexOf(t.template_id) >= 0;
      });
    },
    async getCompanySubmissionForms() {
      const subFormList = (
        await templateService.getCompanyTemplates(
          this.currentEvent.company_id,
          "SUBMISSION"
        )
      ).data.templates;

      this.subFormList = subFormList.filter((t) => {
        const selectedTemplates = JSON.parse(
          this.currentEvent.submission_online_select_form
        );

        return selectedTemplates.indexOf(t.template_id) >= 0;
      });
    },
    prepareUI() {
      Vue.nextTick(() => {
        for (const inputRegDate of document.querySelectorAll(
          ".input-registration-date"
        )) {
          const inputRegistrationDate = IMask(inputRegDate, {
            mask: "DD/MM/YYYY",
            lazy: false,
          });

          inputRegistrationDate.updateOptions({
            blocks: {
              DD: {
                mask: IMask.MaskedRange,
                placeholderChar: "D",
                from: 1,
                to: 31,
              },
              MM: {
                mask: IMask.MaskedRange,
                placeholderChar: "M",
                from: 1,
                to: 12,
              },
              YYYY: {
                mask: IMask.MaskedRange,
                placeholderChar: "Y",
                from: Number(inputRegDate.dataset.first),
                to: Number(inputRegDate.dataset.last),
              },
            },
          });
        }

        for (const inputRegTime of document.querySelectorAll(
          ".input-registration-time"
        )) {
          const inputRegistrationTime = IMask(inputRegTime, {
            mask: "HH:MM",
            lazy: false,
            blocks: {
              HH: {
                mask: IMask.MaskedRange,
                placeholderChar: "H",
                from: 0,
                to: 24,
              },
              MM: {
                mask: IMask.MaskedRange,
                placeholderChar: "M",
                from: 0,
                to: 59,
              },
            },
          });
        }
      });

      this.$refs.modalRegistration.addEventListener("hidden.bs.modal", () => {
        this.confirmRegister = false;
        this.isRegistration = true;
        this.$refs.registrationForm.reset();
      });
    },
  },
  async mounted() {
    if (localStorage.getItem("event")) {
      this.currentEvent = JSON.parse(this.$func.getFromLocalStorage("event"));

      this.isBusyAll = true;
      await this.getBrandProducts();
      await this.getCompanySubmissionForms();
      await this.getCompanyRegistrationForms();
      this.prepareUI();
      this.isBusyAll = false;
    } else {
      this.$func.back();
    }
  },
};
</script>

<style>
</style>