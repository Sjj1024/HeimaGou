import {
	mapGetters
} from "vuex"

export default {
	computed: {
		...mapGetters("car", ["total"])
	},
	// 需要刚一加载就执行
	watch: {
		// 动态监听total的变化，给购物车徽标赋值
		total: {
			handler(newVal) {
				uni.setTabBarBadge({
					index: 2,
					text: this.total + ''
				})
			},
			immediate: true
		}
	},
}
