<template>
<div class="list">
  <h4 class="title">{{title}}</h4>
  <ul class="list-ul">
		<li
			class="list-item"
			v-for="(el, index) in list"
			:key="index"
		>
			<slot
				name="item"
				:index="index"
				:item="el"
			>
			</slot>
		</li>
	</ul>
</div>
</template>

<script lang="ts">
export default {
	props: {
			title: String,
			list: {
					type: Array,
					default: []
			}
	}
}
</script>

<style lang="scss" scoped>
.list {
	padding: 30px 0;
	display: flex;
	flex-flow: column nowrap;
	
	.title {
		font-style: italic;
		text-decoration: underline;
	}
	.list-ul {
		margin-top: 10px;
		display: flex;
		flex-flow: column nowrap;
		min-width: 200px;
		max-width: 300px;
	}
}
</style>