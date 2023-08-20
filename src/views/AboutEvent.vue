<template>
  <div class="about-event">
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
            <li class="nav-item">
              <a href="#tabs-submit-5" class="nav-link" data-bs-toggle="tab"
                >Submit</a
              >
            </li>
          </ul>
        </div>
        <div class="card-body">
          <div class="tab-content">
            <div class="tab-pane active show" id="tabs-desk-5">
              <div class="mb-3">
                {{ currentEvent.description }}
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
                <div>
                  <a
                    href="/form-regist.html"
                    class="btn"
                    style="
                      background-color: #1b9dfb;
                      color: white;
                      width: 100%;
                      margin: 0 3.3rem;
                    "
                  >
                    REGISTRASI
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
                        href="/check-out.html"
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
  </div>
</template>

<script>
import Dropzone from "dropzone";

export default {
  name: "AboutEvent",
  data() {
    return {
      currentEvent: {},
      subFormList: [],
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
  },
  methods: {
    prepareUI() {
      new Dropzone("#dropzone-default");
    },
  },
  mounted() {
    if (localStorage.getItem("event")) {
      this.currentEvent = JSON.parse(this.$func.getFromLocalStorage("event"));

      if (localStorage.getItem("submission-form-list")) {
        this.subFormList = JSON.parse(
          this.$func.getFromLocalStorage("submission-form-list")
        );
      }

      // this.prepareUI();
    } else {
      this.$func.back();
    }
  },
};
</script>