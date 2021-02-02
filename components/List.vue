<template>
	<ul class="list">
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
</template>

<script lang="ts">
export default {
	props: {
			list: {
					type: Array,
					default: []
			}
	}
}
</script>

<style land="scss" scoped>

</style>