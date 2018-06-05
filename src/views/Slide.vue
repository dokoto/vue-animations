<template>
  <section class="slide">
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
  </section>
</template>

<script>
import TweenMax from "gsap/TweenMax";
import Card from "../components/Card";
import Input from "../components/Input";

export default {
  components: { Card, Input },
  methods: {
    handleClick(ev) {
      const $card = this.$refs.card.$el;
      //this.$refs.cardX.$el.style.height = `${this.$refs.cardX.$el.offsetHeight}px`;
      window.getComputedStyle(this.$refs.cardX.$el, null).setPropertyValue("height", `${this.$refs.cardX.$el.offsetHeight}px`);
      this.$refs.cardX.$el.classList.add('close');
      /*
      if ($card.classList.contains("open")) {
        TweenLite
          .to($card , 0.6, { height: 0, opacity: 0 });
        $card.classList.remove("open");
      } else {
        TweenLite.set($card, { height: "auto", opacity: 1 });
        TweenLite.from($card, 0.6, { height: 0, opacity: 0 });
        $card.classList.add("open");
      }
      */
    },
  }
};
</script>

<style lang="scss">
@import "../App.scss";
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

.slide {
  position: relative;
  width: 100%;
  height: 100%;
  .grp {
    .open {
      height: auto;
      transition-property: height;
      transition-duration: 0.3s;
      transition-timing-function: cubic-bezier(0, 1);
	    transition-delay: 0s;
    }
    .close {
      height: 0;
    }
    .margin-2x {
      margin-top: 0.4em;
    }
  }
}
</style>
