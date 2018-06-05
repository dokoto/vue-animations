<template>
  <section class="slide">
    <Card style="background-color: aliceblue;margin: 0;">
      <button @click="handleClick"
              class="action-button">Show</button>
    </Card>
      <section class="grp">
        <div class="card" ref="card">
          <div class="side" ref="front">
            <img src="https://img00.deviantart.net/50e1/i/2017/178/c/9/bugs_bunny_icon_by_famousmari5-da22q4b.png" />
          </div>
          <div class="side back" ref="back">
            SATANAS
          </div>
        </div>

      </section>
  </section>
</template>

<script>
export default {
  methods: {
    handleClick(ev) {
      const $card = this.$refs.card;
      $card.classList.add("flip");
    }
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
    position: relative;
    perspective: 600px;
    width: 300px;
    height: 300px;
    .card {
      position: absolute;
      width: 100%;
      height: 100%;
      transform-style: preserve-3d;
      transition: all 1s ease-in-out;
      background-color: grey;
      border-radius: 20px;
      .side {
        backface-visibility: hidden;
        height: 100%;
        width: 100%;
        position: absolute;
        img {
          width: 100%;
          height: 100%;
        }
        &.back {
          transform: rotateY(180deg);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      }
      &.flip {
        transform: rotateY(180deg);
      }
    }
    .margin-2x {
      margin-top: 0.4em;
    }
  }
}
</style>
