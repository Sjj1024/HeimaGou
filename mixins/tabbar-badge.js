import {
	mapGetters
} from "vuex"

export default {
	computed: {
		...mapGetters("car", ["total"])
	},
	// onLoad(options) {
	// 	console.log("mixins中的onload执行了");
	// 	this.setCarBadge()
	// },
	onShow() {
		this.setCarBadge()
	},
	// 需要刚一加载就执行
	watch: {
		// 动态监听total的变化，给购物车徽标赋值
		total: {
			handler(newVal) {
				this.setCarBadge()
			},
			immediate: true
		}
	},
	methods: {
		setCarBadge() {
			uni.setTabBarBadge({
				index: 2,
				text: this.total + ''
			})
		}
	}
}
