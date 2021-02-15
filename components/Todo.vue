<template>
  <div 
		class="todo"
		@click="onClickDone"
  >
			<span class="text">{{item.text}}</span>
			<div
				class="button-wrap"
			>
				<span class="priority">{{item.priority}}</span>
				<div 
				class="done-button"
				:class="{
					'--done': item.isDone
				}"
				></div>
				<div 
					class="delete-button"
					@click="onClickDelete"
				>삭제</div>
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
	padding: 7px 5px;
	cursor: pointer;

	&:hover {
		outline: 1px solid $dark-brown;
	}
	.text {
		font-weight: bold;
	}
	.priority {
		font-style: italic;
		font-weight: bold;
	}
	.button-wrap {
		display: flex;
		align-items: center;
		.done-button {
			margin-left: 7px;
			width: 15px;
			height: 15px;
			border: 1px solid $dark-brown;
			&.--done {
				background: $dark-brown;
			}
		}
		.delete-button {
			margin-left: 7px;
			font-size: $font-xs;
			&:hover {
				color: $light-green;
				background: $dark-brown;
			}
		}
	}
}
</style>