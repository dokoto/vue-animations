<template>
  <main class="app">
    <Card style="background-color: aliceblue;margin: 0;">
      <button @click="handleClick"
              class="action-button">Show</button>
    </Card>
      <section class="grp">
        <Card ref="card" class="open">
          <Input placeHolder="Dato 1"
                 :readOnly="false"
                 class="margin-2x" />
          <Input placeHolder="Dato 2"
                 :readOnly="false"
                 class="margin-2x" />
          <Input placeHolder="Dato 3"
                 :readOnly="false"
                 class="margin-2x" />
        </Card>
        <Card ref="cardX" class="open">
          <Input placeHolder="Dato 1"
                 :readOnly="false"
                 class="margin-2x" />
          <Input placeHolder="Dato 2"
                 :readOnly="false"
                 class="margin-2x" />
          <Input placeHolder="Dato 3"
                 :readOnly="false"
                 class="margin-2x" />
        </Card>
      </section>
  </main>
</template>

<script>
import TweenMax from "gsap/TweenMax";
import Card from "./components/Card";
import Input from "./components/Input";

export default {
  name: "app",
  components: { Card, Input },
  methods: {
    handleClick(ev) {
      const $card = this.$refs.card.$el;
      if ($card.classList.contains("open")) {
        TweenLite
          .to($card , 0.6, { height: 0, opacity: 0 });
        $card.classList.remove("open");
      } else {
        TweenLite.set($card, { height: "auto", opacity: 1 });
        TweenLite.from($card, 0.6, { height: 0, opacity: 0 });
        $card.classList.add("open");
      }
    },
    animateBeforeEnter(el) {
      $(el).slideDown("slow");
    },
    animateLeave(el, done) {
      $(el).slideUp("slow", () => done());
    }
  }
};
</script>

<style lang="scss">
@import "/node_modules/animate.css/animate.min.css";
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
  position: relative;
  width: 100%;
  height: 100%;
  .action-button {
    color: white;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    border: none;
    font-size: 1.3em;
    padding: 2%;
    border-radius: 5px;
    background-color: $colorBlue1;
  }
  .grp {
    .margin-2x {
      margin-top: 0.4em;
    }
  }
}
</style>
