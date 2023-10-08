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
              <div class="mb-5" v-html="eventDescription"></div>
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
              v-html="additionalTab.content.replaceAll('\n', '<br />')"
            ></div>
            <div
              class="tab-pane"
              id="tabs-hadiah-5"
              v-html="currentEvent.prize_description.replaceAll('\n', '<br />')"
            ></div>

            <div class="tab-pane page-wrapper" id="tabs-submit-5">
              <form @submit.prevent="submitSubmission" class="page-body">
                <div class="container-xl pb-5">
                  <div class="row row-cards">
                    <div
                      class="col-md-6"
                      v-for="(subForm, k) in subFormList"
                      :key="k"
                    >
                      <div
                        class="form-floating mb-3"
                        v-if="subForm.question_type === 'Short Answer'"
                      >
                        <input
                          type="text"
                          id="floating-text"
                          class="form-control sub-form"
                          autocomplete="off"
                          :data-id="subForm.template_id"
                          :data-question="subForm.question_type"
                        />
                        <label for="floating-text"
                          >{{ subForm.question }}
                          <span
                            style="color: red"
                            v-if="subForm.required === 'Y'"
                            >*</span
                          ></label
                        >
                        <small class="text-secondary">
                          {{ subForm.description }}
                        </small>
                      </div>
                      <div
                        class="mb-3"
                        v-else-if="subForm.question_type === 'Long Answer'"
                      >
                        <label for="floating-textarea" class="d-block"
                          >{{ subForm.question }}
                          <span
                            style="color: red"
                            v-if="subForm.required === 'Y'"
                            >*</span
                          ></label
                        >
                        <textarea
                          id="floating-textarea"
                          class="form-contro sub-form"
                          style="width: 100%"
                          data-bs-toggle="autosize"
                          :data-id="subForm.template_id"
                          :data-question="subForm.question_type"
                        ></textarea>
                        <small class="text-secondary">
                          {{ subForm.description }}
                        </small>
                      </div>
                      <div
                        class="mb-3"
                        v-else-if="subForm.question_type === 'Single Choice'"
                      >
                        <div class="form-label">
                          {{ subForm.question }}
                          <span
                            style="color: red"
                            v-if="subForm.required === 'Y'"
                          >
                            *
                          </span>
                        </div>
                        <div
                          v-for="(option, i) in JSON.parse(subForm.free_data1)"
                          :key="i"
                        >
                          <label
                            class="form-check"
                            v-if="!option.startsWith('__other:')"
                          >
                            <input
                              :name="subForm.template_id"
                              :data-option="i"
                              class="form-check-input sub-form"
                              type="radio"
                              :value="option"
                              :data-id="subForm.template_id"
                              :data-question="subForm.question_type"
                            />
                            <span
                              class="form-check-label"
                              v-text="option"
                            ></span>
                          </label>
                          <label class="form-check" v-else>
                            <input
                              :name="subForm.template_id"
                              :data-option="i"
                              class="form-check-input sub-form"
                              type="radio"
                              :value="option"
                              :data-id="subForm.template_id"
                              :data-question="subForm.question_type"
                            />
                            <input
                              type="text"
                              class="form-control other-option"
                              autocomplete="off"
                              :data-id="subForm.template_id"
                              :placeholder="option.split('__other:')[1]"
                            />
                          </label>
                        </div>
                        <small class="text-secondary">
                          {{ subForm.description }}
                        </small>
                      </div>
                      <div
                        class="mb-3"
                        v-else-if="subForm.question_type === 'Multiple Choice'"
                      >
                        <div class="form-label">
                          {{ subForm.question }}
                          <span
                            style="color: red"
                            v-if="subForm.required === 'Y'"
                          >
                            *
                          </span>
                        </div>
                        <div
                          v-for="(option, i) in JSON.parse(subForm.free_data1)"
                          :key="i"
                        >
                          <label
                            class="form-check"
                            v-if="!option.startsWith('__other:')"
                          >
                            <input
                              :name="subForm.template_id"
                              :data-option="i"
                              class="form-check-input sub-form"
                              type="checkbox"
                              :value="option"
                              :data-id="subForm.template_id"
                              :data-question="subForm.question_type"
                            />
                            <span
                              class="form-check-label"
                              v-text="option"
                            ></span>
                          </label>
                          <label class="form-check" v-else>
                            <input
                              :name="subForm.template_id"
                              :data-option="i"
                              class="form-check-input sub-form"
                              type="checkbox"
                              :value="option"
                              :data-id="subForm.template_id"
                              :data-question="subForm.question_type"
                            />
                            <input
                              type="text"
                              class="form-control other-option"
                              autocomplete="off"
                              :data-id="subForm.template_id"
                              :placeholder="option.split('__other:')[1]"
                            />
                          </label>
                        </div>
                        <small class="text-secondary">
                          {{ subForm.description }}
                        </small>
                      </div>
                      <div
                        class="form-floating mb-3"
                        v-else-if="subForm.question_type === 'Dropdown'"
                      >
                        <select
                          type="text"
                          class="form-select sub-form"
                          :data-id="subForm.template_id"
                          :data-question="subForm.question_type"
                        >
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
                        <label for="floating-textarea">
                          {{ subForm.question }}
                          <span
                            style="color: red"
                            v-if="subForm.required === 'Y'"
                          >
                            *
                          </span>
                        </label>
                        <small class="text-secondary">
                          {{ subForm.description }}
                        </small>
                      </div>
                      <div
                        class="card mb-3 form-floating"
                        v-else-if="subForm.question_type === 'File Upload'"
                      >
                        <div class="card-body">
                          <label :for="`floating-file-upload-${k}`" class="mb-2"
                            >{{ subForm.question }}
                            <span
                              style="color: red"
                              v-if="subForm.required === 'Y'"
                              >*</span
                            ></label
                          >
                          <input
                            type="file"
                            class="sub-form mb-2"
                            :data-id="subForm.template_id"
                            v-for="m in JSON.parse(subForm.validation)
                              .number_of_files"
                            :key="m"
                            :id="`floating-file-upload-${k}-${m}`"
                            :data-question="subForm.question_type"
                            @change="uploadFile($event, k, m)"
                          />
                          <small class="text-secondary d-block mt-2">
                            {{ subForm.description }}
                          </small>
                        </div>
                      </div>
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
                  <div
                    class="row justify-content-center align-items-center"
                    style="background-color: white; height: 70px"
                  >
                    <div class="col-10">
                      <button
                        type="submit"
                        class="btn"
                        data-bs-target="#modal-simple"
                        style="
                          background-color: #1b9dfb;
                          color: white;
                          width: 100%;
                        "
                      >
                        KIRIM
                      </button>
                    </div>
                    <!-- <div class="col-2">
                      <a href="#">
                        <img
                          src="@/assets/images/plus.svg"
                          alt=""
                          style="height: 2.5rem"
                        />
                      </a>
                    </div> -->
                  </div>
                </footer>
              </form>
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
                placeholder="Alamat Email"
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
                placeholder="Alamat Email"
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
import Vue from "vue";

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
    eventDescription() {
      return this.currentEvent.description_event.replaceAll("\n", "<br />");
    },
  },
  methods: {
    uploadFile(evt, subFormIndex, fileIndex) {
      try {
        // const subForm = this.subFormList[idx];
        const file = evt.target.files || evt.dataTransfer.files;

        Vue.nextTick(() => {
          for (const f of file) {
            if (!f.type.startsWith("image/")) {
              evt.target.value = null;

              document.querySelector("#snackbar-popup").innerHTML =
                "File yang dapat diupload hanya berupa gambar";
              document.querySelector("#snackbar-popup").classList.add("show");
              setTimeout(() => {
                document
                  .querySelector("#snackbar-popup")
                  .classList.remove("show");
              }, 3000);
            }

            this.$func.handleImageUpload(
              f,
              `#floating-file-upload-${subFormIndex}-${fileIndex}`
            );
          }
        });
      } catch (err) {
        this.$func.showErrorSnackbar(err.message);
      }
    },
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
          throw new Error("Alamat Email harus diisi");
        }

        if (!this.loginData.password) {
          throw new Error("Password harus diisi");
        }

        if (!this.$func.validEmail(this.loginData.username)) {
          throw new Error("Alamat Email tidak valid");
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

        location.reload();
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

          if (!this.$func.validEmail(this.registration.email)) {
            throw new Error("Alamat Email tidak valid");
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
    async submitSubmission() {
      this.$func.loading();
      try {
        const loginData = this.$func.getLoginData();

        // add participant
        const participantResponse = await accountService.addParticipant({
          customer_id: loginData.customer.customer_id,
          event_id: this.currentEvent.event_id,
        });

        if (
          !this.$func.isSuccessStatus(participantResponse.status) &&
          participantResponse.statusText !== "Anda sudah terdaftar"
        ) {
          throw new Error(participantResponse.statusText);
        }

        let subFormElementList = Array.from(
          document.querySelectorAll(".sub-form")
        )
          .filter((subForm) => {
            if (
              subForm.dataset.question === "Multiple Choice" ||
              subForm.dataset.question === "Single Choice"
            ) {
              return subForm.checked;
            }

            return !!subForm.value;
          })
          .map((subForm) => ({
            template_id: subForm.dataset.id,
            answer: subForm.value,
          }));

        const subFormSet = new Set();
        const subFormMap = new Map();
        subFormElementList.forEach((subForm) => {
          if (subForm.answer.startsWith("__other:")) {
            subForm.answer = document.querySelector(
              `.other-option[data-id=${subForm.template_id}]`
            ).value;
          }

          if (subFormMap.has(subForm.template_id)) {
            subFormMap.set(
              subForm.template_id,
              subFormMap.get(subForm.template_id) + "," + subForm.answer
            );
          } else {
            subFormMap.set(subForm.template_id, subForm.answer);
          }
        });

        for (const [key, value] of subFormMap.entries()) {
          subFormElementList = subFormElementList.map((subForm) => {
            if (subForm.template_id === key) {
              subForm.answer = value;
            }

            return subForm;
          });
        }

        const newSubFormElementList = [];
        subFormElementList.forEach((subForm) => {
          if (!subFormSet.has(subForm.template_id)) {
            subFormSet.add(subForm.template_id);
            newSubFormElementList.push(subForm);
          }
        });

        subFormElementList = newSubFormElementList;

        subFormElementList.forEach((subForm) => {
          const masterForm = this.subFormList.find(
            (availableForm) => availableForm.template_id === subForm.template_id
          );

          if (
            masterForm.question_type === "Time" &&
            subForm.answer.toLowerCase() === "hh:mm"
          ) {
            subForm.delete = true;
          } else if (
            masterForm.question_type === "Date" &&
            subForm.answer.toLowerCase() === "dd/mm/yyyy"
          ) {
            subForm.delete = true;
          }
        });

        subFormElementList = subFormElementList.filter(
          (subForm) => !subForm.delete
        );

        for (const availableForm of this.subFormList) {
          if (
            availableForm.required === "Y" &&
            subFormElementList
              .map((subForm) => subForm.template_id)
              .indexOf(availableForm.template_id) < 0
          ) {
            throw new Error(`Form ${availableForm.template_name} wajib diisi`);
          }
        }

        for (const subForm of subFormElementList) {
          const availableForm = this.subFormList.find(
            (form) => form.template_id === subForm.template_id
          );

          if (availableForm.question_type === "Short Answer") {
            const validation = JSON.parse(availableForm.validation);

            if (validation.number === "Y" && isNaN(subForm.answer)) {
              throw new Error(
                `Form ${availableForm.template_name} harus berupa angka`
              );
            }
          } else if (availableForm.question_type === "File Upload") {
            const base64values = subForm.answer.split(",").map((ans, i) => {
              return document.querySelectorAll(
                `.sub-form[data-id="${subForm.template_id}"]`
              )[i].dataset.value;
            });

            const urlValues = [];
            for (const b64 of base64values) {
              const imgUploadResponse = (
                await this.$func.uploadImageToCloudinary(b64, "submission")
              ).data;

              urlValues.push(imgUploadResponse.secure_url);
            }

            subForm.answer = urlValues.join(",");
          }
        }

        const reqBody = {
          customer_id: loginData.customer.customer_id,
          event_id: this.currentEvent.event_id,
          templates: subFormElementList,
        };

        // console.log("reqBody", reqBody);

        const submissionResponse = await templateService.submitFormRegistration(
          reqBody
        );

        if (!this.$func.isSuccessStatus(submissionResponse.status)) {
          throw new Error(submissionResponse.statusText);
        }

        this.$func.goTo("/registration-form");
      } catch (err) {
        this.$func.showErrorSnackbar(err.message);
      } finally {
        this.$func.finishLoading();
      }
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