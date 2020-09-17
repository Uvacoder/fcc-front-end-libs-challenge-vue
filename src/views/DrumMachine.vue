<template>
  <div id="drum-machine-view" class="flex flex-col justify-center h-screen">
    <div id="drumpad-container" class="grid grid-flow-row grid-cols-3">
      <DrumPad
        name="Chord 1"
        audio="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
      />
      <DrumPad
        name="Chord 2"
        audio="https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
      />
      <DrumPad
        name="Chord 3"
        audio="https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
      />
      <DrumPad
        name="Sample 1"
        audio="https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
      />
      <DrumPad
        name="Sample 2"
        audio="https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
      />
      <DrumPad
        name="Sample 3"
        audio="https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
      />
      <DrumPad
        name="Kick 1"
        audio="https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
      />
      <DrumPad
        name="Kick 2"
        audio="https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
      />
      <DrumPad
        name="Snare"
        audio="https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DrumPad from "@/components/DumPad.vue";

export default defineComponent({
  components: {
    DrumPad,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
