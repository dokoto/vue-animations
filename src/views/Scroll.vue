<template>
  <div class="vertical-scroll">
    <div class="horizontal-scroll">
      <div class="square" v-for="(item, index) in collection1" :key="index"><span class="child">{{ index }}</span></div>
    </div>
    <div class="horizontal-scroll">
      <div class="square" v-for="(item, index) in collection1" :key="index"><span class="child">{{ index }}</span></div>
    </div>
    <div class="horizontal-scroll">
      <div class="square" v-for="(item, index) in collection1" :key="index"><span class="child">{{ index }}</span></div>
    </div>
    <div class="horizontal-scroll">
      <div class="square" v-for="(item, index) in collection1" :key="index"><span class="child">{{ index }}</span></div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      collection1: Array.from({ length: 21 }, (k, i) => i),
      collection2: Array.from({ length: 11 }, (k, i) => i),
      collection3: Array.from({ length: 15 }, (k, i) => i),
      collection4: Array.from({ length: 5 }, (k, i) => i)
    };
  }
};
</script>


<style lang="scss" scoped>
  .vertical-scroll {
    font-size: 16px;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    .horizontal-scroll {
      width: 100%;
      margin: .5rem;
      overflow-x: scroll;
      display: flex;
      flex-direction: row;
      .square {
        flex-shrink: 0;
        margin-left: .2rem;
        width: 200px;
        height: 150px;
        background-color: grey;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .child {
          font-size: 3rem;
          font-weight: bold;
        }
      }
    }
  }
</style>
