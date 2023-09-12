<template>
  <form @submit.prevent="submit" class="product-checkout">
    <splash-screen v-if="isBusyAll" />
    <div class="container" style="background-color: white">
      <div class="">
        <div
          style="background-color: #c6e7ff; margin: 5px 0 0 0"
          class="d-flex justify-content-between align-items-center p-2"
        >
          <p class="text-muted m-0">Lengkapi form isian untuk melanjutkan</p>
          <img
            src="@/assets/images/chevron-label.svg"
            alt=""
            style="height: 17px"
            class="d-inline-block"
          />
        </div>

        <div
          style="background-color: #c6e7ff; margin: 5px 0 0 0"
          class="d-flex justify-content-between align-items-center p-2"
        >
          <p class="text-muted m-0">
            Verifikasi alamat email untuk melanjutkan
          </p>
          <img
            src="@/assets/images/chevron-label.svg"
            alt=""
            style="height: 17px"
          />
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
          class="d-flex justify-content-between align-items-center p-2"
        >
          <p class="text-muted m-0">Lengkapi data alamat pengirim</p>
          <img
            src="@/assets/images/chevron-label.svg"
            alt=""
            style="height: 17px"
          />
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
                <b class="text-container">
                  {{ shippingRecipientData.address || "-" }}
                </b>
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
              :class="{
                disabled: paymentStep < 2,
              }"
              style="text-decoration: none; color: black"
              data-bs-toggle="offcanvas"
              href="#offcanvasBottom1"
              role="button"
            >
              <div class="col text-start">
                <svg
                  style="position: relative; top: 10px; right: 4px"
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-package-import"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  :stroke="paymentStep < 2 ? '#AAAAAA' : '#1B9DFB'"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 21l-8 -4.5v-9l8 -4.5l8 4.5v4.5" />
                  <path d="M12 12l8 -4.5" />
                  <path d="M12 12v9" />
                  <path d="M12 12l-8 -4.5" />
                  <path d="M22 18h-7" />
                  <path d="M18 15l-3 3l3 3" />
                </svg>
              </div>
              <div
                class="col"
                :class="{
                  'text-muted': paymentStep < 2,
                }"
                style="position: relative; right: 1rem; top: 10px"
              >
                Kurir/ Ekspedisi<br />
                <b class="text-container">
                  {{ courierService.split("|")[2] || "-" }}
                </b>
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
              :class="{
                disabled: paymentStep < 2,
              }"
            >
              <div class="col text-start">
                <svg
                  style="position: relative; top: 10px; right: 3px"
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-building-bank"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  :stroke="paymentStep < 3 ? '#AAAAAA' : '#1B9DFB'"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 21l18 0" />
                  <path d="M3 10l18 0" />
                  <path d="M5 6l7 -3l7 3" />
                  <path d="M4 10l0 11" />
                  <path d="M20 10l0 11" />
                  <path d="M8 14l0 3" />
                  <path d="M12 14l0 3" />
                  <path d="M16 14l0 3" />
                </svg>
              </div>
              <div
                class="col"
                style="position: relative; right: 1rem; top: 10px"
                :class="{
                  'text-muted': paymentStep < 3,
                }"
              >
                Metode Pembayaran<br />
                <b class="text-container">Transfer</b>
              </div>
              <div class="col"></div>
            </a>
          </div>
        </div>

        <div
          class="offcanvas offcanvas-bottom container"
          tabindex="-1"
          id="offcanvasBottom"
          style="height: 70vh"
          aria-labelledby="offcanvasBottomLabel"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
        >
          <div class="card-header">
            <h2 style="margin-top: 10px">Data Penerima</h2>
            <br />
          </div>
          <div class="card-body pb-5" style="margin: 0 2rem; overflow-y: auto">
            <div class="mb-3 row">
              <div class="col-6">
                <label class="form-label">Nama</label>
                <input
                  style="width: 9rem"
                  type="text"
                  class="form-control"
                  name="example-text-input"
                  placeholder="Nama"
                  autocomplete="off"
                  v-model="shippingRecipientData.name"
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
                  v-model="shippingRecipientData.phone"
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
                v-model="shippingRecipientData.postalCode"
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
                v-model="shippingRecipientData.address"
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
                v-model="shippingRecipientData.note"
              />
            </div>
          </div>

          <div class="card bayar-btn-container fixed-bottom px-5 py-2">
            <div class="row justify-content-end">
              <div class="col-6">
                <button
                  @click="saveRecipientData"
                  type="button"
                  class="btn"
                  data-bs-dismiss="offcanvas"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-simple"
                  style="background-color: #1b9dfb; color: white; width: 100%"
                >
                  Simpan
                </button>
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
          data-bs-backdrop="static"
          data-bs-keyboard="false"
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
                <ul
                  :id="`collapse-${i + 1}`"
                  class="accordion-collapse collapse p-0"
                  data-bs-parent="#accordion-courier"
                  style=""
                >
                  <li
                    v-for="(service, j) in courier.serviceList"
                    :key="j"
                    style="list-style-type: none"
                    class="d-flex justify-content-between align-items-center ps-5 pe-3 mb-2"
                    @click="
                      checkCourierService(service.courierCode, service.service)
                    "
                  >
                    <div class="d-flex align-items-center">
                      <input
                        type="radio"
                        name="courier-service"
                        class="me-2"
                        :id="`${service.courierCode}__${service.service}`"
                        :data-service="service.service"
                        :data-courier="service.courierCode"
                        :data-display="`${courier.parameter_name} (${service.name})`"
                      />
                      <div>
                        <p class="m-0">
                          {{ service.name }}
                        </p>
                        <p class="m-0 text-muted" style="font-size: 0.75rem">
                          {{ service.estimation || "" }}
                        </p>
                      </div>
                    </div>
                    <p class="m-0 text-end">
                      {{ $func.formatAmount(service.price) }}
                    </p>
                  </li>
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
                  <button
                    @click="saveCourierData"
                    type="button"
                    data-bs-dismiss="offcanvas"
                    class="btn"
                    data-bs-toggle="modal"
                    data-bs-target="#modal-simple"
                    style="background-color: #1b9dfb; color: white; width: 100%"
                  >
                    Simpan
                  </button>
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
          data-bs-backdrop="static"
          data-bs-keyboard="false"
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
                        name="payment-method"
                        value="qris"
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
                    <label
                      class="form-check"
                      v-for="(bank, i) in bankList"
                      :key="i"
                    >
                      <input
                        class="form-check-input"
                        type="radio"
                        name="payment-method"
                        :data-id="bank.integration_id"
                        :value="bank.integration_id"
                      />
                      <span class="form-check-label">
                        <img
                          :src="getBankLogo(bank.parameter_icon)"
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
                @click="saveMethodData"
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
                  {{ product.title
                  }}{{ product.description ? `, ${product.description}` : "" }}
                </p>
                <div class="col-8 d-flex align-items-center">
                  <h4 style="font-size: 12px; font-weight: bold" class="m-0">
                    Rp {{ $func.formatAmount(product.price) }}
                    <span style="color: red" v-if="product.optional !== 'N'"
                      >*</span
                    >
                  </h4>
                </div>
                <div
                  class="col-4 align-items-center d-flex justify-content-between"
                >
                  <img
                    style="height: 13px"
                    class="d-inline-block"
                    src="@/assets/images/circle-minus.svg"
                    @click="decreaseQty(product.product_id)"
                  />
                  <span class="d-inline-block">
                    {{ product.qty }}
                  </span>
                  <img
                    style="height: 13px"
                    class="d-inline-block"
                    src="@/assets/images/plus.svg"
                    @click="increaseQty(product.product_id)"
                  />
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
            <button
              type="submit"
              class="btn btn-outline-primary w-100"
              data-bs-toggle="modal"
              data-bs-target="#modal-simple"
              style="background-color: #1b9dfb; color: white; width: 100%"
              :disabled="paymentStep < 4"
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
            </button>
          </div>
          <a
            class="row col-4 total-biaya"
            data-bs-toggle="offcanvas"
            href="#offcanvasBottom4"
            role="button"
            aria-controls="offcanvasBottom"
          >
            <p class="text-muted">Total Biaya</p>
            <h4>
              <b>Rp {{ total }}</b>
            </h4>
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
  </form>
