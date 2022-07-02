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
		<view class="btn-pay">
			结算({{checkCount}})
		</view>
	</view>
</template>

<script>
	import {
		mapGetters,
		mapMutations
	} from "vuex"

	export default {
		name: "my-pay",
		data() {
			return {

			};
		},
		computed: {
			...mapGetters("car", ["checkCount", "total", "checkGoodsAmount"]),
			isAllCheck() {
				return this.total === this.checkCount
			}
		},
		methods: {
			...mapMutations("car", ["updateAllGoodsState"]),
			checkChange() {
				this.updateAllGoodsState(!this.isAllCheck)
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
