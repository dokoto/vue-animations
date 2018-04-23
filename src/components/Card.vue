<template>
  <section :id="id" class="card white-box">
    <slot />
  </section>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: 'white-card',
    }
  }
};
</script>


<style lang="scss" scoped>
@import '../App.scss';
.card {
  font-family: Arial, Tahoma, HelveticaNeue;
  &.white-box {
    margin-right: 2%;
    margin-left: 2%;
    margin-top: 2%;
    border-radius: 5px;
    padding: 2%;
    background-color: $colorWhite0;
  }
  .title-section {
    padding: 2%;
    background-color: $colorWhite2;
    border-color: $colorGrey4;
    margin-bottom: 3%;
    border-radius: 5px;
    .title {
      font-size: 1.3em;
      font-weight: bold;
      color: $colorDarkGrey3;
    }
  }
}
</style>
