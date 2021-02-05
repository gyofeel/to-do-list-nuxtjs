<template>
  <div class="todo">
      <!-- <span class="number">{{index}}</span> -->
			<span class="text">{{item.text}}</span>
			<div
				class="button-wrap"
			>
				<span class="priority">{{item.priority}}</span>
				<button 
				class="done-button"
				@click="onClickDone"
				:class="{
					'--done': item.isDone
				}"
				></button>
				<button 
					class="delete-button"
					@click="onClickDelete"
				>
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
		},
		methods: {
			onClickDone() {
				this.$emit('bedone', { id: this.item.id, done: !this.item.isDone });
			},
			onClickDelete() {
				this.$emit('delete', { id: this.item.id });
			}
		}
}
</script>

<style lang="scss" scoped>
.todo {
	width: 100%;
	height: 100%;
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	.priority {
		font-style: italic;
	}
	.button-wrap {
		.done-button {
			margin-left: 7px;
			width: 10px;
			height: 10px;
			border: 1px solid $dark-brown;
			&.--done {
				background: $dark-brown;
			}
		}
		.delete-button {
			margin-left: 7px;
			padding: 2px 1px;
			&:hover {
				color: $light-green;
				background: $dark-brown;
			}
		}
	}
}
</style>