</template>

<script>
import TomSelect from "tom-select";
import shipdeoService from "@/service/shipdeo";
import integrationService from "@/service/integration";
import addressService from "@/service/address";
import moment from "moment";
import Vue from "vue";
import SplashScreen from "../components/SplashScreen.vue";
import productService from "@/service/product";

export default {
  name: "ProductCheckout",
  components: { SplashScreen },
  data() {
    return {
      shippingWarehouseData: {},
      shippingRecipientData: {
        name: "",
        phone: "",
        city: "",
        postalCode: "",
        address: "",
        note: "",
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
      bankList: [],
      paymentStep: 1,
      courierService: "",
      method: "",
      selectedBank: {},
    };
  },
  computed: {
    total() {
      let result = 0;

      this.productList.forEach((p) => {
        result += p.qty * p.price;
      });

      return this.$func.formatAmount(result);
    },
  },
  methods: {
    getCourierLogoImage(imgName) {
      return require("@/assets/images/courier/kurir-" + imgName);
    },
    checkCourier(idx) {
      document.querySelector("#courier-" + idx).checked = true;
    },
    checkCourierService(courierCode, service) {
      document.querySelector(`#${courierCode}__${service}`).checked = true;
    },
    getBankLogo(logo) {
      return require("@/assets/images/" + logo);
    },
    decreaseQty(product_id) {
      this.productList = this.productList.map((p) => {
        if (p.product_id === product_id) {
          if (p.qty > 0) {
            p.qty = p.qty - 1;
          }
        }

        return p;
      });
    },
    increaseQty(product_id) {
      this.productList = this.productList.map((p) => {
        if (p.product_id === product_id) {
          p.qty = p.qty + 1;
        }

        return p;
      });
    },
    async saveRecipientData() {
      this.$func.loading();
      try {
        const selectedDestinationCity = document.querySelector(
          "#selected-destination-city"
        );
        const selectedDestinationSubdistrict = document.querySelector(
          "#selected-destination-subdistrict"
        );
        const warehouseProperties = JSON.parse(
          this.shippingWarehouseData.free_data1
        );

        const reqBody = {
          couriers: ["sicepat", "anteraja", "ninja", "jnt", "jne", "sap", "sc"],
          items: [
            {
              name: "",
              description: "",
              weight: "",
              weight_uom: "gr",
              qty: "",
              value: "",
              width: "",
              height: "",
              length: "",
              dimension_uom: "cm",
              item_type: "on",
            },
          ],
          origin_city_code: warehouseProperties.city_code,
          origin_city_name: warehouseProperties.city_name,
          origin_postal_code: warehouseProperties.postal_code,
          origin_subdistrict_code: warehouseProperties.subdistrict_code,
          origin_subdistrict_name: warehouseProperties.subdistrict_name,
          destination_city_code: this.shippingRecipientData.city,
          destination_city_name: selectedDestinationCity.dataset.cityName,
          destination_postal_code: selectedDestinationCity.dataset.postalCode,
          destination_subdistrict_code:
            selectedDestinationSubdistrict.dataset.subdistrictCode,
          destination_subdistrict_name:
            selectedDestinationSubdistrict.dataset.subdistrictName,
        };

        const pricingList = await shipdeoService.getPricingList(
          this.shipdeo_access_token,
          reqBody
        );

        if (!this.$func.isSuccessStatus(pricingList.status)) {
          throw new Error(pricingList.statusText);
        }

        this.courierList = this.courierList.map((courier) => {
          const currentServices = JSON.parse(courier.free_data1);
          courier.serviceList = pricingList.data.data
            .filter((pl) =>
              currentServices.find((cs) => cs.code === pl.service)
            )
            .map((pl) => {
              pl.name = currentServices.find(
                (cs) => cs.code === pl.service
              ).name;

              return pl;
            });

          return courier;
        });

        this.paymentStep++;
      } catch (err) {
        console.error(err.message);
      } finally {
        this.$func.finishLoading();
      }
    },
    saveCourierData() {
      let selectedService = null;
      document
        .querySelectorAll('input[name="courier-service"]')
        .forEach((input) => {
          if (input.checked) {
            selectedService = input;
          }
        });

      this.courierService = `${selectedService.dataset.courier}|${selectedService.dataset.service}|${selectedService.dataset.display}`;
      this.paymentStep++;
    },
    saveMethodData() {
      try {
        const selectedMethod = Array.from(
          document.getElementsByName("payment-method")
        ).find((method) => method.checked);

        if (!selectedMethod) {
          throw new Error("Mohon pilih salah satu metode pembayaran");
        }

        if (selectedMethod.value === "qris") {
          this.method = "qris";
        } else {
          this.method = "transfer";
          this.selectedBank = this.bankList.find(
            (bank) => bank.integration_id === selectedMethod.dataset.id
          );
        }

        this.paymentStep++;
      } catch (err) {
        this.$func.showErrorSnackbar(err.message);
      }
    },
    async getShipdeoAccess() {
      try {
        const tokenResponse = await shipdeoService.getAccessToken();

        if (!this.$func.isSuccessStatus(tokenResponse.status)) {
          throw new Error(tokenResponse.statusText);
        }

        this.shipdeo_access_token = tokenResponse.data.accessToken;
        this.shipdeo_access_token_expires_at =
          tokenResponse.data.accessTokenExpiresAt;
        localStorage.setItem(
          "shipdeo_access_token",
          tokenResponse.data.accessToken
        );
        localStorage.setItem(
          "shipdeo_access_token_expires_at",
          tokenResponse.data.accessTokenExpiresAt
        );
      } catch (err) {
        this.$func.showErrorSnackbar(err.message);
      }
    },
    async createOrder() {
      this.$func.loading();
      try {
        const selectedDestinationCity = document.querySelector(
          "#selected-destination-city"
        );
        const selectedDestinationSubdistrict = document.querySelector(
          "#selected-destination-subdistrict"
        );
        const warehouseProperties = JSON.parse(
          this.shippingWarehouseData.free_data1
        );
        const loginData = this.$func.getLoginData();
        const currentEvent = JSON.parse(
          this.$func.getFromLocalStorage("event")
        );

        const reqBody = {
          courier: this.courierService.split("|")[0],
          courier_service: this.courierService.split("|")[1],
          order_number: this.$func.generateRandomHexString(),
          is_cod: false,
          delivery_type: "pickup",
          delivery_time: moment().format("DD/MM/yyyy hh:mm:ss A Z"),
          is_send_company: true,
          origin_lat: null,
          origin_long: null,
          origin_subdistrict_code: warehouseProperties.subdistrict_code,
          origin_subdistrict_name: warehouseProperties.subdistrict_name,
          origin_city_code: warehouseProperties.city_code,
          origin_city_name: warehouseProperties.city_name,
          origin_province_code: warehouseProperties.province_code,
          origin_province_name: warehouseProperties.province_name,
          origin_contact_name: this.shippingWarehouseData.from,
          origin_contact_phone: this.shippingWarehouseData.phone_number,
          origin_contact_address: this.shippingWarehouseData.street,
          origin_contact_email: "",
          origin_note: this.shippingWarehouseData.notes,
          origin_postal_code: warehouseProperties.postal_code,
          destination_lat: null,
          destination_long: null,
          destination_subdistrict_code:
            selectedDestinationSubdistrict.dataset.subdistrictCode,
          destination_subdistrict_name:
            selectedDestinationSubdistrict.dataset.subdistrictName,
          destination_city_code: this.shippingRecipientData.city,
          destination_city_name: selectedDestinationCity.dataset.cityName,
          destination_province_code:
            selectedDestinationCity.dataset.provinceCode,
          destination_province_name:
            selectedDestinationCity.dataset.provinceName,
          destination_postal_code: this.shippingRecipientData.postalCode,
          destination_contact_name: this.shippingRecipientData.name,
          destination_contact_phone: this.shippingRecipientData.phone,
          destination_contact_address: this.shippingRecipientData.address,
          destination_contact_email: loginData.customer.email,
          destination_note: this.shippingRecipientData.note,
          delivery_note: "",
          items: [],
          transaction: {
            method_payment: this.method,
            unique_code: 1,
            customer_id: loginData.customer.customer_id,
            event_id: currentEvent.event_id,
            subtotal: 45012,
            shipping_charge: 0,
            fee_insurance: 0,
            is_insuranced: false,
            discount: 0,
            total_value: 45012,
            total_cod: 0,
            weight: 1,
            width: 10,
            height: 10,
            length: 10,
            coolie: 10,
            package_category: "NORMAL",
            package_content: "Bluben supreme",
          },
        };

        reqBody.items = this.productList.map((p) => {
          const result = {
            product_id: p.product_id,
            name: p.title,
            description: p.description,
            weight: Number(p.weight) / 1000,
            weight_uom: "kg",
            qty: Number(p.qty),
            value: Number(p.price),
            width: Number(p.volume_width),
            height: Number(p.volume_height),
            length: Number(p.volume_length),
            dimension_uom: "cm",
            total_value: Number(p.qty) * Number(p.price),
          };

          return result;
        });

        const postResponse = await shipdeoService.createOrder(reqBody);

        if (!this.$func.isSuccessStatus(postResponse.status)) {
          throw new Error(postResponse.statusText);
        }

        this.createInvoice();
      } catch (err) {
        this.$func.showErrorSnackbar(err.message);
      } finally {
        this.$func.finishLoading();
      }
    },
    async createInvoice() {
      this.$func.loading();
      try {
        const loginData = this.$func.getLoginData();
        const currentEvent = JSON.parse(
          this.$func.getFromLocalStorage("event")
        );

        // add participant
        const inquiryResponse = await productService.createUniqueCode();

        if (!this.$func.isSuccessStatus(inquiryResponse.status)) {
          throw new Error(inquiryResponse.statusText);
        }

        const reqBody = {
          customer_id: loginData.customer.customer_id,
          event_id: currentEvent.event_id,
          address: this.shippingRecipientData.address,
          courier: this.courierService.split("|")[0],
          unique_code: inquiryResponse.data.parameters[0].parameter_id,
          method_payment: this.method,
          destination_account_number: "",
          destination_account_name: "",
          destination_bank_name: "",
          destination_bank_code: "",
          transaction: [],
        };

        if (this.method === "transfer") {
          reqBody.destination_account_number = JSON.parse(
            this.selectedBank.free_data2
          )[0].accountNumber;
          reqBody.destination_account_name = JSON.parse(
            this.selectedBank.free_data2
          )[0].accountName;
          reqBody.destination_bank_name = this.selectedBank.parameter_name;
          reqBody.destination_bank_code = "008";
        }

        reqBody.transaction = this.productList.map((p) => {
          const result = {
            product_id: p.product_id,
            price: Number(p.price),
            total_product: Number(p.qty),
          };

          return result;
        });

        const postResponse = await productService.createInvoice(reqBody);

        if (!this.$func.isSuccessStatus(postResponse.status)) {
          throw new Error(postResponse.statusText);
        }

        this.$func.saveToLocalStorage(
          "invoice",
          JSON.stringify(postResponse.data)
        );
        this.$func.goTo("/invoice");
      } catch (err) {
        this.$func.showErrorSnackbar(err.message);
      } finally {
        this.$func.finishLoading();
      }
    },
    submit() {
      this.createOrder();
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
            return `<span
              id="selected-destination-city"
              data-city-name="${escape(data.city_name)}"
              data-province-name="${escape(data.province.province_name)}"
              data-province-code="${escape(
                data.province.province_code
              )}">${escape(data.city_name)}</span>`;
          },
        },
      });

      this.dropdownForm.selectSubdistrict = new TomSelect(
        "#select-subdistrict",
        {
          valueField: "village_code",
          searchField: [
            "village_name",
            "subdistrict_name",
            "city_name",
            "province_name",
            "postal_code",
          ],
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
              return `<div class="py-2 d-flex justify-content-between">
                      <div class="text-black">
                        ${escape(data.village_name)}, ${escape(
                data.subdistrict_name
              )}<br>
                        <span class="text-muted">${escape(
                          data.city_name
                        )} ${escape(data.province_name)}</span>
                      </div>
                      <div>${escape(data.postal_code)}</div>
                    </div>`;
            },
            item: (data, escape) => {
              return `<div id="selected-destination-subdistrict"
                data-subdistrict-code="${escape(data.subdistrict_code)}"
                data-subdistrict-name="${escape(data.subdistrict_name)}"
                data-postal-code="${escape(data.postal_code)}">${escape(
                data.village_name
              )}, ${escape(data.subdistrict_name)}, ${escape(
                data.city_name
              )}, ${escape(data.province_name)}, ${escape(
                data.postal_code
              )}</div>`;
            },
          },
          // render: {
          //   option: function (data, escape) {
          //     return `<div class="py-2">
          //             <div>
          //               ${escape(data.village_name)}, ${escape(
          //       data.subdistrict_name
          //     )}, ${escape(data.postal_code)}<br />
          //               <span class="text-muted small">${escape(
          //                 data.city_name
          //               )}, ${data.province_name}</span>
          //             </div>
          //           </div>`;
          //   },
          //   item: (data, escape) => {
          //     return `<span
          //       id="selected-destination-subdistrict"
          //       data-subdistrict-code="${escape(data.subdistrict_code)}"
          //       data-subdistrict-name="${escape(data.subdistrict_name)}"
          //       data-postal-code="${escape(data.postal_code)}">${escape(
          //       data.village_name
          //     )}, ${escape(data.subdistrict_name)}, ${escape(
          //       data.postal_code
          //     )}</span>`;
          //   },
          // },
        }
      );
      this.dropdownForm.selectSubdistrict.disable();

      const loginData = this.$func.getLoginData();

      if (!!loginData) {
        this.shippingRecipientData.name = loginData.customer.name_customer;
        this.shippingRecipientData.phone = loginData.customer.phone_number;
      }
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
              valueField: "village_code",
              searchField: [
                "village_name",
                "subdistrict_name",
                "city_name",
                "province_name",
                "postal_code",
              ],
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
                  )}, ${escape(data.postal_code)}<br />
                        <span class="text-muted small">${escape(
                          data.city_name
                        )}, ${data.province_name}</span>
                      </div>
                    </div>`;
                },
                item: (data, escape) => {
                  return `<span
                id="selected-destination-subdistrict"
                data-subdistrict-code="${escape(data.subdistrict_code)}"
                data-subdistrict-name="${escape(data.subdistrict_name)}"
                data-postal-code="${escape(data.postal_code)}">${escape(
                    data.village_name
                  )}, ${escape(data.subdistrict_name)}, ${escape(
                    data.postal_code
                  )}</span>`;
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
      this.isBusyAll = true;
      const currentEvent = JSON.parse(this.$func.getFromLocalStorage("event"));
      console.log("currentEvent", currentEvent);
      const courierList = JSON.parse(currentEvent.courier);
      const bankList = currentEvent.bank_account.split(",");

      const companyCouriers = (
        await integrationService.getCompanyIntegrations(
          currentEvent.company_id,
          "courier"
        )
      ).data.integrations;

      this.courierList = companyCouriers.filter(
        (courier) => courierList.indexOf(courier.integration_id) >= 0
      );

      const companyBanks = (
        await integrationService.getCompanyIntegrations(
          currentEvent.company_id,
          "bank"
        )
      ).data.integrations;

      this.bankList = companyBanks.filter(
        (bank) => bankList.indexOf(bank.integration_id) >= 0
      );

      const productList = (
        await productService.getBrandProducts(
          currentEvent.brand_id,
          currentEvent.company_id
        )
      ).data.products;

      this.productList = productList
        .filter((p) => {
          const selectedProducts = JSON.parse(currentEvent.select_product);

          return selectedProducts.indexOf(p.product_id) >= 0;
        })
        .map((p) => {
          p.qty = 0;

          return p;
        });

      const addressResponse = (
        await addressService.getCompanyShippingAddress(currentEvent.company_id)
      ).data.shippingAddress;

      this.shippingWarehouseData = addressResponse.find(
        (address) => address.shipping_id === currentEvent.shipping_address
      );

      this.isBusyAll = false;
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

<style lang="scss" scoped>
.text-container {
  display: inline-block;
  width: 25vw;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>