<template>
  <main class="app">
    <main id="animations-test" class="animations-test">
      <router-view name="container" class="child-view"></router-view>
    </main>
  </main>
</template>

<style lang="scss">
@import "./App.scss";
body,
html {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-size: 5vw;
}
body,
input,
textarea {
  font-family: "Open Sans", sans-serif;
}

.app {
  width: 100%;
  height: 100%;
}

.animations-test {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
