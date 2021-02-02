<template>
  <div class="todo">
      <span class="number">{{index}}</span>
			<span class="text">{{item.text}}</span>
			<span class="priority">{{item.priority}}</span>
			<div
				class="button-wrap"
			>
				<button 
				class="done-button"
				:class="{
					'--done': item.isDone
				}"
				></button>
				<button class="delete-button">
					삭제
				</button>
			</div>
  </div>
</template>

<script lang="ts">
export default {
    props: {
      index: Number,
      item: {
        type: Object,
        default: {}
      }
    }
}
</script>

<style lang="scss" scoped>
</style>