<template>
  <div>
    <!-- background -->
    <div class="absolute h-screen w-full">
      <div
        class="relative h-[50vh] w-full bg-gradient-to-b from-[#4f7fff] to-[#b1f4d2]"
      >
        <img
          src="../assets/SVG/form-island.svg"
          class="absolute bottom-0 z-[2] -mb-4 h-3/5 w-full object-fill px-12"
        />
        <img
          src="../assets/SVG/form-sky.svg"
          class="absolute bottom-0 z-[1] h-4/5 w-full object-fill"
        />
        <div class="absolute z-[1] flex h-full w-full flex-col items-center">
          <div class="flex-[1]"></div>
          <img
            src="../assets/SVG/form-sun.svg"
            class="h-2/5 w-full object-contain"
          />
          <div class="flex-[2]"></div>
        </div>
      </div>
      <div class="relative h-[50vh] w-full overflow-hidden">
        <img
          src="../assets/SVG/sea-decor.svg"
          class="absolute bottom-0 z-[3] h-full w-full object-fill"
        />
        <img src="../assets/SVG/form-sea.svg" class="object-cover object-top" />
      </div>
    </div>

    <!-- foreground -->
    <div class="relative z-[10] flex h-screen w-full flex-row items-center">
      <div class="flex-1"></div>
      <div
        class="max-w-lg rounded-3xl bg-black bg-opacity-40 p-8 backdrop-blur-sm"
      >
        <form name="rsvp-psdm">
          <div v-for="(field, index) in fields" :key="index">
            <div>
              <div
                :class="index == 0 ? '' : 'mt-4'"
                class="rounded-xl bg-sand py-2 text-center text-sm text-wave"
              >
                <p class="block font-bs">
                  {{ field }}
                </p>
              </div>
              <div
                class="mt-2 w-72 rounded-xl bg-black bg-opacity-30 md:w-96"
                :class="index == 3 ? 'pr-4' : ''"
              >
                <input
                  required
                  v-if="index < 3"
                  :name="formNames[index]"
                  type="text"
                  class="block w-full rounded-xl bg-transparent py-2 px-4 text-center text-white outline-none"
                />
                <select
                  v-else
                  name="absen"
                  class="w-full bg-transparent text-white py-2 px-4 block outline-none"
                >
                  <option value="-" class="text-black">-</option>
                  <option value="hadir" class="text-black">Hadir</option>
                  <option value="tidak hadir" class="text-black">
                    Tidak hadir
                  </option>
                </select>
              </div>
            </div>
          </div>

          <!-- button submit -->
          <button
            type="submit"
            class="block mx-auto mt-8 w-min cursor-pointer select-none rounded-full bg-sand py-2 px-4 text-center text-sm font-semibold opacity-80 duration-300 hover:scale-110"
            :disabled="isLoading"
          >
            <p class="text-wave">{{ isLoading ? "LOADING..." : "SUBMIT" }}</p>
          </button>
        </form>
      </div>
      <div class="flex-1"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormPage",
  data() {
    return {
      fields: ["Nama", "NIM", "Angkatan", "Absen"],
      formNames: ["nama", "nim", "angkatan", "absen"],
      isLoading: false,
    };
  },
  mounted() {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwwJCZO4An04VqDU6hPQeP_6FH9-9vRB4dnQfN67Y2M6FJ8MwmMHDq3Aju4PY1Xpt8E0Q/exec";
    const form = document.forms["rsvp-psdm"];

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.isLoading = true;

      fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then(() => {
          this.isLoading = false;
          alert("Terima kasih telah berpartisipasi!");
          this.$router.replace("/");
        })
        .catch((error) => {
          this.isLoading = false;
          console.error("Error!", error.message);
        });
    });
  },
  methods: {},
};
</script>
