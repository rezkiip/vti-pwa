<template>
  <div class="invoice">
    <section class="main-container">
      <div class="">
        <div style="background-color: #c6e7ff; padding: 3px 0">
          <p
            class="text-muted text-center"
            style="margin: 6px 10px; font-size: 12px"
          >
            <span style="margin: 0 6px 0 0"
              ><img src=" /images/info-label.svg" alt="" style="height: 17px" />
            </span>
            Selesaikan pembayaran dalam ... <br />
            <b>14 menit 59 detik</b>
          </p>
        </div>
      </div>

      <div class="content">
        <div class="qris" style="height: 19rem">
          <div class="qris-all-logo">
            <img src="/images/qris-all_logo.svg" alt="" />
          </div>

          <div class="gpn-logo">
            <img src="/images/gpn_logo.svg" alt="" />
          </div>
          <div class="qris-element1">
            <img src="/images/qris_elm1.svg" alt="" />
          </div>
          <div class="qris-element2">
            <img src="/images/qris_elm2.svg" alt="" />
          </div>
          <div class="qr-code-qris text-center">
            <img src="/images/qrcode-qris.png" alt="" />
          </div>
          <div class="ideo-total-biaya">
            <div class="row col-4 total-biaya">
              <p class="text-muted">Total Biaya</p>
              <h4><b>Rp 36.012</b></h4>
            </div>
          </div>
          <div class="nama-nmid-qris">
            <h4>IDEO</h4>
            <!-- <h6>NMID : IDXXXXXXXXXXXTID</h6> -->
          </div>
        </div>
        <div
          class="cara-bayar container"
          style="background-color: white; padding: 0 2rem 3rem 2rem"
        >
          <h5>Cara Bayar QRIS</h5>
          <p style="font-size: 13px">
            Scan, unggah atau kirim kode melalui aplikasi pembayaran e-Banking
            (BCA Mobile, BRImo, Livin’ by Mandiri, OCTO Mobile, dsb), e-Wallet
            (Shopeepay, OVO, Gopay, LinkAja, Dana, dsb)
          </p>
        </div>
      </div>
    </section>

    <div class="fixed-bottom">
      <div class="card bayar-btn-container">
        <div class=" " style="margin: 1rem 1rem">
          <div class="col">
            <a
              class="btn"
              data-bs-toggle="offcanvas"
              href="#offcanvasBottom123"
              role="button"
              aria-controls="offcanvasBottom123"
              style="background-color: #1b9dfb; color: white; width: 20rem"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-qrcode"
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
                  d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"
                ></path>
                <path d="M7 17l0 .01"></path>
                <path
                  d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"
                ></path>
                <path d="M7 7l0 .01"></path>
                <path
                  d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"
                ></path>
                <path d="M17 7l0 .01"></path>
                <path d="M14 14l3 0"></path>
                <path d="M20 14l0 .01"></path>
                <path d="M14 14l0 3"></path>
                <path d="M14 20l3 0"></path>
                <path d="M17 17l3 0"></path>
                <path d="M20 17l0 3"></path>
              </svg>
              KIRIM KE APLIKASI PEMBAYARAN
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- offcanvas  -->
    <div
      class="offcanvas offcanvas-bottom"
      tabindex="-1"
      id="offcanvasBottom123"
      aria-labelledby="offcanvasBottomLabel"
      style="height: 35rem"
    >
      <div class="offcanvas-header">
        <h2 class="offcanvas-title" id="offcanvasBottomLabel">
          Share to Payment App
        </h2>
        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <div class="text-center">
          <img src="/images/qrcode.png" alt="" style="height: 7rem" />
        </div>
        <div class="kirim-perbankan mt-3">
          <h5>Kirim ke Aplikasi Perbankan</h5>
          <div class="carousel-container logo-app-perbankan">
            <div class="button-inline-block logo-perbankan-pay text-center">
              <img src="/images/stabilo.png" />
              <!--- harusnya image-->
              <h6>Livin’ by Mandiri</h6>
            </div>
            <div class="button-inline-block logo-perbankan-pay text-center">
              <img src="/images/maped2.svg" />
              <!--- harusnya image-->
              <h6>myBCA</h6>
            </div>
            <div class="button-inline-block logo-perbankan-pay text-center">
              <img src="/images/stabilo.png" />
              <!--- harusnya image-->
              <h6>BRImo BRI</h6>
            </div>
            <div class="button-inline-block logo-perbankan-pay text-center">
              <img src="/images/maped2.svg" />
              <!--- harusnya image-->
              <h6>myBCA</h6>
            </div>
            <div class="button-inline-block logo-perbankan-pay text-center">
              <img src="/images/stabilo.png" />
              <!--- harusnya image-->
              <h6>BRImo BRI</h6>
            </div>
            <div class="button-inline-block logo-perbankan-pay text-center">
              <img src="/images/maped2.svg" />
              <!--- harusnya image-->
              <h6>myBCA</h6>
            </div>
          </div>
        </div>
        <div class="kirim-perbankan mt-3">
          <h5>Kirim ke Aplikasi Dompet Digital</h5>
          <div class="carousel-container logo-app-perbankan">
            <div class="button-inline-block logo-perbankan-pay text-center">
              <img src="/images/stabilo.png" />
              <!--- harusnya image-->
              <h6>Livin’ by Mandiri</h6>
            </div>
            <div class="button-inline-block logo-perbankan-pay text-center">
              <img src="/images/maped2.svg" />
              <!--- harusnya image-->
              <h6>myBCA</h6>
            </div>
            <div class="button-inline-block logo-perbankan-pay text-center">
              <img src="/images/stabilo.png" />
              <!--- harusnya image-->
              <h6>BRImo BRI</h6>
            </div>
            <div class="button-inline-block logo-perbankan-pay text-center">
              <img src="/images/maped2.svg" />
              <!--- harusnya image-->
              <h6>myBCA</h6>
            </div>
            <div class="button-inline-block logo-perbankan-pay text-center">
              <img src="/images/stabilo.png" />
              <!--- harusnya image-->
              <h6>BRImo BRI</h6>
            </div>
            <div class="button-inline-block logo-perbankan-pay text-center">
              <img src="/images/maped2.svg" />
              <!--- harusnya image-->
              <h6>myBCA</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Invoice",
  mounted() {
    console.log("invoice", this.$func.getFromLocalStorage("invoice"));
  },
};
</script>