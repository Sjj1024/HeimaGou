<template>
	<view class="my-container">
		<!-- 登陆页面 -->
		<my-login v-if="!token"></my-login>
		<!-- 登陆后的个人信息页面 -->
		<my-info v-else></my-info>
	</view>
</template>

<script>
	// 1. 从 vuex 中按需导入 mapState 辅助函数
	import {
		mapState
	} from 'vuex'
	import carBadge from "@/mixins/tabbar-badge.js"
	export default {
		data() {
			return {

			};
		},
		mixins: [carBadge],
		computed: {
			// 2. 从 m_user 模块中导入需要的 token 字符串
			...mapState('user', ['token']),
		}
	}
</script>

<style lang="scss">
	page,
	.my-container {
		height: 100%;
	}
</style>
