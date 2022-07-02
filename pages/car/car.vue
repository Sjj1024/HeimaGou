<template>
	<view class="car-container" v-if="carList.length !==0 ">
		<!-- 收货地址 -->
		<my-address></my-address>
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
		<!-- 结算区域 -->
		<my-pay></my-pay>
	</view>
	<!-- 空白购物车区域 -->
	<view class="empty-car" v-else>
		<image src="../../static/images/liaotian_active.png" class="empty-img"></image>
		<text>空空如也~</text>
	</view>
</template>

<script>
	import {
		mapState,
		mapGetters,
		mapMutations
	} from "vuex"

	import carBadge from "@/mixins/tabbar-badge"

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
	.car-container {
		padding-bottom: 50px;
	}

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

	.empty-car {
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		.empty-img {
			width: 100px;
			height: 100px;
		}
	}

	page {
		height: 100%;
	}
</style>
