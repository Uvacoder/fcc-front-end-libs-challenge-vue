<template>
  <div id="nav" class="text-center">
    <router-link to="/"> 🏠Home </router-link> |
    <router-link to="/random-quote-machine">
      🦄Random Quote Machine
    </router-link>
    | <router-link to="/drum-machine"> 🥁Drum Machine </router-link> |
    <router-link to="/calculator"> 🧮Calculator </router-link> |
    <router-link to="/pomodoro"> 🍅Pomodoro Timer </router-link>
  </div>
  <router-view />
</template>

<style></style>
