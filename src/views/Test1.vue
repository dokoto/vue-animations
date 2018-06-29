<template>
  <div class="container flex-row">
    <section class="test1 flex-column">
      <div class="indexes flex-column">
        <div class="index" ref="index" v-for="(val, index) in Array.from({length: 5}, (k, i) => i)" :key="index">{{ val }}</div>
      </div>
      <div class="titles flex-column">
        <div class="title" ref="title" v-for="(val, index) in Array.from({length: 5}, (k, i) => i)" :key="index">{{ val }}</div>
      </div>
    </section>
</div>
</template>

<script>
const cssValue = ($el, prop) =>
    getComputedStyle($el, null).getPropertyValue(prop);

export default {
  mounted() {
    console.log(`title-offsetHeight: ${this.$refs.title[0].offsetHeight}`)
    console.log(`title-font-size: ${cssValue(this.$refs.title[0], 'font-size')}`)
  }
}
</script>


<style lang="scss" scoped>
.flex-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.flex-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.container {
  height: 100vh;
  width: 100%;
  font-size: 0.5rem;
  .test1 {
    height: 96%;
    width: 100%;
    margin: 2rem;
    border: solid 1px orange;
    .indexes {
      font-size: 2rem;
      border: solid 1px red;
      width: 100%;
      .index {
        color: blue;
      }
    }
    .titles {
      font-size: 2rem;
      border: solid 1px blue;
      width: 100%;
      .title {
        color: green;
      }
    }
  }
}
</style>
