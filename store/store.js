// 实现数据共享的vuex
import Vue from "vue"
import Vuex from "vuex"
import car from "./modules/car"
import user from "./modules/user"

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		car,
		user
	},
})

// 向外导出共享Store对象
export default store
