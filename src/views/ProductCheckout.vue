<template>
  <div class="product-checkout">
    <splash-screen v-if="isBusyAll" />
    <div class="container" style="background-color: white">
      <div class="">
        <div style="background-color: #c6e7ff; margin: 5px 0 0 0">
          <div class="info-label-checkout">
            <img
              src="@/assets/images/chevron-label.svg"
              alt=""
              style="height: 17px"
            />
          </div>
          <p class="text-muted" style="margin: 6px 0 6px 20px">
            Lengkapi form isian untuk melanjutkan
          </p>
        </div>

        <div style="background-color: #c6e7ff; margin: 5px 0 0 0">
          <div class="info-label-checkout2">
            <img
              src="@/assets/images/chevron-label.svg"
              alt=""
              style="height: 17px"
            />
          </div>
          <p class="text-muted" style="margin: 6px 0 6px 20px">
            Verifikasi alamat email untuk melanjutkan
          </p>
        </div>

        <a
          style="
            background-color: #c6e7ff;
            margin: 5px 0 0 0;
            text-decoration: none;
          "
          data-bs-toggle="offcanvas"
          href="#offcanvasBottom"
          role="button"
        >
          <div class="info-label-checkout3">
            <img
              src="@/assets/images/chevron-label.svg"
              alt=""
              style="height: 17px"
            />
          </div>
          <p class="text-muted" style="margin: 6px 0 6px 20px">
            Lengkapi data alamat pengirim
          </p>
        </a>

        <div class="col-lg-6" style="margin: 15px 0 15px 0">
          <div class="row">
            <a
              class="col row"
              style="text-decoration: none; color: black"
              data-bs-toggle="offcanvas"
              href="#offcanvasBottom"
              role="button"
            >
              <div class="col text-start">
                <img
                  style="position: relative; top: 10px; right: 3px"
                  src="@/assets/images/home-2.svg"
                  alt=""
                />
              </div>
              <div
                class="col"
                style="position: relative; right: 1rem; top: 10px"
              >
                Alamat Pengirim<br />
                -
              </div>
              <div class="col">
                <img
                  style="position: relative; top: 10px"
                  src="@/assets/images/chevron.svg"
                  alt=""
                />
              </div>
            </a>
            <a
              class="col row"
              style="text-decoration: none; color: black"
              data-bs-toggle="offcanvas"
              href="#offcanvasBottom1"
              role="button"
            >
              <div class="col text-start">
                <img
                  style="position: relative; top: 10px; right: 4px"
                  src="@/assets/images/package-import.svg"
                  alt=""
                />
              </div>
              <div
                class="col"
                style="position: relative; right: 1rem; top: 10px"
              >
                Kurir/ Ekspedisi<br />
                -
              </div>
              <div class="col">
                <img
                  style="position: relative; top: 10px"
                  src="@/assets/images/chevron.svg"
                  alt=""
                />
              </div>
            </a>

            <a
              class="col row"
              style="text-decoration: none; color: black"
              data-bs-toggle="offcanvas"
              href="#offcanvasBottom3"
              role="button"
            >
              <div class="col text-start">
                <img
                  style="position: relative; top: 10px; right: 3px"
                  src="@/assets/images/building-bank.svg"
                  alt=""
                />
              </div>
              <div
                class="col"
                style="position: relative; right: 1rem; top: 10px"
              >
                Metode Pembayaran<br />
                <b>Transfer</b>
              </div>
              <div class="col"></div>
            </a>
          </div>
        </div>

        <div
          class="offcanvas offcanvas-bottom container"
          tabindex="-1"
          id="offcanvasBottom"
          style="height: 35rem"
          aria-labelledby="offcanvasBottomLabel"
        >
          <div class="card-header">
            <h2 style="margin-top: 10px">Data Penerima</h2>
            <br />
          </div>
          <div class="card-body" style="margin: 0 2rem">
            <div>
              <div class="mb-3 row">
                <div class="col-6">
                  <label class="form-label">Nama</label>
                  <input
                    style="width: 9rem"
                    type="text"
                    class="form-control"
                    name="example-text-input"
                    placeholder="Nama"
                  />
                </div>
                <div class="col-6">
                  <label class="form-label">No. Hp</label>
                  <input
                    style="width: rem"
                    type="text"
                    class="form-control"
                    name="example-text-input"
                    placeholder="No. HP"
                  />
                </div>
              </div>

              <h3>Alamat Penerima</h3>
              <label for="select-city">Kabupaten/Kota</label>
              <div class="form-floating" style="margin-bottom: 1rem">
                <select
                  class="form-select"
                  id="select-city"
                  aria-label="Floating label select example"
                  v-model="shippingRecipientData.city"
                >
                  <option selected disabled></option>
                </select>
              </div>
              <label for="select-city">Kecamatan/Kode Pos</label>
              <div class="form-floating">
                <select
                  class="form-select"
                  id="select-subdistrict"
                  aria-label="Floating label select example"
                >
                  <option selected disabled></option>
                </select>
              </div>

              <div style="margin: 1rem 0">
                <label class="form-label">Alamat Lengkap</label>
                <input
                  style="width: rem"
                  type="text"
                  class="form-control"
                  name="example-text-input"
                  placeholder="Alamat Lengkap"
                />
              </div>

              <div style="margin: 1rem 0">
                <label class="form-label">Catatan untuk kurir (opsional)</label>
                <input
                  style="width: rem"
                  type="text"
                  class="form-control"
                  name="example-text-input"
                  placeholder="Catatan"
                />
              </div>
            </div>
          </div>

          <div class="card bayar-btn-container fixed-bottom">
            <div
              class="row"
              style="
                margin: 1rem 0;
                position: relative;
                left: 12rem;
                width: 250px;
              "
            >
              <div class="col-8">
                <a
                  href="#"
                  class="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-simple"
                  style="background-color: #1b9dfb; color: white; width: 100%"
                >
                  SIMPAN
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          class="offcanvas offcanvas-bottom"
          tabindex="-1"
          id="offcanvasBottom1"
          aria-labelledby="offcanvasBottomLabel"
          style="height: 38rem"
        >
          <div class="card-header">
            <h3 style="margin: 2rem 6.5rem">Jasa Pengiriman</h3>
            <br />
          </div>

          <div class="offcanvas-body">
            <div class="mb-3 custom-select">
              <div class="dropdown">
                <button class="dropdown-button" style="width: 18rem">
                  <img
                    style="height: 60px; position: relative; right: 5.5rem"
                    src="@/assets/images/Foto-2-Naskah-Mengenal-Sosok-Kreator-Logo-‘Biru-Tua-Merah-JNE.jpg"
                  />
                </button>
                <ul
                  class="dropdown-list"
                  style="position: relative; z-index: 1"
                >
                  <li>
                    <img
                      class="option-image"
                      style="height: 50px"
                      src="@/assets/images/Foto-2-Naskah-Mengenal-Sosok-Kreator-Logo-‘Biru-Tua-Merah-JNE.jpg"
                    />Ekonomi
                    <span style="margin-left: 5rem">Rp 9.000</span>
                  </li>
                  <li>
                    <img
                      class="option-image"
                      style="height: 50px"
                      src="@/assets/images/Foto-2-Naskah-Mengenal-Sosok-Kreator-Logo-‘Biru-Tua-Merah-JNE.jpg"
                    />Reguler
                    <span style="margin-left: 5rem">Rp 11.000</span>
                  </li>
                  <li>
                    <img
                      class="option-image"
                      style="height: 50px"
                      src="@/assets/images/Foto-2-Naskah-Mengenal-Sosok-Kreator-Logo-‘Biru-Tua-Merah-JNE.jpg"
                    />Next Day
                    <span style="margin-left: 4.5rem">Rp 14.000</span>
                  </li>
                  <li>
                    <img
                      class="option-image"
                      style="height: 50px"
                      src="@/assets/images/Foto-2-Naskah-Mengenal-Sosok-Kreator-Logo-‘Biru-Tua-Merah-JNE.jpg"
                    />Same Day
                    <span style="margin-left: 4rem">Rp 16.000</span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="mb-3 custom-select">
              <div class="dropdown">
                <button class="dropdown-button" style="width: 18rem">
                  <img
                    style="height: 60px; position: relative; right: 5.5rem"
                    src="@/assets/images/ninja.png"
                  />
                </button>
                <ul
                  class="dropdown-list"
                  style="position: relative; z-index: 1"
                >
                  <li>Option 1</li>
                  <li>Option 2</li>
                  <li>Option 3</li>
                  <li>Option 4</li>
                </ul>
              </div>
            </div>

            <div class="mb-3 custom-select">
              <div class="dropdown">
                <button class="dropdown-button" style="width: 18rem">
                  <img
                    style="height: 60px; position: relative; right: 5.5rem"
                    src="@/assets/images/sicepat.png"
                  />
                </button>
                <ul
                  class="dropdown-list"
                  style="position: relative; z-index: 1"
                >
                  <li>Option 1</li>
                  <li>Option 2</li>
                  <li>Option 3</li>
                  <li>Option 4</li>
                </ul>
              </div>
            </div>

            <div class="mb-3 custom-select">
              <div class="dropdown">
                <button class="dropdown-button" style="width: 18rem">
                  <img
                    style="height: 60px; position: relative; right: 5.5rem"
                    src="@/assets/images/gosend.png"
                  />
                </button>
                <ul
                  class="dropdown-list"
                  style="position: relative; z-index: 1"
                >
                  <li>Option 1</li>
                  <li>Option 2</li>
                  <li>Option 3</li>
                  <li>Option 4</li>
                </ul>
              </div>
            </div>

            <div class="card bayar-btn-container fixed-bottom">
              <div
                class="row"
                style="
                  margin: 1rem 0;
                  position: relative;
                  left: 12rem;
                  width: 250px;
                "
              >
                <div class="col-8">
                  <a
                    href="/acc.html"
                    class="btn"
                    data-bs-target="#modal-simple"
                    style="background-color: #1b9dfb; color: white; width: 100%"
                  >
                    SIMPAN
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="offcanvas offcanvas-bottom"
          tabindex="-1"
          id="offcanvasBottom3"
          aria-labelledby="offcanvasBottomLabel"
          style="height: 30rem"
        >
          <div class="offcanvas-header">
            <h2 class="offcanvas-title" id="offcanvasBottomLabel">
              Metode Pembayaran
            </h2>
            <button
              type="button"
              class="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <div class="card">
              <div class="card-body">
                <div class="mb-3">
                  <div>
                    <label class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="radios"
                        checked
                      />
                      <span class="form-check-label">
                        <img
                          src="@/assets/images/qris.png"
                          alt=""
                          style="height: 1.4rem"
                        />
                        <p>
                          Scan QR Code dengan aplikasi e-Banking atau e-wallet
                        </p>
                      </span>
                    </label>
                    <label class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="radios"
                      />
                      <span class="form-check-label">
                        <img
                          src="@/assets/images/mandiri.png"
                          alt=""
                          style="height: 1.4rem"
                        />
                        <p>
                          Scan QR Code dengan aplikasi e-Banking atau e-wallet
                        </p>
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div style="margin: 30px 0 10px 0; color: #1b9dfb">
              <p>
                <span
                  ><img
                    src="@/assets/images/info-label.svg"
                    alt=""
                    style="height: 15px; margin-bottom: 3px"
                /></span>
                Panduan Pembayaran
              </p>
            </div>
            <hr />
            <div class="mt-3">
              <button
                class="btn btn-primary"
                type="button"
                data-bs-dismiss="offcanvas"
                style="background-color: #1b9dfb; padding: 0.5rem 2rem"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TomSelect from "tom-select";
