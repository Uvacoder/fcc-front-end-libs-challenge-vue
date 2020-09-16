<template>
  <div class="text-center">Drum Machine</div>

  <button
    class="bg-red-600 p-5 m-5 h-16 w-3 flex justify-center"
    @click="handleKey"
  >
    <audio
      ref="chord"
      preload
      src="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
    ></audio>
    chord
  </button>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
const keyPressLookup = {
  Q: {
    name: "Chord-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
  },
  W: {
    name: "Chord-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
  },
  E: {
    name: "Chord-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
  },
  A: {
    name: "Shaker",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
  },
  S: {
    name: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
  },
  D: {
    name: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
  },
  Z: {
    name: "Punchy-Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
  },
  X: {
    name: "Side-Stick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
  },
  C: {
    name: "Snare",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
  },
};

export default defineComponent({
  setup() {
    console.log(keyPressLookup);
    const chord = ref<any>(null);

    function handleKey(): void {
      console.log(chord.value);
      chord.value.play();
    }

    return { handleKey, chord };
  },
});
</script>

<style scoped></style>
