<template>
  <div
    id="pomo-view"
    class="flex flex-col justify-center h-screen m-5"
  >
    <div
      id="pomo-container"
      class="bg-red-200 p-3 "
    >
      <div
        id="timer"
        class="flex justify-evenly"
      >
        <div id="mins-container">
          <button class="bg-red-500 hover:bg-red-600 p-2">
            ➕
          </button>
          <span> 20 </span>
          <button class="bg-red-500 hover:bg-red-600 p-2">
            ➖
          </button>
        </div>
        <div id="secs-container">
          <button class="bg-red-500 hover:bg-red-600 p-2">
            ➕
          </button>
          <span> 00 </span>
          <button class="bg-red-500 hover:bg-red-600 p-2">
            ➖
          </button>
        </div>
      </div>
      <div
        id="timer-controls"
        class="flex justify-evenly p-5"
      >
        <button class="bg-green-500 hover:bg-green-600 p-2">
          Start
        </button>
        <button class="bg-orange-500 hover:bg-orange-600 p-2">
          Stop
        </button>
        <button class="bg-purple-500 hover:bg-purple-600 p-2">
          Reset
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent, ref } from "vue"
export default defineComponent({
  setup () {
    const timer = ref(0)

    return {timer}
  }
})
</script>