import shipdeoService from "@/service/shipdeo";
import moment from "moment";
import Vue from "vue";
import SplashScreen from "../components/SplashScreen.vue";

export default {
  name: "ProductCheckout",
  components: { SplashScreen },
  data() {
    return {
      shippingRecipientData: {
        city: "",
        postalCode: "",
      },
      dropdownForm: {
        selectCity: null,
        selectSubdistrict: null,
      },
      shipdeo_access_token: "",
      shipdeo_access_token_expires_at: "",
      isBusyAll: false,
    };
  },
  methods: {
    async getShipdeoAccess() {
      try {
        const tokenResponse = (await shipdeoService.getAccessToken()).data;

        this.shipdeo_access_token = tokenResponse.accessToken;
        this.shipdeo_access_token_expires_at =
          tokenResponse.accessTokenExpiresAt;
        localStorage.setItem("shipdeo_access_token", tokenResponse.accessToken);
        localStorage.setItem(
          "shipdeo_access_token_expires_at",
          tokenResponse.accessTokenExpiresAt
        );
      } catch (err) {
        this.$func.showErrorSnackbar(err.message);
      }
    },
    prepareUI() {
      this.dropdownForm.selectCity = new TomSelect("#select-city", {
        valueField: "city_code",
        searchField: [
          "formatted_city_name",
          "city_name",
          "city_type",
          "postal_code",
        ],
        maxItems: 1,
        load: async (query, callback) => {
          try {
            const searchResponse = (
              await shipdeoService.searchMasterLocation(
                this.shipdeo_access_token,
                query,
                "city"
              )
            ).data;

            if (!searchResponse.success) {
              throw new Error();
            }

            callback(searchResponse.data);
          } catch {
            callback();
          }
        },
        render: {
          option: function (data, escape) {
            return `<div class="py-2">
                      <div>
                        ${escape(data.city_name)}<br>
                        <span class="text-muted small">${escape(
                          data.province.province_name
                        )}</span>
                      </div>
                    </div>`;
          },
          item: (data, escape) => {
            return `<span>${escape(data.city_name)}</span>`;
          },
        },
      });

      this.dropdownForm.selectSubdistrict = new TomSelect(
        "#select-subdistrict",
        {
          valueField: "postal_code",
          searchField: ["village_name", "subdistrict_name", "postal_code"],
          maxItems: 1,
          load: async (query, callback) => {
            try {
              const searchResponse = (
                await shipdeoService.searchLocation(
                  this.shipdeo_access_token,
                  query,
                  this.shippingRecipientData.city
                )
              ).data;

              if (!searchResponse.success) {
                throw new Error();
              }

              callback(searchResponse.data);
            } catch {
              callback();
            }
          },
          render: {
            option: function (data, escape) {
              return `<div class="py-2">
                      <div>
                        ${escape(data.village_name)}, ${escape(
                data.subdistrict_name
              )}, ${escape(data.postal_code)}
                        <span class="text-muted small">${escape(
                          data.city_name
                        )}, ${data.province_name}</span>
                      </div>
                    </div>`;
            },
            item: (data, escape) => {
              return `<span>${escape(data.village_name)}, ${escape(
                data.subdistrict_name
              )}, ${escape(data.postal_code)}</span>`;
            },
          },
        }
      );
      this.dropdownForm.selectSubdistrict.disable();
    },
  },
  watch: {
    "shippingRecipientData.city": function (val) {
      if (!val) {
        this.dropdownForm.selectSubdistrict.disable();
      } else {
        this.dropdownForm.selectSubdistrict.enable();
        this.dropdownForm.selectSubdistrict.destroy();
        Vue.nextTick(() => {
          this.dropdownForm.selectSubdistrict = new TomSelect(
            "#select-subdistrict",
            {
              valueField: "postal_code",
              searchField: ["village_name", "subdistrict_name", "postal_code"],
              maxItems: 1,
              load: async (query, callback) => {
                try {
                  const searchResponse = (
                    await shipdeoService.searchLocation(
                      this.shipdeo_access_token,
                      query,
                      this.shippingRecipientData.city
                    )
                  ).data;

                  if (!searchResponse.success) {
                    throw new Error();
                  }

                  callback(searchResponse.data);
                } catch {
                  callback();
                }
              },
              render: {
                option: function (data, escape) {
                  return `<div class="py-2">
                      <div>
                        ${escape(data.village_name)}, ${escape(
                    data.subdistrict_name
                  )}, ${escape(data.postal_code)}
                        <span class="text-muted small">${escape(
                          data.city_name
                        )}, ${data.province_name}</span>
                      </div>
                    </div>`;
                },
                item: (data, escape) => {
                  return `<span>${escape(data.village_name)}, ${escape(
                    data.subdistrict_name
                  )}, ${escape(data.postal_code)}</span>`;
                },
              },
            }
          );
        });
      }
    },
  },
  async mounted() {
    if (
      !localStorage.getItem("shipdeo_access_token") ||
      moment().isAfter(
        moment(localStorage.getItem("shipdeo_access_token_expires_at"))
      )
    ) {
      this.isBusyAll = true;
      await this.getShipdeoAccess();
      this.isBusyAll = false;
    } else {
      this.shipdeo_access_token = localStorage.getItem("shipdeo_access_token");
      this.shipdeo_access_token_expires_at = localStorage.getItem(
        "shipdeo_access_token_expires_at"
      );
    }

    this.prepareUI();
  },
};
</script>