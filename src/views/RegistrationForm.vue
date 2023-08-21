<template>
  <div class="registration-form">
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
          <form @submit.prevent="submit" class="card-body">
            <div v-for="(regForm, k) in regFormList" :key="k">
              <div
                class="form-floating mb-3"
                v-if="regForm.question_type === 'Short Answer'"
              >
                <input
                  type="text"
                  id="floating-text"
                  class="form-control"
                  autocomplete="off"
                />
                <label for="floating-text"
                  >{{ regForm.question }}
                  <span style="color: red" v-if="regForm.required === 'Y'"
                    >*</span
                  ></label
                >
              </div>
              <div
                class="form-floating mb-3"
                v-else-if="regForm.question_type === 'Long Answer'"
              >
                <textarea
                  id="floating-textarea"
                  class="form-control"
                  data-bs-toggle="autosize"
                ></textarea>
                <label for="floating-textarea"
                  >{{ regForm.question }}
                  <span style="color: red" v-if="regForm.required === 'Y'"
                    >*</span
                  ></label
                >
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
                class="form-floating mb-3"
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
                <label for="floating-textarea">
                  {{ regForm.question }}
                  <span style="color: red" v-if="regForm.required === 'Y'">
                    *
                  </span>
                </label>
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
                  <input type="file" id="floating-file-upload" />
                  <label for="floating-file-upload"
                    >{{ regForm.question }}
                    <span style="color: red" v-if="regForm.required === 'Y'"
                      >*</span
                    ></label
                  >
                </div>
              </div>
              <div class="mb-3" v-else-if="regForm.question_type === 'Date'">
                <label for="floating-date"
                  >{{ regForm.question }}
                  <span style="color: red" v-if="regForm.required === 'Y'"
                    >*</span
                  ></label
                >
                <input
                  id="floating-date"
                  class="form-control w-50 input-registration-date"
                  placeholder="DD/MM/YYYY"
                  :data-first="JSON.parse(regForm.validation).yearRangeValue[0]"
                  :data-last="JSON.parse(regForm.validation).yearRangeValue[1]"
                />
              </div>
              <div class="mb-3" v-else-if="regForm.question_type === 'Time'">
                <label for="floating-time"
                  >{{ regForm.question }}
                  <span style="color: red" v-if="regForm.required === 'Y'"
                    >*</span
                  ></label
                >
                <input
                  id="floating-time"
                  class="form-control w-25 input-registration-time"
                  placeholder="00:00"
                />
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

export default {
  name: "RegistrationForm",
  data() {
    return {
      regFormList: [],
    };
  },
  methods: {
    submit() {
      this.$func.goTo("/product-checkout");
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
    if (localStorage.getItem("registration-form-list")) {
      this.regFormList = JSON.parse(
        this.$func.getFromLocalStorage("registration-form-list")
      );

      this.prepareUI();
    } else {
      this.$func.back();
    }
  },
};
</script>