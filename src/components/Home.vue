<template>
  <div class="select-none bg-sand">
    <!-- lg -->
    <div
      class="relative hidden flex-col overflow-hidden bg-img-sand-decor-2 bg-cover bg-no-repeat md:hidden lg:flex"
    >
      <!-- section 1 -->
      <div class="relative h-screen overflow-hidden">
        <img
          src="../assets/SVG/wave.svg"
          class="absolute h-screen w-screen object-cover object-bottom"
          alt=""
        />

        <!-- decoration -->
        <img
          src="../assets/SVG/leaf-tl.svg"
          class="absolute z-[1] h-1/3 duration-300 hover:scale-110"
          alt=""
        />

        <img
          src="../assets/SVG/ball.svg"
          class="absolute left-1/2 z-[1] h-24 w-1/6 -translate-x-1/2 animate-bounce object-cover object-bottom duration-300 hover:scale-110"
          alt=""
        />

        <img
          src="../assets/SVG/tire-tr.svg"
          class="absolute right-0 z-[1] h-1/3 duration-300 hover:scale-110"
          alt=""
        />

        <div class="relative -mt-24 flex h-screen w-screen items-center">
          <div class="flex-1"></div>
          <div class="flex flex-col">
            <div>
              <p class="text-center font-bs text-7xl text-white">
                Party will start in
              </p>
            </div>

            <div class="duration-300 hover:scale-110">
              <!-- counter -->
              <div class="mt-16 flex flex-row">
                <div class="flex-1"></div>
                <div
                  class="container-text-time-counter rounded-tl-3xl rounded-bl-3xl"
                >
                  <p class="text-time-counter ttc-day">{{ counterDay }}</p>
                </div>
                <div class="container-text-time-counter-dot">
                  <p class="text-time-counter">:</p>
                </div>
                <div class="container-text-time-counter">
                  <p class="text-time-counter ttc-hour">{{ counterHour }}</p>
                </div>
                <div class="container-text-time-counter-dot">
                  <p class="text-time-counter">:</p>
                </div>
                <div class="container-text-time-counter">
                  <p class="text-time-counter ttc-minute">
                    {{ counterMinute }}
                  </p>
                </div>
                <div class="container-text-time-counter-dot">
                  <p class="text-time-counter">:</p>
                </div>
                <div
                  class="container-text-time-counter rounded-tr-3xl rounded-br-3xl"
                >
                  <p class="text-time-counter ttc-second">
                    {{ counterSecond }}
                  </p>
                </div>
                <div class="flex-1"></div>
              </div>

              <!-- counter caption -->
              <div class="flex flex-row">
                <div class="flex-1"></div>
                <div class="container-caption-counter">
                  <p class="text-time-counter-caption">Day</p>
                </div>
                <div class="spacer-caption-counter"></div>
                <div class="container-caption-counter">
                  <p class="text-time-counter-caption">Hour</p>
                </div>
                <div class="spacer-caption-counter"></div>
                <div class="container-caption-counter">
                  <p class="text-time-counter-caption">Minute</p>
                </div>
                <div class="spacer-caption-counter"></div>
                <div class="container-caption-counter">
                  <p class="text-time-counter-caption">Second</p>
                </div>
                <div class="flex-1"></div>
              </div>
            </div>
          </div>
          <div class="flex-1"></div>
        </div>
      </div>

      <!-- section 2 -->
      <div class="relative h-screen">
        <div class="absolute flex h-screen w-screen items-center">
          <img
            src="../assets/SVG/sand-decor-1.svg"
            class="h-screen w-screen object-cover object-top"
            alt=""
          />
        </div>

        <div class="relative flex h-screen flex-col items-center">
          <div class="flex-1"></div>
          <div class="rounded-3xl bg-wave py-4 px-6 shadow-2xl">
            <p class="text-5xl text-sand">DON'T FORGET TO JOIN</p>
          </div>
          <router-link to="/form">
            <img
              src="../assets/SVG/link.svg"
              class="mt-8 w-32 cursor-pointer font-bs duration-300 hover:scale-110 hover:opacity-80"
              alt=""
            />
          </router-link>
          <div class="flex-1"></div>
        </div>
      </div>

      <!-- footer -->
      <div class="relative bg-wave py-4 text-center text-white">
        <p>PSDM Present. All Right Reserved.</p>
      </div>
    </div>

    <!-- md -->
    <div
      class="relative hidden bg-img-sand-decor-2 bg-cover bg-bottom bg-no-repeat md:block lg:hidden overflow-hidden"
    >
      <!-- decoration -->
      <img
        src="../assets/SVG/leaf-tl.svg"
        class="absolute z-[1] h-36 object-cover duration-300 hover:scale-110"
        alt=""
      />

      <div class="absolute flex w-full flex-col items-center">
        <img
          src="../assets/SVG/ball.svg"
          class="z-[1] h-24 w-1/6 animate-bounce object-cover object-bottom duration-300 hover:scale-110"
          alt=""
        />
      </div>

      <img
        src="../assets/SVG/tire-tr.svg"
        class="absolute right-0 z-[1] h-36 duration-300 hover:scale-110"
        alt=""
      />

      <!-- section 1 -->
      <div
        class="relative flex h-screen flex-col bg-img-wave bg-cover bg-bottom bg-no-repeat"
      >
        <div class="flex-[1]"></div>
        <div class="flex flex-col">
          <div>
            <p class="text-center font-bs text-7xl text-white">
              Party will start in
            </p>
          </div>

          <div class="duration-300 hover:scale-110">
            <!-- counter -->
            <div class="mt-12 flex flex-row">
              <div class="flex-1"></div>
              <div
                class="container-text-time-counter rounded-tl-3xl rounded-bl-3xl"
              >
                <p class="text-time-counter ttc-day">{{ counterDay }}</p>
              </div>
              <div class="container-text-time-counter-dot">
                <p class="text-time-counter">:</p>
              </div>
              <div class="container-text-time-counter">
                <p class="text-time-counter ttc-hour">{{ counterHour }}</p>
              </div>
              <div class="container-text-time-counter-dot">
                <p class="text-time-counter">:</p>
              </div>
              <div class="container-text-time-counter">
                <p class="text-time-counter ttc-minute">{{ counterMinute }}</p>
              </div>
              <div class="container-text-time-counter-dot">
                <p class="text-time-counter">:</p>
              </div>
              <div
                class="container-text-time-counter rounded-tr-3xl rounded-br-3xl"
              >
                <p class="text-time-counter ttc-second">{{ counterSecond }}</p>
              </div>
              <div class="flex-1"></div>
            </div>

            <!-- counter caption -->
            <div class="flex flex-row">
              <div class="flex-1"></div>
              <div class="container-caption-counter">
                <p class="text-time-counter-caption">Day</p>
              </div>
              <div class="spacer-caption-counter"></div>
              <div class="container-caption-counter">
                <p class="text-time-counter-caption">Hour</p>
              </div>
              <div class="spacer-caption-counter"></div>
              <div class="container-caption-counter">
                <p class="text-time-counter-caption">Minute</p>
              </div>
              <div class="spacer-caption-counter"></div>
              <div class="container-caption-counter">
                <p class="text-time-counter-caption">Second</p>
              </div>
              <div class="flex-1"></div>
            </div>
          </div>
        </div>
        <div class="flex-[2]"></div>
      </div>

      <!-- section 2 -->
      <div class="relative h-screen w-full overflow-hidden">
        <img
          src="../assets/SVG/sand-decor-1.svg"
          class="absolute h-screen w-full object-cover object-top"
          alt=""
        />

        <div class="relative flex h-screen flex-col items-center">
          <div class="flex-1"></div>
          <div class="rounded-3xl bg-wave py-4 px-6 shadow-2xl">
            <p class="text-3xl text-sand">DON'T FORGET TO JOIN</p>
          </div>
          <router-link to="/form">
            <img
              src="../assets/SVG/link.svg"
              class="mt-8 w-24 cursor-pointer font-bs duration-300 hover:scale-110 hover:opacity-80"
              alt=""
            />
          </router-link>
          <div class="flex-1"></div>
        </div>
      </div>

      <!-- footer -->
      <div
        class="relative bottom-0 bg-wave py-4 text-center text-sm text-white"
      >
        <p>PSDM Present. All Right Reserved.</p>
      </div>
    </div>

    <!-- sm -->
    <div class="relative block w-full md:hidden lg:hidden">
      <div>
        <img
          src="../assets/SVG/leaf-tl.svg"
          class="absolute z-[5] w-24 duration-300 hover:scale-110"
        />
        <div class="absolute z-[4] flex w-full flex-col items-center">
          <img
            src="../assets/SVG/ball.svg"
            class="h-16 w-32 animate-bounce object-cover object-bottom"
          />
        </div>
        <img
          src="../assets/SVG/tire-tr.svg"
          class="absolute right-0 z-[5] w-24 duration-300 hover:scale-110"
        />
      </div>

      <div class="absolute bottom-0 h-[70vh] w-full">
        <img
          src="../assets/SVG/sand-decor-1.svg"
          class="absolute top-1/2 z-[2] w-full -translate-y-1/2 object-cover object-top opacity-80"
        />

        <img
          src="../assets/SVG/sand-decor-2.svg"
          class="absolute bottom-0 z-[1] w-full object-cover"
        />
      </div>

      <div
        class="relative z-[3] flex h-[50vh] flex-col items-center bg-img-wave bg-cover bg-bottom bg-no-repeat"
      >
        <div class="flex-[2]"></div>
        <p class="font-bs text-4xl text-white">Party will start in</p>

        <div class="duration-300 hover:scale-110">
          <!-- counter -->
          <div class="mt-8 flex flex-row">
            <div class="flex-1"></div>
            <div
              class="container-text-time-counter rounded-tl-xl rounded-bl-xl"
            >
              <p class="text-time-counter ttc-day">{{ counterDay }}</p>
            </div>
            <div class="container-text-time-counter-dot">
              <p class="text-time-counter">:</p>
            </div>
            <div class="container-text-time-counter">
              <p class="text-time-counter ttc-hour">{{ counterHour }}</p>
            </div>
            <div class="container-text-time-counter-dot">
              <p class="text-time-counter">:</p>
            </div>
            <div class="container-text-time-counter">
              <p class="text-time-counter ttc-minute">{{ counterMinute }}</p>
            </div>
            <div class="container-text-time-counter-dot">
              <p class="text-time-counter">:</p>
            </div>
            <div
              class="container-text-time-counter rounded-tr-xl rounded-br-xl"
            >
              <p class="text-time-counter ttc-second">{{ counterSecond }}</p>
            </div>
            <div class="flex-1"></div>
          </div>

          <!-- counter caption -->
          <div class="flex flex-row">
            <div class="flex-1"></div>
            <div class="container-caption-counter">
              <p class="text-time-counter-caption">Day</p>
            </div>
            <div class="spacer-caption-counter"></div>
            <div class="container-caption-counter">
              <p class="text-time-counter-caption">Hour</p>
            </div>
            <div class="spacer-caption-counter"></div>
            <div class="container-caption-counter">
              <p class="text-time-counter-caption">Minute</p>
            </div>
            <div class="spacer-caption-counter"></div>
            <div class="container-caption-counter">
              <p class="text-time-counter-caption">Second</p>
            </div>
            <div class="flex-1"></div>
          </div>
        </div>
        <div class="flex-[3]"></div>
      </div>

      <div class="relative z-[3] flex h-[50vh] flex-col items-center">
        <div class="flex-1"></div>
        <div class="rounded-lg bg-wave py-2 px-4 text-xl text-white shadow-lg">
          <p>DON'T FORGET TO JOIN</p>
        </div>
        <router-link to="/form">
          <img src="../assets/SVG/link.svg" class="mt-4 w-24" alt="" />
        </router-link>
        <div class="flex-1"></div>
      </div>

      <div class="relative z-[3] bg-wave py-2 text-center text-xs text-white">
        <p>PSDM Present. All Right Reserved.</p>
      </div>
    </div>
  </div>
