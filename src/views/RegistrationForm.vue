<template>
  <div class="registration-form">
    <splash-screen v-if="isBusyAll" />
    <div style="background-color: #c6e7ff; padding: 3px 0">
      <p class="text-muted" style="margin: 6px 10px; font-size: 12px">
        <span style="margin: 0 6px 0 0"
          ><img
            src="@/assets/images/info-label.svg"
            alt=""
            style="height: 17px"
          />
        </span>
        Lengkapi form isian untuk melanjutkan
      </p>
    </div>
    <div class="container" style="background-color: white">
      <div class="row">
        <div class="col-lg-6" style="margin-top: 5px">
          <form
            @submit.prevent="submit"
            class="card-body"
            style="overflow-y: auto; max-height: 77vh"
          >
            <div v-for="(regForm, k) in regFormList" :key="k">
              <div
                class="form-floating mb-3"
                v-if="regForm.question_type === 'Short Answer'"
              >
                <input
                  type="text"
                  id="floating-text"
                  class="form-control reg-form"
                  autocomplete="off"
                  :data-id="regForm.template_id"
                  :data-question="regForm.question_type"
                />
                <label for="floating-text"
                  >{{ regForm.question }}
                  <span style="color: red" v-if="regForm.required === 'Y'"
                    >*</span
                  ></label
                >
                <small class="text-secondary">
                  {{ regForm.description }}
                </small>
              </div>
              <div
                class="mb-3"
                v-else-if="regForm.question_type === 'Long Answer'"
              >
                <label for="floating-textarea" class="d-block"
                  >{{ regForm.question }}
                  <span style="color: red" v-if="regForm.required === 'Y'"
                    >*</span
                  ></label
                >
                <textarea
                  id="floating-textarea"
                  class="form-contro reg-form"
                  style="width: 100%"
                  data-bs-toggle="autosize"
                  :data-id="regForm.template_id"
                  :data-question="regForm.question_type"
                ></textarea>
                <small class="text-secondary">
                  {{ regForm.description }}
                </small>
              </div>
              <div
                class="mb-3"
                v-else-if="regForm.question_type === 'Single Choice'"
              >
                <div class="form-label">
                  {{ regForm.question }}
                  <span style="color: red" v-if="regForm.required === 'Y'">
                    *
                  </span>
                </div>
                <div
                  v-for="(option, i) in JSON.parse(regForm.free_data1)"
                  :key="i"
                >
                  <label
                    class="form-check"
                    v-if="!option.startsWith('__other:')"
                  >
                    <input
                      :name="regForm.template_id"
                      :data-option="i"
                      class="form-check-input reg-form"
                      type="radio"
                      :value="option"
                      :data-id="regForm.template_id"
                      :data-question="regForm.question_type"
                    />
                    <span class="form-check-label" v-text="option"></span>
                  </label>
                  <label class="form-check" v-else>
                    <input
                      name="radio"
                      :data-option="i"
                      class="form-check-input reg-form"
                      type="radio"
                      :value="option"
                      :data-id="regForm.template_id"
                      :data-question="regForm.question_type"
                    />
                    <input
                      type="text"
                      class="form-control other-option"
                      autocomplete="off"
                      :data-id="regForm.template_id"
                    />
                  </label>
                </div>
                <small class="text-secondary">
                  {{ regForm.description }}
                </small>
              </div>
              <div
                class="mb-3"
                v-else-if="regForm.question_type === 'Multiple Choice'"
              >
                <div class="form-label">
                  {{ regForm.question }}
                  <span style="color: red" v-if="regForm.required === 'Y'">
                    *
                  </span>
                </div>
                <div
                  v-for="(option, i) in JSON.parse(regForm.free_data1)"
                  :key="i"
                >
                  <label
                    class="form-check"
                    v-if="!option.startsWith('__other:')"
                  >
                    <input
                      name="checkbox"
                      :data-option="i"
                      class="form-check-input reg-form"
                      type="checkbox"
                      :value="option"
                      :data-id="regForm.template_id"
                      :data-question="regForm.question_type"
                    />
                    <span class="form-check-label" v-text="option"></span>
                  </label>
                  <label class="form-check" v-else>
                    <input
                      name="checkbox"
                      :data-option="i"
                      class="form-check-input reg-form"
                      type="checkbox"
                      :value="option"
                      :data-id="regForm.template_id"
                      :data-question="regForm.question_type"
                    />
                    <input
                      type="text"
                      class="form-control other-option"
                      autocomplete="off"
                      :data-id="regForm.template_id"
                    />
                  </label>
                </div>
                <small class="text-secondary">
                  {{ regForm.description }}
                </small>
              </div>
              <div
                class="form-floating mb-3"
                v-else-if="regForm.question_type === 'Dropdown'"
              >
                <select
                  type="text"
                  class="form-select reg-form"
                  :data-id="regForm.template_id"
                  :data-question="regForm.question_type"
                >
                  <option
                    v-for="(option, i) in JSON.parse(regForm.free_data1)"
                    :key="i"
                    :data-option="i"
                  >
                    {{ option }}
                  </option>
                </select>
                <label for="floating-textarea">
                  {{ regForm.question }}
                  <span style="color: red" v-if="regForm.required === 'Y'">
                    *
                  </span>
                </label>
                <small class="text-secondary">
                  {{ regForm.description }}
                </small>
              </div>
              <div
                style="mb-3"
                v-else-if="regForm.question_type === 'File Download'"
              >
                <a ref="uploadedFile" download>Download file</a>
              </div>
              <div
                class="card mb-3 form-floating"
                v-else-if="regForm.question_type === 'File Upload'"
              >
                <div class="card-body">
                  <input
                    type="file"
                    :id="`floating-file-upload-${k}`"
                    class="reg-form"
                    :data-id="regForm.template_id"
                    :data-question="regForm.question_type"
                  />
                  <label :for="`floating-file-upload-${k}`"
                    >{{ regForm.question }}
                    <span style="color: red" v-if="regForm.required === 'Y'"
                      >*</span
                    ></label
                  >
                  <small class="text-secondary">
                    {{ regForm.description }}
                  </small>
                </div>
              </div>
              <div class="mb-3" v-else-if="regForm.question_type === 'Date'">
                <label :for="`floating-date-${k}`"
                  >{{ regForm.question }}
                  <span style="color: red" v-if="regForm.required === 'Y'"
                    >*</span
                  ></label
                >
                <input
                  :id="`floating-date-${k}`"
                  class="form-control w-50 input-registration-date reg-form"
                  placeholder="DD/MM/YYYY"
                  :data-first="JSON.parse(regForm.validation).yearRangeValue[0]"
                  :data-last="JSON.parse(regForm.validation).yearRangeValue[1]"
                  :data-id="regForm.template_id"
                  :data-question="regForm.question_type"
                />
                <small class="text-secondary">
                  {{ regForm.description }}
                </small>
              </div>
              <div class="mb-3" v-else-if="regForm.question_type === 'Time'">
                <label :for="`floating-time-${k}`"
                  >{{ regForm.question }}
                  <span style="color: red" v-if="regForm.required === 'Y'"
                    >*</span
                  ></label
                >
                <input
                  :id="`floating-time-${k}`"
                  class="form-control w-25 input-registration-time reg-form"
                  placeholder="00:00"
                  :data-id="regForm.template_id"
                  :data-question="regForm.question_type"
                />
                <small class="text-secondary">
                  {{ regForm.description }}
                </small>
              </div>
            </div>

            <footer class="fixed-bottom card">
              <div class="row card-body">
                <div class="col-10">
                  <button
                    type="submit"
                    class="btn"
                    data-bs-target="#modal-simple"
                    style="background-color: #1b9dfb; color: white; width: 100%"
                  >
                    KIRIM
                  </button>
                </div>
                <div class="col-2">
                  <a href="#">
                    <img
                      style="position: relative; bottom: 5px; right: 5px"
                      src="@/assets/images/plus.svg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </footer>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IMask from "imask";
