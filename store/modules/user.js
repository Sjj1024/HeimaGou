export default {
	namespaced: true,
	state: {
		address: JSON.parse(uni.getStorageSync("address") || "{}")
	},

	// 方法
	mutations: {
		updateAddress(state, address) {
			state.address = address
			console.log("更新vuex中的地址");
			this.commit("user/saveAddressToStorage")
		},
		saveAddressToStorage(state) {
			uni.setStorageSync("address", JSON.stringify(state.address))
		}
	},

	// 数据包装起
	getters: {
		addstr(state) {
			console.log(state.address);
			if (!state.address.provinceName) return ""
			return state.address.provinceName + state.address.cityName + state.address.countyName + state.address
				.detailInfo
		},
	}
}
