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
          style="height: 90vh"
        >
          <div class="card-header">
            <h3 style="margin: 2rem 6.5rem">Jasa Pengiriman</h3>
            <br />
          </div>

          <div class="offcanvas-body">
            <div class="accordion" id="accordion-courier">
              <div
                class="accordion-item"
                v-for="(courier, i) in courierList"
                :key="i"
              >
                <h2 class="accordion-header" :id="`heading-${i + 1}`">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    :data-bs-target="`#collapse-${i + 1}`"
                    aria-expanded="false"
                    @click="checkCourier(i + 1)"
                  >
                    <input
                      type="radio"
                      name="courier"
                      :id="`courier-${i + 1}`"
                    />
                    <img
                      :src="getCourierLogoImage(courier.parameter_icon)"
                      :alt="courier.parameter_name"
                      width="150"
                    />
                  </button>
                </h2>
                <div
                  :id="`collapse-${i + 1}`"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordion-courier"
                  style=""
                >
                  <div class="accordion-body pt-0">
                    <strong>This is the first item's accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
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
        <hr />
        <div class="" style="margin-bottom: 4rem">
          <!-- item card  -->
          <div class="card" v-for="(product, i) in productList" :key="i">
            <div class="card-body p-0 row">
              <div class="col-5" style="margin: 10px">
                <!-- Libs JS -->
                <a data-fslightbox="gallery" :href="product.photo">
                  <img
                    :src="product.photo"
                    alt=""
                    style="border-radius: 10px"
                  />
                </a>
              </div>
              <div class="col row" style="margin: 10px 0">
                <p style="font-size: 12px">
                  {{ product.description }}
                </p>
                <div class="col-8">
                  <h4 style="font-size: 12px">
                    <b>Rp {{ $func.formatAmount(product.price) }}</b
                    ><span style="color: red" v-if="product.optional !== 'N'"
                      >*</span
                    >
                  </h4>
                </div>
                <div class="col-3">
                  <span
                    ><img
                      style="height: 13px; position: relative; bottom: 1px"
                      src="@/assets/images/circle-minus.svg"
                  /></span>
                  <span style="position: relative; right: 2px">1</span>
                  <span
                    ><img
                      style="
                        height: 11px;
                        position: relative;
                        bottom: 21px;
                        left: 25px;
                      "
                      src="@/assets/images/plus.svg"
                  /></span>
                </div>
              </div>
            </div>
          </div>
          <!-- END item card  -->
        </div>
      </div>
    </div>
    <div class="fixed-bottom">
      <div class="card bayar-btn-container" style="background-color: white">
        <div class="row" style="margin: 1rem 0">
          <div class="col-8">
            <a
              href="#"
              class="btn btn-outline-primary disabled w-100"
              data-bs-toggle="modal"
              data-bs-target="#modal-simple"
              style="background-color: #1b9dfb; color: white; width: 100%"
              diasable
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-shield-check-filled"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M11.998 2l.118 .007l.059 .008l.061 .013l.111 .034a.993 .993 0 0 1 .217 .112l.104 .082l.255 .218a11 11 0 0 0 7.189 2.537l.342 -.01a1 1 0 0 1 1.005 .717a13 13 0 0 1 -9.208 16.25a1 1 0 0 1 -.502 0a13 13 0 0 1 -9.209 -16.25a1 1 0 0 1 1.005 -.717a11 11 0 0 0 7.531 -2.527l.263 -.225l.096 -.075a.993 .993 0 0 1 .217 -.112l.112 -.034a.97 .97 0 0 1 .119 -.021l.115 -.007zm3.71 7.293a1 1 0 0 0 -1.415 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                  stroke-width="0"
                  fill="currentColor"
                ></path>
              </svg>
              BAYAR
            </a>
          </div>
          <a
            class="row col-4 total-biaya"
            data-bs-toggle="offcanvas"
            href="#offcanvasBottom4"
            role="button"
            aria-controls="offcanvasBottom"
          >
            <p class="text-muted">Total Biaya</p>
            <h4><b>Rp 36.012</b></h4>
            <div class="total-biaya-chv">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-chevron-up"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M6 15l6 -6l6 6"></path>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TomSelect from "tom-select";
import shipdeoService from "@/service/shipdeo";
import integrationService from "@/service/integration";
import moment from "moment";
import Vue from "vue";
import SplashScreen from "../components/SplashScreen.vue";
import productService from "@/service/product";

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
      courierList: [],
      productList: [],
    };
  },
  methods: {
    getCourierLogoImage(imgName) {
      return require("@/assets/images/courier/kurir-" + imgName);
    },
    checkCourier(idx) {
      document.querySelector("#courier-" + idx).checked = true;
    },
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
    if (localStorage.getItem("event")) {
      const currentEvent = JSON.parse(this.$func.getFromLocalStorage("event"));
      const courierList = JSON.parse(currentEvent.courier);

      const companyCouriers = (
        await integrationService.getCompanyIntegrations(
          currentEvent.company_id,
          "courier"
        )
      ).data.integrations;

      this.courierList = companyCouriers.filter(
        (courier) => courierList.indexOf(courier.integration_id) >= 0
      );

      const productList = (
        await productService.getBrandProducts(
          currentEvent.brand_id,
          currentEvent.company_id
        )
      ).data.products;

      console.log("productList", productList);

      this.productList = productList.filter((p) => {
        const selectedProducts = JSON.parse(currentEvent.select_product);

        return selectedProducts.indexOf(p.product_id) >= 0;
      });
    } else {
      this.$func.back();
    }

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