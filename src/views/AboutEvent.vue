<template>
  <div class="about-event">
    <splash-screen v-if="isBusyAll" />
    <div class="container">
      <div class="card">
        <div class="card-header">
          <ul
            class="nav nav-tabs card-header-tabs nav-fill"
            data-bs-toggle="tabs"
          >
            <li class="nav-item">
              <a
                href="#tabs-desk-5"
                class="nav-link active"
                data-bs-toggle="tab"
                >Deskripsi</a
              >
            </li>
            <li
              class="nav-item"
              v-for="(additionalTab, i) in freeData3"
              :key="i"
            >
              <a href="#tabs-pert-5" class="nav-link" data-bs-toggle="tab">
                {{ additionalTab.title.trim() }}
              </a>
            </li>
            <li class="nav-item">
              <a href="#tabs-hadiah-5" class="nav-link" data-bs-toggle="tab"
                >Hadiah</a
              >
            </li>
            <li class="nav-item" v-if="currentEvent.submission === 'Y'">
              <a href="#tabs-submit-5" class="nav-link" data-bs-toggle="tab"
                >Submit</a
              >
            </li>
          </ul>
        </div>
        <div class="card-body">
          <div class="tab-content">
            <div class="tab-pane active show" id="tabs-desk-5">
              <div class="mb-5">
                {{ currentEvent.event_description }}
              </div>
              <div style="background-color: #f9fafc">
                <p style="text-align: center">
                  Ada hal lain yang ingin ditanyakan terkait acara yang
                  dilaksanakan ?
                </p>
                <div
                  class="col-6 col-sm-4 col-md-2 col-xl py-3"
                  style="margin: 0 5rem"
                >
                  <a href="#" class="btn btn-outline-primary w-100">
                    Cek Diskusi
                  </a>
                </div>
              </div>
              <br />
              <br />
              <br />
              <br />

              <nav class="navbar bg-body-tertiary sticky-bottom bg-white">
                <div class="d-block" style="width: 100%">
                  <a
                    @click.prevent="handleCtaBtn"
                    class="btn"
                    style="background-color: #1b9dfb; color: white; width: 100%"
                    :class="{
                      disabled: currentEvent.type === 'UPCOMING',
                    }"
                  >
                    {{ ctaText }}
                  </a>
                </div>
              </nav>
            </div>

            <div
              class="tab-pane"
              id="tabs-pert-5"
              v-for="(additionalTab, i) in freeData3"
              :key="i"
            >
              {{ additionalTab.content }}
            </div>
            <div class="tab-pane" id="tabs-hadiah-5">
              {{ currentEvent.prize_description }}
            </div>

            <div class="tab-pane page-wrapper" id="tabs-submit-5">
              <div class="page-body">
                <div class="container-xl">
                  <div class="row row-cards">
                    <div
                      class="col-md-6"
                      v-for="(subForm, i) in subFormList"
                      :key="i"
                    >
                      <div class="card">
                        <div class="card-body">
                          <h3 class="card-title">
                            {{ subForm.question }}
                          </h3>
                          <form
                            class="dropzone"
                            id="dropzone-default"
                            action="./"
                            autocomplete="off"
                            novalidate
                            v-if="subForm.question_type === 'File Upload'"
                          >
                            <div class="fallback">
                              <input name="file" type="file" />
                            </div>
                          </form>
                          <input
                            :type="
                              JSON.parse(subForm.validation).number === 'Y'
                                ? 'number'
                                : 'text'
                            "
                            class="form-control"
                            v-else-if="subForm.question_type === 'Short Answer'"
                          />
                          <textarea
                            class="form-control"
                            data-bs-toggle="autosize"
                            v-else-if="subForm.question_type === 'textarea'"
                          ></textarea>
                          <div
                            v-else-if="
                              subForm.question_type === 'Single Choice'
                            "
                          >
                            <div
                              v-for="(option, i) in JSON.parse(
                                subForm.free_data1
                              )"
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
                                <span
                                  class="form-check-label"
                                  v-text="option"
                                ></span>
                              </label>
                            </div>
                          </div>
                          <div
                            v-else-if="
                              subForm.question_type === 'Multiple Choice'
                            "
                          >
                            <div
                              v-for="(option, i) in JSON.parse(
                                subForm.free_data1
                              )"
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
                                <span
                                  class="form-check-label"
                                  v-text="option"
                                ></span>
                              </label>
                            </div>
                          </div>
                          <div v-else-if="subForm.question_type === 'Dropdown'">
                            <select type="text" class="form-select">
                              <option
                                v-for="(option, i) in JSON.parse(
                                  subForm.free_data1
                                )"
                                :key="i"
                                :data-option="i"
                              >
                                {{ option }}
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <p class="text-muted">
                        {{ subForm.description }}
                      </p>
                      <hr v-if="i < subFormList.length - 1" />
                    </div>
                    <!-- <p class="text-muted">
                      Video harus memperlihatkan proses peserta ketika mewarnai
                      dengan durasi tidak lebih dari 90 menit
                    </p>
                    <hr />
                    <div class="col-md-6">
                      <div class="card">
                        <div class="card-body">
                          <h3 class="card-title">Hasil Mewarnai</h3>
                          <form
                            class="dropzone"
                            id="dropzone-multiple"
                            action="./"
                            autocomplete="off"
                            novalidate
                          >
                            <div class="fallback">
                              <input name="file" type="file" multiple />
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <p class="text-muted">
                      Pastikan pencahayaan baik <br />Foto Kertas mewarnai
                      secara keseluruhan
                    </p> -->
                  </div>
                </div>
                <footer class="fixed-bottom">
                  <div class="row" style="margin: 7rem 0 0 0">
                    <div class="col-10">
                      <a
                        @click="$func.goTo('/product-checkout')"
                        class="btn"
                        data-bs-target="#modal-simple"
                        style="
                          background-color: #1b9dfb;
                          color: white;
                          width: 100%;
                        "
                      >
                        KIRIM
                      </a>
                    </div>
                    <div class="col-2">
                      <a href="#">
                        <img
                          src="@/assets/images/plus.svg"
                          alt=""
                          style="height: 2.5rem"
                        />
                      </a>
                    </div>
                  </div>
                </footer>
              </div>
            </div>
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
// import Dropzone from "dropzone";
import SplashScreen from "../components/SplashScreen.vue";
import templateService from "@/service/template";
import accountService from "@/service/account";
import { Modal } from "bootstrap";

