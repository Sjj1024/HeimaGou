<template>
	<view>
		<!-- 购物车标题区域 -->
		<view class="car-title">
			<!-- 左侧图标 -->
			<uni-icons type="shop" size="18"></uni-icons>
			<!-- 描述文本 -->
			<text class="car-title-text">购物车</text>
		</view>
		<!-- 购物车里的列表 -->
		<my-goods v-for="(goods, index) in carList" :key="index" :good="goods" :showRadio="true"
			@radioChange="radioChange"></my-goods>
	</view>
</template>

<script>
	import {
		mapState,
		mapGetters,
		mapMutations
	} from "vuex"

	import carBadge from "@/mixins/tabbar-badge.js"

	export default {
		data() {
			return {

			};
		},
		// 通过mixins修改购物车图标
		mixins: [carBadge],
		computed: {
			...mapState("car", ["carList"])
		},
		methods: {
			...mapMutations("car", ["updateGoodsState"]),
			radioChange(goods) {
				console.log(goods);
				this.updateGoodsState(goods)
			}
		}
	}
</script>

<style lang="scss">
	.car-title {

		height: 40px;
		display: flex;
		align-items: center;
		font-size: 14px;
		padding-left: 5px;
		border-bottom: 1px solid #efefef;

		.car-title-text {
			margin-left: 10px;
		}
	}
</style>
