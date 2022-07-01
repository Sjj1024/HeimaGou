// 实现数据共享的vuex
import Vue from "vue"
import Vuex from "vuex"
import car from "./modules/car"

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		car
	},
})

// 向外导出共享Store对象
export default store
