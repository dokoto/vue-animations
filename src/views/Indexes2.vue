<template>
  <section class="container">
    <div class="indexes" ref="indexes">
      <div class="rows" ref="rows">
        <span id="1" data-visible="true">1 Titulo Top</span>
        <span id="11" data-visible="true">1.1 Sub-Titulo Top</span>
        <span id="111" data-visible="true">1.1.1 Sub-Sub-Titulo Top</span>
        <span id="112" data-visible="false">1.1.2 Sub-Sub-Titulo Top</span>
       <!--
        <span id="2">2 Titulo Top</span>
        <span id="21">2.1 Sub-Titulo Top</span>
        <span id="211">2.1.1 Sub-Sub-Titulo Top</span>
        -->
      </div>
    </div>
    <div class="list" ref="list">
      <span :id="index" v-for="(item, index) in itemsToShow" :key="index">{{ item }}</span>
    </div>
  </section>
</template>

<script>
const rgxNumber = text => Number(/[\d\.]+/.exec(text)[0]);

export default {
  data: function() {
    return {
      lastPosition: 0,
      items: Array.from({ length: 9 }, (k, i) => `1.1.2 Sub-Sub-Titulo Top`),
      fontSize: 0,
      heightRem: 0
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
    const items = this.$refs.rows.querySelectorAll("span");
    this.fontSize = rgxNumber(getComputedStyle(items[0], null).getPropertyValue('font-size'));
    this.heightRem = items[0].offsetHeight / this.fontSize;
    this.$refs.rows.style.height = `${this.heightRem * 3}rem`;
    items.forEach(($el, i) => {
      if ($el.getAttribute('data-visible') === "true")  {
        $el.style.top = `${this.heightRem * i}rem`;
      } else {
        $el.style.top = `${this.heightRem * i}rem`;
      }
    });
  },
  beforeDestroy: function() {
    this.$refs.list.removeEventListener("scroll", this.scrollWatcher);
  },

  methods: {
    scrollWatcher(ev) {
      const indexesRow = this.$refs.rows.querySelectorAll("span");
      const direction =
        this.lastPosition < this.$refs.list.scrollTop ? "down" : "up";
      this.animateScrollTo({
        $el: indexesRow[2],
        limit: rgxNumber(indexesRow[2].style.top) - 10,
        direction,
        step: 0.02
      });
      const step = Math.abs(this.lastPosition - this.$refs.list.scrollTop) / this.fontSize;
      const limit = rgxNumber(indexesRow[2].style.top);
      this.animateScrollTo({
        $el: indexesRow[3],
        limit,
        direction,
        step
      });
      this.animateOpacity({ $el: indexesRow[2], init: 0.99, toDisapear: true, step: 0.08 });
      this.lastPosition = this.$refs.list.scrollTop;
    },
    animateScrollTo({ $el, limit, direction, step = 0.4 }) {
      const top = rgxNumber($el.style.top);
      console.log(limit, top)
      if (limit < top) {
        $el.style.top = direction === "down" ? `${top - step}rem` : `${top + step}rem`;
      }
    },
    animateOpacity({ $el, init, toDisapear, step = 0.03 }) {
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
    },
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
      padding-bottom: 3px; // Refinar
      span {
        line-height: 1.9rem; // Refinar
        position: absolute;
      }
    }
  }
  .list {
    line-height: 1.9rem;  // Refinar
    color: grey;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    height: 150px;
    font-size: 1.2rem;
  }
}
</style>
