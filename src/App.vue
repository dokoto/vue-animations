<template>
  <main class="app">
    <Card style="background-color: aliceblue;margin: 0;">
      <button @click="handleClick"
              class="action-button">Show</button>
    </Card>
    <transition enter-active-class="animated fadeInDown"
                leave-active-class="animated fadeOutUp">
      <section class="grp"
               v-show="mustShow">
        <Card>
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
    </transition>

  </main>
</template>

<script>
import { tween, styler } from 'popmotion';
import Card from './components/Card';
import Input from './components/Input';

export default {
  name: 'app',
  components: { Card, Input },
  methods: {
    handleClick(ev) {
      this.mustShow = !this.mustShow;
    },
    animateBeforeEnter(el) {
      $(el).slideDown('slow');
    },
    animateLeave(el, done) {
      $(el).slideUp('slow', () => done());
    }
  },
  data: function() {
    return {
      mustShow: false
    };
  }
};
</script>

<style lang="scss">
@import '/node_modules/animate.css/animate.min.css';
@import './App.scss';
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
  font-family: 'Open Sans', sans-serif;
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
