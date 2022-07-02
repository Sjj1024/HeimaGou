export default {
	// 为当前模块开启命名空间
	namespaced: true,

	// 模块数据
	state: {
		// 购物车数据
		carList: JSON.parse(uni.getStorageSync("carList") || "[]")
	},
	// 修改state中数据
	mutations: {
		// 添加数据到购物车中
		addToCar(state, goods) {
			// 如果没有找到，结果位undefine，否则返回查找到的商品
			const findGood = state.carList.find(x => x.goods_id === goods.goods_id)
			if (!findGood) {
				state.carList.push(goods)
			} else {
				findGood.goods_count++
			}
			// 持久化存储
			this.commit("car/saveToStorage")
		},
		// 持久化存储购物车中的数据
		saveToStorage(state) {
			uni.setStorageSync("carList", JSON.stringify(state.carList))
		},
		// 修改商品的勾选状态
		updateGoodsState(state, goods) {
			const findGoods = state.carList.find(x => x.goods_id === goods.goods_id)
			if (findGoods) {
				findGoods.goods_state = goods.goods_state
				this.commit("car/saveToStorage")
			}
		}
	},
	// 模块的计算属性
	getters: {
		// 动态统计购物车中的商品数量
		total(state) {
			var count = 0
			state.carList.forEach(goods => count += goods.goods_count)
			return count
		}
	}
}
