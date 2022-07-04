<template>
	<view class="pay-container">
		<!-- 全选区域 -->
		<label class="radio" @click="checkChange">
			<radio color="#C00000" :checked="isAllCheck" /><text>全选</text>
		</label>
		<!-- 合计区域 -->
		<view class="amount-box">
			合计: <text class="amount">¥{{checkGoodsAmount}}</text>
		</view>

		<!-- 结算按钮 -->
		<view class="btn-pay" @click="settlement">
			结算({{checkCount}})
		</view>
	</view>
</template>

<script>
	import {
		mapGetters,
		mapMutations,
		mapState
	} from "vuex"

	export default {
		name: "my-pay",
		data() {
			return {

			};
		},
		computed: {
			...mapGetters("car", ["checkCount", "total", "checkGoodsAmount"]),
			// addstr 是详细的收货地址
			...mapGetters('user', ['addstr']),
			// token 是用户登录成功之后的 token 字符串
			...mapState('user', ['token']),
			isAllCheck() {
				return this.total === this.checkCount
			}
		},
		methods: {
			...mapMutations("car", ["updateAllGoodsState"]),
			checkChange() {
				this.updateAllGoodsState(!this.isAllCheck)
			},
			// 点击了结算按钮
			settlement() {
				// 1. 先判断是否勾选了要结算的商品
				if (!this.checkCount) return uni.$showMsg('请选择要结算的商品！')
				// 2. 再判断用户是否选择了收货地址
				if (!this.addstr) return uni.$showMsg('请选择收货地址！')
				// 3. 最后判断用户是否登录了
				if (!this.token) return uni.$showMsg('请先登录！')
			}
		}
	}
</script>

<style lang="scss">
	.pay-container {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 50px;
		background-color: white;

		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left: 5px;
		font-size: 14px;

		.radio {
			display: flex;
			align-items: center;
		}

		.amount {
			color: #C00000;
		}

		.btn-pay {
			height: 50px;
			min-width: 100px;
			background-color: #C00000;
			color: white;
			line-height: 50px;
			text-align: center;
			padding: 0 10px;
		}
	}
</style>
