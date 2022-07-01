<template>
	<view>
		购物车
	</view>
</template>

<script>
	import {
		mapGetters
	} from "vuex"
	import carBadge from "@/mixins/tabbar-badge.js"

	export default {
		data() {
			return {

			};
		},
		mixins: [carBadge]
	}
</script>

<style lang="scss">

</style>
