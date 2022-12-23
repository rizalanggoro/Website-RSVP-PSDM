<template>
  <div>
    <button @click="test">submit</button>
    <form name="submit-to-google-sheet1">
      <input
        name="nama"
        value="rizal dwi anggoro"
        placeholder="Email"
        required
      />
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "TestPage",
  data() {
    return {};
  },
  created() {},
  mounted() {
    var url =
      "https://script.google.com/macros/s/AKfycbwwJCZO4An04VqDU6hPQeP_6FH9-9vRB4dnQfN67Y2M6FJ8MwmMHDq3Aju4PY1Xpt8E0Q/exec";
    const form = document.forms["submit-to-google-sheet1"];

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      fetch(url, { method: "POST", body: new FormData(form) })
        .then((response) => console.log("Success!", response))
        .catch((error) => console.error("Error!", error.message));
    });
  },
  methods: {
    test() {
      var url =
        "https://script.google.com/macros/s/AKfycbwwJCZO4An04VqDU6hPQeP_6FH9-9vRB4dnQfN67Y2M6FJ8MwmMHDq3Aju4PY1Xpt8E0Q/exec";

      // var formData = new FormData()
      // formData.set
      fetch(url, {
        method: "POST",
        body: {
          nama: "rizal dwi",
          nim: "l0122142",
          angkatan: "2022",
          absen: "hah",
        },
      })
        .then((response) => console.log("Success!", response))
        .catch((error) => console.error("Error!", error.message));
    },
  },
};
</script>