export default {
  name: "AboutEvent",
  components: { SplashScreen },
  data() {
    return {
      isBusyAll: false,
      currentEvent: {},
      subFormList: [],
      regFormList: [],
      isRegistration: true,
      confirmRegister: false,
      registration: {
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmationPassword: "",
      },
      participantStatus: {
        loggedIn: false,
        submittedRegistrationForm: false,
      },
      loginData: {
        username: "",
        password: "",
      },
    };
  },
  computed: {
    freeData3() {
      try {
        return JSON.parse(this.currentEvent.free_data3);
      } catch {
        return {};
      }
    },
    ctaText() {
      if (this.currentEvent.type === "UPCOMING") {
        return "AKAN DATANG";
      }

      if (this.participantStatus.submittedRegistrationForm) {
        return "CHECKOUT PRODUK";
      }

      if (this.participantStatus.loggedIn) {
        return "LENGKAPI FORM REGISTRASI";
      }

      return "REGISTRASI/MASUK";
    },
    ctaRedirectPath() {
      if (this.participantStatus.submittedRegistrationForm) {
        return "/product-checkout";
      }

      if (this.participantStatus.loggedIn) {
        return "/registration-form";
      }

      return "";
    },
  },
  methods: {
    handleCtaBtn() {
      if (
        !this.participantStatus.loggedIn &&
        !this.participantStatus.submittedRegistrationForm
      ) {
        const modal = new Modal("#modal-registration");
        modal.show();
      } else if (
        this.participantStatus.loggedIn &&
        !this.participantStatus.submittedRegistrationForm
      ) {
        this.$func.saveToLocalStorage(
          "registration-form-list",
          JSON.stringify(this.regFormList)
        );
      }

      this.$func.goTo(this.ctaRedirectPath);
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
        this.$func.saveToLocalStorage(
          "event",
          JSON.stringify(this.currentEvent)
        );
        this.$func.goTo("/registration-form");

        location.reload()
      } catch (err) {
        this.$func.showErrorSnackbar(err.message);
      } finally {
        this.$func.finishLoading();
      }
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
    async checkParticipantStatus() {
      const loginData = this.$func.getLoginData();

      if (loginData) {
        this.participantStatus.loggedIn = true;

        if (this.currentEvent.form_registration === "Y") {
          try {
            const reqBody = {
              customer_id: loginData.customer.customer_id,
              event_id: this.currentEvent.event_id,
            };

            const inquiryResponse =
              await templateService.checkRegistrationStatus(reqBody);

            if (!this.$func.isSuccessStatus(inquiryResponse.status)) {
              throw new Error(inquiryResponse.statusText);
            }

            if (inquiryResponse.data.status === "Y") {
              this.participantStatus.submittedRegistrationForm = true;

              loginData.submittedRegistrationForm = true;
              this.$func.saveToLocalStorage(
                "login-data",
                JSON.stringify(loginData)
              );
            }
          } catch (err) {
            this.$func.showErrorSnackbar(err.message);
          }
        } else {
          this.participantStatus.submittedRegistrationForm = true;
          loginData.submittedRegistrationForm = true;
          this.$func.saveToLocalStorage(
            "login-data",
            JSON.stringify(loginData)
          );
        }
      }
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
    prepareUI() {
      // new Dropzone("#dropzone-default");
      this.$refs.modalRegistration.addEventListener("hidden.bs.modal", () => {
        this.confirmRegister = false;
        this.isRegistration = true;
        this.$refs.registrationForm.reset();
      });
    },
  },
  async mounted() {
    if (localStorage.getItem("event")) {
      this.isBusyAll = true;
      this.currentEvent = JSON.parse(this.$func.getFromLocalStorage("event"));
      await this.checkParticipantStatus();
      await this.getCompanyRegistrationForms();

      if (localStorage.getItem("submission-form-list")) {
        this.subFormList = JSON.parse(
          this.$func.getFromLocalStorage("submission-form-list")
        );
      }

      this.prepareUI();
      this.isBusyAll = false;
      // this.prepareUI();
    } else {
      this.$func.back();
    }
  },
};
</script>