</template>

<script>
import DateDiff from "date-diff";

export default {
  name: "HomePage",
  data() {
    return {
      counterDay: "00",
      counterHour: "00",
      counterMinute: "00",
      counterSecond: "00",
    };
  },
  created() {
    setInterval(() => this.counter(), 1000);
  },
  methods: {
    counter() {
      var currentDate = new Date();
      var dueDate = new Date(2022, 11, 10, 10, 0);
      var difference = new DateDiff(dueDate, currentDate).seconds();

      this.counterDay = Math.floor(difference / 86400);
      difference -= this.counterDay * 86400;
      this.counterHour = Math.floor(difference / 3600) % 24;
      difference -= this.counterHour * 3600;
      this.counterMinute = Math.floor(difference / 60) % 60;
      difference -= this.counterMinute * 60;
      this.counterSecond = Math.floor(difference % 60);

      // this.counterDay = this.parseNumber(this.counterDay);
      this.counterDay = this.counterDay;
      this.counterHour = this.parseNumber(this.counterHour);
      this.counterMinute = this.parseNumber(this.counterMinute);
      this.counterSecond = this.parseNumber(this.counterSecond);
    },
    parseNumber(data) {
      var a = parseInt(data);
      if (a < 10) return `0${a}`;
      else return `${a}`;
    },
  },
};
</script>
