<template>
  <div id="pomo-view" class="flex flex-col justify-center h-screen m-5">
    <div id="pomo-container" class="bg-red-200 p-3">
      <div id="timer" class="flex justify-evenly">
        <div id="mins-container">
          <button
            class="bg-red-500 hover:bg-red-600 p-2"
            @click="incrementTimer(60000)"
          >
            ➕
          </button>
          <span class="p-1"> {{ minutes }} </span>
          <button
            class="bg-red-500 hover:bg-red-600 p-2"
            @click="decrementTimer(60000)"
          >
            ➖
          </button>
        </div>
        <div id="secs-container">
          <button
            class="bg-red-500 hover:bg-red-600 p-2"
            @click="incrementTimer(10000)"
          >
            ➕
          </button>
          <span class="p-1"> {{ seconds }} </span>
          <button
            class="bg-red-500 hover:bg-red-600 p-2"
            @click="decrementTimer(10000)"
          >
            ➖
          </button>
        </div>
      </div>
      <div id="timer-controls" class="flex justify-evenly p-5">
        <button
          class="bg-green-500 hover:bg-green-600 p-2"
          @click="startTimer()"
        >
          Start
        </button>
        <button
          class="bg-orange-500 hover:bg-orange-600 p-2"
          @click="stopTimer()"
        >
          Stop
        </button>
        <button
          class="bg-purple-500 hover:bg-purple-600 p-2"
          @click="resetTimer()"
        >
          Reset
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from "vue";
export default defineComponent({
  name: "Pomodoro",
  setup() {
    onMounted(() => {
      // Set Interval is running all the time. Check the state of timer to either decrement timer by second or just skip perpetually until state is changed
      setInterval(() => {
        if (timerState.value === "STOPPED") {
          console.log("timer stopped");
          return;
        }
        if (timerInMilliSecs.value === 0) {
          timerState.value = "STOPPED";
          alert("Times up!");
          return;
        }
        console.log("timer started");
        timerInMilliSecs.value -= 1000;
      }, 1000);
    });

    const timerState = ref("STOPPED");
    const timerInMilliSecs = ref(1200000);

    function stopTimer() {
      timerState.value = "STOPPED";
    }

    function startTimer() {
      timerState.value = "STARTED";
    }

    function resetTimer() {
      timerInMilliSecs.value = 1200000;
    }

    function incrementTimer(milliSecs: number) {
      timerInMilliSecs.value += milliSecs;
    }

    function decrementTimer(milliSecs: number) {
      timerInMilliSecs.value -= milliSecs;
    }

    const minutes = computed(() => {
      return Math.floor(timerInMilliSecs.value / 60000);
    });

    const seconds = computed(() => {
      return ((timerInMilliSecs.value % 60000) / 1000).toFixed(0);
    });

    return {
      timerInMilliSecs,
      startTimer,
      stopTimer,
      resetTimer,
      incrementTimer,
      decrementTimer,
      minutes,
      seconds,
    };
  },
});
</script>
