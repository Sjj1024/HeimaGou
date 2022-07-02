<template>
	<view>
		<!-- 购物车标题区域 -->
		<view class="car-title">
			<!-- 左侧图标 -->
			<uni-icons type="shop" size="18"></uni-icons>
			<!-- 描述文本 -->
			<text class="car-title-text">购物车</text>
		</view>

		<!-- 实现左右滑动删除商品 -->
		<uni-swipe-action>
			<view v-for="(goods, index) in carList" :key="index">
				<uni-swipe-action-item :right-options="options" @click="delClick(goods)">
					<!-- 购物车里的列表 -->
					<my-goods :good="goods" :showRadio="true" :showNum="true" @radioChange="radioChange"></my-goods>
				</uni-swipe-action-item>
			</view>
		</uni-swipe-action>
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
				options: {
					text: "删除",
					style: {
						backgroundColor: "#C00000"
					}
				}
			};
		},
		// 通过mixins修改购物车图标
		mixins: [carBadge],
		computed: {
			...mapState("car", ["carList"])
		},
		methods: {
			...mapMutations("car", ["updateGoodsState", "delGoods"]),
			radioChange(goods) {
				this.updateGoodsState(goods)
			},
			delClick(goods) {
				console.log(goods);
				this.delGoods(goods.goods_id)
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
