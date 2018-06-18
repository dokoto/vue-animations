<template>
  <section class="container">
    <div class="indexes" ref="indexes">
      <div class="rows" ref="rows">
        <span class="row" ref="row" v-for="(item, index) in indexes" :key="index" :id="item.id" :data-visible="item.visible">{{ item.text }}</span>
      </div>
    </div>
    <div class="list" ref="list" @scroll="scrollWatcher">
      <span :id="index" v-for="(item, index) in itemsToShow" :key="index">{{ item }}</span>
    </div>
  </section>
</template>

<script>
const rgxNumber = text => Number(/[\d\.]+/.exec(text)[0]);
const DOWN = 'DOWN';
const UP = 'UP';

export default {
  data: function() {
    return {
      lastPosition: 0,
      items: Array.from({ length: 9 }, (k, i) => `1.1.2 Sub-Sub-Titulo Top`),
      indexes: [
        { id: "1", text: "1 Titulo Top", visible: true },
        { id: "11", text: "1.1 Titulo Top", visible: true },
        { id: "111", text: "1.1.1 Titulo Top", visible: true },
        { id: "112", text: "1.1.2 Titulo Top", visible: false }
      ],
      fontSize: 0,
      heightRem: 0,
      limit: []
    };
  },
  computed: {
    itemsToShow: function() {
      return this.items;
    }
  },
  mounted() {
    const $list = this.$refs.list;
    const items = this.$refs.row;
    this.fontSize = rgxNumber(
      getComputedStyle(items[0], null).getPropertyValue("font-size")
    );
    this.heightRem = items[0].offsetHeight / this.fontSize;
    this.$refs.rows.style.height = `${this.heightRem * 3}rem`;
    this.$refs.list.style.lineHeight = this.heightRem;
    items.forEach(($el, i) => {
      $el.style.lineHeight = this.heightRem;
      if ($el.getAttribute("data-visible") === "true") {
        $el.style.top = `${this.heightRem * i}rem`;
      } else {
        $el.style.top = `${this.heightRem * i}rem`;
      }
    });
    this.limit = items.map(e => rgxNumber(e.style.top));
  },
  methods: {
    scrollWatcher(ev) {
      if (this.getDirection() === DOWN) {
        this.animationOfAddIndex();
      } else {
        this.animationOfRemoveIndex();
      }
      this.lastPosition = this.$refs.list.scrollTop;
    },
    animationOfAddIndex() {
      const indexesRow = this.$refs.row;
      this.animOneFrameScrollTo({
        $el: indexesRow[2],
        limit: this.limit[1] - 0.5,
        direction: DOWN,
        step: 0.02
      });

      const step =
        Math.abs(this.lastPosition - this.$refs.list.scrollTop) / this.fontSize;

      this.animOneFrameScrollTo({
        $el: indexesRow[3],
        limit: this.limit[2],
        direction: DOWN,
        step,
        debug: false
      });

      this.animOneFrameOpacity({
        $el: indexesRow[2],
        init: 0.99,
        toDisapear: true,
        step: 0.04
      });
    },
    animationOfRemoveIndex() {
      const indexesRow = this.$refs.row;

      this.animOneFrameScrollTo({
        $el: indexesRow[2],
        limit: this.limit[2],
        direction: UP,
        step: 0.02
      });

      const step =
        Math.abs(this.lastPosition - this.$refs.list.scrollTop) / this.fontSize;

      this.animOneFrameScrollTo({
        $el: indexesRow[3],
        limit: this.limit[3],
        direction: UP,
        step,
        debug: true
      });

      this.animOneFrameOpacity({
        $el: indexesRow[2],
        init: 0.99,
        toDisapear: false,
        step: 0.06
      });
    },
    getDirection() {
      return this.lastPosition < this.$refs.list.scrollTop ? DOWN : UP;
    },
    animOneFrameScrollTo({ $el, limit, direction, step = 0.4, debug = false }) {
      requestAnimationFrame(this.frameHdlScroolTo.bind(this, { $el, limit, direction, step, debug }));
    },
    frameHdlScroolTo({ $el, limit, direction, step, debug }) {
      const top = rgxNumber($el.style.top);
      if (debug) console.log(`[SCROLL] limit/top ${limit} ${top}`);
      if (
        (direction === DOWN && limit < top) ||
        (direction === UP && limit > top)
      ) {
        $el.style.top =
          direction === DOWN ? `${top - step}rem` : `${top + step}rem`;
      }
    },
    animOneFrameOpacity({ $el, init, toDisapear, step = 0.03 }) {
      requestAnimationFrame(this.frameHdlOpacity.bind(this, { $el, init, toDisapear, step }));
    },
    frameHdlOpacity({ $el, init, toDisapear, step }) {
      if (!$el.style.opacity) {
        $el.style.opacity = String(init);
      } else {
        const opacity = Number($el.style.opacity);
        if (toDisapear) {
          $el.style.opacity = `${opacity > 0 ? opacity - step : opacity}`;
        } else {
          $el.style.opacity = `${opacity < 1 ? opacity + step : opacity}`;
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../App.scss";
.container {
  font-size: 16px;
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
    width: 100%;
    .rows {
      position: relative;
      display: flex;
      flex-direction: column;
      font-size: 1.2rem;
      height: 4rem;
      width: 100%;
      overflow-y: hidden;
      padding-bottom: 0.18rem; // 3px Refinar
      .row {
        position: absolute;
      }
    }
  }
  .list {
    color: grey;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    height: 150px;
    font-size: 1.2rem;
  }
}
</style>
