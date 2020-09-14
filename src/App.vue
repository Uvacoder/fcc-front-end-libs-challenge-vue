<template>
  <div
    id="nav"
    class="text-center"
  >
    <router-link to="/">
      Home
    </router-link> |
    <router-link to="/calculator">
      Calculator
    </router-link> |
    <router-link to="/pomodoro">
      Pomodoro Timer
    </router-link>
  </div>
  <router-view />
</template>

<style>
</style>
