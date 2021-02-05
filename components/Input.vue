<template>
<div class="input-wrap">
  <div class="value-wrap">
    <input class="input" v-model="inputText" type="text" />
    <div 
      class="priority-selector"
      :class="`--${priority}`"
      @click="onClickPriority"
    >
      <span class="low">low</span>
      |
      <span class="medium">medium</span>
      |
      <span class="high">high</span>
    </div>
  </div>
  <button class="add-button" @click="onClickAdd">Add</button>
</div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      inputText: '',
      priority: 'low'
    }
  },
  methods: {
    onClickAdd() {
      if (!this.inputText) {
        return;
      }
      this.$emit('click', { text: this.inputText, priority: this.priority });
      this.inputText = '';
    },
    onClickPriority(e) {
      this.priority = e.target.className;
    }
  }
}
</script>

<style lang="scss" scoped>
.input-wrap {
  padding: 20px 0;
  display: flex;
  flex-flow: low wrap;
  // align-items: center;
  $priority: (low, medium, high);
  .value-wrap {
    height: 120px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: center;
    .input {
      background: transparent;
      border: none;
      border-bottom: 3px solid $dark-brown;
      padding: 15px 10px 5px;
      font-size: $font-m;
      &:focus {
        outline: none;
      }
    }

    .priority-selector {
      font-size: $font-m;
      cursor: pointer;
      font-style: italic;
      @each $el in $priority {
        &.--#{$el} {
          .#{$el} {
            padding: 3px 2px;
            background-color: $dark-brown;
            color: $light-green;
          }
        }
      }
    }
  }

  .add-button {
    height: 50px;
    font-size: $font-l;
    margin-left: 15px;
    margin-top: 20px;
    text-decoration: underline;
    &:hover {
      color: $light-green;
      background: $dark-brown;
    }
  }
}
</style>