<template>
  <section class="container">
      <button @click="handleClick"
              class="action-button">Show</button>
    <div class="list top" ref="listTop">
      <div class="row">
        <span>1 Titulo Top</span>
      </div>
      <div class="row">
        <span>1.1 Sub-Titulo Top</span>
      </div>
      <div class="row">
        <span>1.1.1 Sub-Sub-Titulo Top</span>
      </div>
    </div>
    <div class="list bottom" ref="listBottom">
      <span>2 Titulo Bottom</span>
      <span>2.1 Sub-Titulo Bottom</span>
      <span>2.1.1 Sub-Sub-Titulo Bottom</span>
    </div>
  </section>
</template>

<script>
import TweenLite from "gsap/TweenLite";
import TimelineLite from "gsap/TimelineLite";

export default {
  methods: {
    handleClick(ev) {
      const $listTop = this.$refs.listTop;
      const $listBottom = this.$refs.listBottom;
      const $items = $listTop.querySelectorAll("span");
      const tl = new TimelineLite();
      if ($listBottom.classList.contains("under")) {
        tl
          .to($items[0], 1, {
            bottom: "0",
            transform: "scaleY(1)"
          })
          .to(
            $items[0],
            1,
            {
              opacity: 1
            },
            "-=1"
          )
          .to($items[1], 1, {
            bottom: "0",
            transform: "scaleY(1)"
          }, '-=1')
          .to(
            $items[1],
            1,
            {
              opacity: 1
            },
            "-=1"
          );
        $listBottom.classList.remove("under");
      } else {
        tl
          .to($items[0], 1, {
            bottom: "5px",
            transform: "scaleY(0.9)"
          })
          .to(
            $items[0],
            1,
            {
              opacity: 0
            },
            "-=1"
          )
          .to($items[1], 1, {
            bottom: "5px",
            transform: "scaleY(0.9)"
          }, '-=1')
          .to(
            $items[1],
            1,
            {
              opacity: 0
            },
            "-=1"
          );
        $listBottom.classList.add("under");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../App.scss";
.container {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 5%;
  .list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 2%;
    width: 100%;
    .row {
      min-height: 2em;
      position: relative;
      width: 100%;
      span {
        position: absolute;
        bottom: 0px;
      }
    }
    &.top {
      top: 10%;
      color: black;
    }
    &.bottom {
      top: 20%;
      color: blue;
    }
  }
}
</style>