import Vue from "vue";
import templateService from "@/service/template";
import accountService from "@/service/account";
import SplashScreen from "../components/SplashScreen.vue";

export default {
  components: { SplashScreen },
  name: "RegistrationForm",
  data() {
    return {
      regFormList: [],
      currentEvent: {},
      isBusyAll: false,
    };
  },
  methods: {
    async submit() {
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

        let regFormElementList = Array.from(
          document.querySelectorAll(".reg-form")
        )
          .filter((regForm) => {
            if (
              regForm.dataset.question === "Multiple Choice" ||
              regForm.dataset.question === "Single Choice"
            ) {
              return regForm.checked;
            }

            return !!regForm.value;
          })
          .map((regForm) => ({
            template_id: regForm.dataset.id,
            answer: regForm.value,
          }));

        const regFormSet = new Set();
        const regFormMap = new Map();
        regFormElementList.forEach((regForm) => {
          if (regForm.answer.startsWith("__other:")) {
            regForm.answer = document.querySelector(
              `.other-option[data-id=${regForm.template_id}]`
            ).value;
          }

          if (regFormMap.has(regForm.template_id)) {
            regFormMap.set(
              regForm.template_id,
              regFormMap.get(regForm.template_id) + "," + regForm.answer
            );
          } else {
            regFormMap.set(regForm.template_id, regForm.answer);
          }
        });

        for (const [key, value] of regFormMap.entries()) {
          regFormElementList = regFormElementList.map((regForm) => {
            if (regForm.template_id === key) {
              regForm.answer = value;
            }

            return regForm;
          });
        }

        const newRegFormElementList = [];
        regFormElementList.forEach((regForm) => {
          if (!regFormSet.has(regForm.template_id)) {
            regFormSet.add(regForm.template_id);
            newRegFormElementList.push(regForm);
          }
        });

        regFormElementList = newRegFormElementList;

        regFormElementList.forEach((regForm) => {
          const masterForm = this.regFormList.find(
            (availableForm) => availableForm.template_id === regForm.template_id
          );

          if (
            masterForm.question_type === "Time" &&
            regForm.answer.toLowerCase() === "hh:mm"
          ) {
            regForm.delete = true;
          } else if (
            masterForm.question_type === "Date" &&
            regForm.answer.toLowerCase() === "dd/mm/yyyy"
          ) {
            regForm.delete = true;
          }
        });

        regFormElementList = regFormElementList.filter(
          (regForm) => !regForm.delete
        );

        for (const availableForm of this.regFormList) {
          if (
            availableForm.required === "Y" &&
            regFormElementList
              .map((regForm) => regForm.template_id)
              .indexOf(availableForm.template_id) < 0
          ) {
            throw new Error(`Form ${availableForm.template_name} wajib diisi`);
          }
        }

        for (const regForm of regFormElementList) {
          const availableForm = this.regFormList.find(
            (form) => form.template_id === regForm.template_id
          );

          if (availableForm.question_type === "Short Answer") {
            const validation = JSON.parse(availableForm.validation);

            if (validation.number === "Y" && isNaN(regForm.answer)) {
              throw new Error(
                `Form ${availableForm.template_name} harus berupa angka`
              );
            }
          }
        }

        const reqBody = {
          customer_id: loginData.customer.customer_id,
          event_id: this.currentEvent.event_id,
          templates: regFormElementList,
        };

        console.log("reqBody", reqBody);

        const submissionResponse = await templateService.submitFormRegistration(
          reqBody
        );

        if (!this.$func.isSuccessStatus(submissionResponse.status)) {
          throw new Error(submissionResponse.statusText);
        }

        loginData.submittedRegistrationForm = true;
        this.$func.saveToLocalStorage("login-data", JSON.stringify(loginData));
        this.$func.goTo("/product-checkout");
      } catch (err) {
        this.$func.showErrorSnackbar(err.message);
      } finally {
        this.$func.finishLoading();
      }
    },
    async checkRegistrationStatus() {
      this.isBusyAll = true;
      try {
        const loginData = this.$func.getLoginData();
        const reqBody = {
          customer_id: loginData.customer.customer_id,
          event_id: this.currentEvent.event_id,
        };

        const inquiryResponse = await templateService.checkRegistrationStatus(
          reqBody
        );

        if (!this.$func.isSuccessStatus(inquiryResponse.status)) {
          throw new Error(inquiryResponse.statusText);
        }

        if (inquiryResponse.data.status === "Y") {
          loginData.submittedRegistrationForm = true;
          this.$func.saveToLocalStorage(
            "login-data",
            JSON.stringify(loginData)
          );
          this.$func.goTo("/product-checkout");
        }
      } catch (err) {
        this.$func.showErrorSnackbar(err.message);
      } finally {
        this.isBusyAll = false;
      }
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
    },
  },
  mounted() {
    if (
      localStorage.getItem("registration-form-list") &&
      localStorage.getItem("event")
    ) {
      this.regFormList = JSON.parse(
        this.$func.getFromLocalStorage("registration-form-list")
      );
      this.currentEvent = JSON.parse(this.$func.getFromLocalStorage("event"));
      this.checkRegistrationStatus();

      this.prepareUI();
    } else {
      this.$func.back();
    }
  },
};
</script>