<template>
  <section class="container">
    <div class="indexes" ref="indexes">
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
    <div class="list" ref="list">
      <span :id="index" v-for="(item, index) in itemsToShow" :key="index">{{ item }}</span>
    </div>
  </section>
</template>

<script>
import TweenLite from "gsap/TweenLite";
import TimelineLite from "gsap/TimelineLite";

export default {
  data: function() {
    return {
      lastPosition: 0,
      items: Array.from({ length: 21 }, (k, i) => `Titulo ${i} ${new Date()}`)
    };
  },
  computed: {
    itemsToShow: function() {
      return this.items;
    }
  },
  mounted() {
    const $list = this.$refs.list;
    $list.addEventListener("scroll", this.scrollWatcher);
  },
  beforeDestroy: function() {
    this.$refs.list.removeEventListener("scroll", this.scrollWatcher);
  },
  methods: {
    scrollWatcher(ev) {
      const indexes = this.$refs.indexes;
      if (!indexes.style.opacity) {
        indexes.style.opacity = '0.9';
      } else {
        const opacity = Number(indexes.style.opacity);
        if (this.lastPosition < this.$refs.list.scrollTop) {
          indexes.style.opacity = `${ opacity > 0 ? opacity - 0.1 : opacity }`;
        } else {
          indexes.style.opacity = `${ opacity < 1 ? opacity + 0.1 : opacity }`;
        }
      }
      this.lastPosition  = this.$refs.list.scrollTop;
    },
    handleClick(ev) {
      const $indexes = this.$refs.indexes;
      const $items = $listTop.querySelectorAll("span");
      const tl = new TimelineLite();
      if ($listBottom.classList.contains("under")) {
        tl
          .to($items[1], 1, {
            bottom: "0",
            transform: "scaleY(1)"
          })
          .to(
            $items[1],
            1,
            {
              opacity: 1
            },
            "-=1"
          )
          .to(
            $items[2],
            1,
            {
              bottom: "0",
              transform: "scaleY(1)"
            },
            "-=1"
          )
          .to(
            $items[2],
            1,
            {
              opacity: 1
            },
            "-=1"
          );
        $listBottom.classList.remove("under");
      } else {
        tl
          .to($items[1], 1, {
            bottom: "5px",
            transform: "scaleY(0.9)"
          })
          .to(
            $items[1],
            1,
            {
              opacity: 0
            },
            "-=1"
          )
          .to(
            $items[2],
            1,
            {
              bottom: "5px",
              transform: "scaleY(0.9)"
            },
            "-=1"
          )
          .to(
            $items[2],
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
  .indexes {
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
  }
  .list {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    height: 300px;
  }
}
</style>
