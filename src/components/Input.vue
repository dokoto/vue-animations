<template>
  <div :id="id"
       class="input-boxed-container flex-row flex-align-first-corners flex-align-second-center">
    <input type="text"
           maxlength="200"
           class="input"
           :class="[ noBorder ? 'no-boxed' : 'boxed'  ]"
           :placeholder="placeHolder"
           :readonly="readOnly"
           :value="value" />
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: 'input-boxed'
    },
    placeHolder: {
      type: String,
      default: 'Address'
    },
    readOnly: {
      type: Boolean,
      default: true
    },
    noBorder: {
      type: Boolean,
      default: false
    },
    value: {
      type: String
    }
  },
  methods: {
    handleInputBoxedClick(ev) {
      this.$emit('handleInputBoxedClick', ev);
    },
    handleInputBoxedOnChange(ev) {
      console.log('hitler');
      this.$emit('inputBoxed:onChange', ev);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../App.scss';
.input-boxed-container {
  position: relative;
  height: 2.5rem;
  .input {
    font-family: Arial, Tahoma, HelveticaNeue;
    outline: none;
    width: 100%;
    padding-left: 10px;
    height: 100%;
    font-size: 1.2em;
    padding-bottom: 0;
    padding-top: 0;
    &.boxed {
      border: solid 1px;
      border-color: $colorGrey3;
      padding-right: 4rem;
      border-radius: 5px;
    }
    &.no-boxed {
      border: solid 0px;
    }
  }
  .input-icon {
    position: absolute;
    right: 0;
    width: 3rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: $colorWhite0;
    border-bottom: 0;
    border-top: 0;
    &.boxed {
      border: solid 1px;
      border-color: $colorGrey3;
      border-radius: 0px 5px 5px 0px;
    }
    &.no-boxed {
      border: solid 0px;
    }
  }
}
</style>
